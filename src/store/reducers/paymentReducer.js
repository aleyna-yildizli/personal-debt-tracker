import { UPDATE_PAYMENT_STATUS } from '../actions/paymentActions';

const initialState = {
  payments: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAYMENT_STATUS:
      return {
        ...state,
        payments: state.payments.map(payment => 
          payment.id === action.payload.debtId
            ? {
                ...payment,
                paymentPlan: payment.paymentPlan.map(plan => 
                  plan.paymentPlanId === action.payload.paymentPlanId
                    ? { ...plan, isPaid: action.payload.isPaid }
                    : plan
                ),
              }
            : payment
        ),
      };
    default:
      return state;
  }
};

export default paymentReducer;






{/*  paymentReducer.js: Ödeme durumu state yönetimi.*/}