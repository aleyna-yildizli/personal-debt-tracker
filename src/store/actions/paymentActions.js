
export const UPDATE_PAYMENT_STATUS = 'UPDATE_PAYMENT_STATUS';


export const updatePaymentStatus = (debtId, paymentPlanId, isPaid) => ({
  type: UPDATE_PAYMENT_STATUS,
  payload: { debtId, paymentPlanId, isPaid },
});


{/*  paymentActions.js: Ödeme durumları ile ilgili işlemler. */}