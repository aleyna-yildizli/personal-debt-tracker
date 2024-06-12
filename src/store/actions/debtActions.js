import { API } from '../../api';

export const ADD_DEBT = 'ADD_DEBT';
export const UPDATE_DEBT = 'UPDATE_DEBT';
export const SET_SELECTED_DEBT = 'SET_SELECTED_DEBT';
export const FETCH_DEBTS = 'FETCH_DEBTS';
export const UPDATE_PAYMENT_STATUS = 'UPDATE_PAYMENT_STATUS';
export const FETCH_PAYMENT_PLANS = "FETCH_PAYMENT_PLANS";

// Borç ekleme eylemi
export const addDebtAction = (debt) => ({
  type: ADD_DEBT, payload: debt,
});

// Borç güncelleme eylemi
export const updateDebtAction = (debt) => ({
  type: UPDATE_DEBT, payload: debt,
});

// Seçili borcu ayarlama eylemi
export const setSelectedDebt = (debt) => ({
  type: SET_SELECTED_DEBT, payload: debt,
});


export const fetchPaymentPlans = (debtId) => async (dispatch) => {
    try {
      const response = await API.get(`finance/payment-plans/${debtId}`);
      dispatch({ type: FETCH_PAYMENT_PLANS, payload: response.data });
      console.log("Fetched Payment Plans: ", response.data); // Veriyi consola yazdır
      return response.data; // Veriyi döndür
    } catch (error) {
      console.error('Error fetching payment plans:', error);
    }
  };

// Ödeme durumu güncelleme işlemi
export const updatePaymentStatus = (debtId, paymentDate, paymentAmount, paymentPlanId, isPaid) => async (dispatch, getState) => {
    const state = getState();
    const selectedDebt = state.debts.debts.find(debt => debt.id === debtId);
    const paymentPlan = selectedDebt.paymentPlan.find(plan => plan.id === paymentPlanId); //TODO try içine al
    console.log("update payment plannnn:", paymentPlan);
    try {
      const payload = {
        paymentDate: paymentDate,
        paymentAmount: paymentAmount,
        isPaid: isPaid,
      };
      console.log("update payment plannnn:", paymentPlan);
      console.log("Updating Payment Status for:", paymentPlanId, "with payload:", payload); // Debugging line
  
      await API.put(`/finance/payment-plans/${paymentPlanId}`, payload);
      
      dispatch({
        type: UPDATE_PAYMENT_STATUS,
        payload: { debtId, paymentPlanId, isPaid }
      });
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

// Borçları getirme eylemi
export const fetchDebts = () => async (dispatch) => {
    try {
      const response = await API.get('/finance/debt');
      const debtsWithPaymentPlan = response.data.data.map(debt => {
        const paymentPlan = calculatePaymentPlan(
          debt.debtAmount,
          debt.amount,
          debt.paymentStart,
          debt.installment,
          debt.paymentPlan
        );
        return {
          ...debt,
          paymentPlan
        };
      });
      dispatch({ type: FETCH_DEBTS, payload: debtsWithPaymentPlan });
      console.log("Fetched Debts: ", response.data);
    } catch (error) {
      console.error('Error fetching debts:', error);
    }
  };

// Ödeme planı hesaplama fonksiyonu
const calculatePaymentPlan = (debtAmount, amount, paymentStart, installment) => {
    const paymentPlan = [];
    const monthlyAmount = amount / installment;
    for (let i = 0; i < installment; i++) {
      const paymentDate = new Date(paymentStart);
      paymentDate.setMonth(paymentDate.getMonth() + i);
      paymentPlan.push({
        paymentDate: paymentDate.toISOString(),
        paymentAmount: monthlyAmount,
      });
    }
    return paymentPlan;
  };

// Borç ekleme iş mantığı
export const addDebt = (data) => async (dispatch) => {
    const paymentPlan = calculatePaymentPlan(
      data.debtAmount,
      data.amount,
      data.paymentStart,
      data.installment
    ).map(plan => ({
      paymentDate: plan.paymentDate,
      paymentAmount: plan.paymentAmount,
      isPaid: plan.isPaid
    }));
  
    const postData = {
      ...data,
      paymentPlan,
    };
  
    try {
      await API.post('finance/debt', postData);
      dispatch(fetchDebts());
    } catch (error) {
      console.error('Error adding debt:', error);
      throw error;
    }
  };

// Borç güncelleme iş mantığı
export const updateDebt = (debtId, data) => async (dispatch) => {
    const paymentPlan = calculatePaymentPlan(
      data.debtAmount,
      data.amount,
      data.paymentStart,
      data.installment
    ).map(plan => ({
      paymentDate: plan.paymentDate,
      paymentAmount: plan.paymentAmount,
      isPaid: plan.isPaid
    }));
  
    const postData = {
      ...data,
      paymentPlan,
    };
  
    try {
      const response = await API.put(`finance/debt/${debtId}`, postData);
      console.log("Update Debt Response: ", response.data);
      dispatch(fetchDebts());
    } catch (error) {
      console.error('Error updating debt:', error);
      throw error;
    }
  };