import React from "react";
import { useSelector } from "react-redux";
import WithAuth from "../components/WithAuth";

const Dashboard = () => {
  const debts = useSelector((state) => state.debts.debts); // state.debts.debts olmalı

  const totalDebt = debts.reduce((total, debt) => total + debt.amount, 0);
  const paidDebt = debts.reduce(
    (total, debt) =>
      total +
      debt.paymentPlan
        .filter((payment) => payment.isPaid)
        .reduce((sum, payment) => sum + payment.paymentAmount, 0),
    0
  );
  const upcomingPayments = debts
    .flatMap((debt) => debt.paymentPlan)
    .filter(
      (payment) => !payment.isPaid && new Date(payment.paymentDate) > new Date()
    )
    .sort((a, b) => new Date(a.paymentDate) - new Date(b.paymentDate))
    .slice(0, 5); // Yaklaşan ilk 5 ödemeyi göster

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-4xl font-bold my-6">Dashboard</h1>
      <div className="w-full max-w-4xl flex flex-wrap justify-between gap-4">
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Toplam Borç</h2>
          <p className="text-2xl font-bold">{totalDebt} ₺</p>
        </div>

        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Ödenen Borç</h2>
          <p className="text-2xl font-bold">{paidDebt} ₺</p>
        </div>

        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Yaklaşan Ödeme Tarihleri</h2>
          <ul className="list-disc ml-4">
            {upcomingPayments.map((payment, index) => (
              <li key={index} className="text-lg">
                {payment.paymentDate}: {payment.paymentAmount} ₺
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Borç Durumu Grafiği</h2>
      </div>
    </div>
  );
};

export default WithAuth(Dashboard);
