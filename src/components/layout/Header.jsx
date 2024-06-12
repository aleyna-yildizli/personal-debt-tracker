import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-10 py-3 ">
        <span className="text-sky-500 font-semibold text-2xl">DebtsMaster</span>
        <div className="flex space-x-6">
          <Link
            to="/dashboard"
            className="text-sky-500 no-underline font-semibold text-lg hover:underline"
          >
            Dashboard
          </Link>
          <Link
            to="/debts"
            className="text-sky-500 no-underline  font-semibold text-lg hover:underline"
          >
            Debts
          </Link>
          <Link
            to="/payment-plans"
            className="text-sky-500 no-underline  font-semibold text-lg hover:underline"
          >
            Payment Plans
          </Link>
        </div>
        <FontAwesomeIcon icon={faReact} className="text-sky-500 text-4xl" />
      </div>
      <hr className="w-full" />
    </div>
  );
}
