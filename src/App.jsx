import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Debts from "./pages/Debts";
import PaymentPlan from "./pages/PaymentPlan";
import Header from "./components/layout/Header";
function App() {
  return (
    <Router>
      <div className="w-full">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
          <Route path="/dashboard" exact>
            <Header />
            <Dashboard />
          </Route>
          <Route path="/debts" exact>
            <Header />
            <Debts />
          </Route>
          <Route path="/payment-plan" exact>
            <Header />
            <PaymentPlan />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
