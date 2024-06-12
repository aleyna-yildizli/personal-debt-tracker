import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePaymentStatus } from "../store/actions/debtActions";
import WithAuth from "../components/WithAuth";

const PaymentPlan = () => {
  const selectedDebt = useSelector((state) => state.debts.selectedDebt);
  const dispatch = useDispatch();

  if (!selectedDebt || !selectedDebt.paymentPlan) {
    return (
      <div className="flex justify-center text-center">
        Ödeme planı bulunmamaktadır
      </div>
    );
  }

  const handlePaymentStatusChange = (paymentPlanId, isPaid) => {
    console.log("PaymentPlanId:", paymentPlanId, "isPaid:", isPaid); // Debugging line
    dispatch(updatePaymentStatus(selectedDebt.id, paymentPlanId, isPaid));
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-4xl font-bold my-6">Ödeme Planı</h1>
      <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{selectedDebt.debtName}</h2>
        <div className="space-y-4">
          {selectedDebt.paymentPlan.map((plan, index) => {
            console.log("Plan ID:", plan.id); // Debugging line
            return (
              <div
                key={plan.id}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    {index + 1}. Taksit
                  </h3>
                  <p>
                    <span className="font-semibold">Ödeme Tarihi:</span>{" "}
                    {new Date(plan.paymentDate).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Ödeme Miktarı:</span>{" "}
                    {plan.paymentAmount} ₺
                  </p>
                </div>
                <div className="flex items-center">
                  <label className="mr-2 font-semibold">Ödendi:</label>
                  <input
                    type="checkbox"
                    checked={plan.isPaid}
                    onChange={() =>
                      handlePaymentStatusChange(plan.id, !plan.isPaid)
                    }
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WithAuth(PaymentPlan);
