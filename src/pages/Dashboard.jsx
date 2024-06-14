import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDebts } from "../store/actions/debtActions";
import WithAuth from "../components/WithAuth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const debts = useSelector((state) => state.debts.debts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadDebts = async () => {
      setIsLoading(true);
      await dispatch(fetchDebts());
      setIsLoading(false);
    };

    if (debts.length === 0) {
      loadDebts();
    }
  }, [dispatch, debts.length]);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-4 text-4xl font-bold text-gray-600 ">
        Loading...
      </div>
    );
  }

  const totalDebt = debts.reduce((total, debt) => total + debt.amount, 0);

  const paidDebt = debts.reduce((total, debt) => {
    const paidAmount = debt.paymentPlan
      .filter((payment) => payment.isPaid)
      .reduce((sum, payment) => sum + payment.paymentAmount, 0);
    return total + paidAmount;
  }, 0);

  const upcomingPayments = debts
    .flatMap((debt) => debt.paymentPlan)
    .filter(
      (payment) => !payment.isPaid && new Date(payment.paymentDate) > new Date()
    )
    .sort((a, b) => new Date(a.paymentDate) - new Date(b.paymentDate))
    .slice(0, 5);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatAmount = (amount) => {
    return amount.toFixed(2);
  };

  return (
    <div className="flex-1 w-full h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-4xl font-bold my-6">Dashboard</h1>
        <div className="w-full max-w-4xl flex flex-wrap justify-between gap-4">
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Toplam Borç</h2>
            <p className="text-2xl font-bold text-red-600">
              {totalDebt.toFixed(2)} ₺
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Ödenen Borç</h2>
            <p className="text-2xl font-bold text-green-500">
              {paidDebt.toFixed(2)} ₺
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white p-2 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex text-center">
              Yaklaşan Ödeme Tarihleri
            </h2>
            {upcomingPayments.length > 0 ? (
              <ul className="list-disc ml-4">
                {upcomingPayments.map((payment, index) => (
                  <li key={index} className="text-lg">
                    {formatDate(payment.paymentDate)}:{" "}
                    {formatAmount(payment.paymentAmount)} ₺
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg text-center">
                Yaklaşan ödemeniz bulunmamaktadır.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuth(Dashboard);
