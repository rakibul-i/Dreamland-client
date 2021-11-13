import React from "react";
import { useRouteMatch, Route, Link } from "react-router-dom";
import AddApartment from "./appAartment/AddApartment";
import DashboardRoutes from "./DashboardRoutes";
import "./Dashboard.css";
import useAuth from "../../context/useAuth";
import ManageApartments from "./ManageApartments/ManageApartments";
import PayBill from "./PayBill";
import MyOrders from "./myOrders/MyOrders";
import ManageOrders from "./manageOrders/ManageOrders";
import MakeAdmin from "./MakeAdmin";
import Review from "./Review";

const Dashboard = () => {
  let { path } = useRouteMatch();
  const { user } = useAuth();

  return (
    <div className="md:grid grid-cols-12 dashboard">
      <div className="lg:col-span-2 md:col-span-4 md:h-screen">
        <h1 className="bg-gray-800 text-white text-center py-5 lg:text-3xl text-2xl">
          <Link to="/">Dreamland</Link>
        </h1>
        <DashboardRoutes />
      </div>
      <div className="lg:col-span-10 md:col-span-8 bg-gray-100 md:p-10 p-5">
        <Route exact path={path}>
          <h1 className="text-2xl">{user?.displayName}'s dashboard</h1>
        </Route>
        <Route exact path={`${path}/main`}>
          <h1 className="text-2xl">{user?.displayName}'s dashboard</h1>
        </Route>
        <Route path={`${path}/addApartment`}>
          <AddApartment />
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </Route>
        <Route path={`${path}/manageApartments`}>
          <ManageApartments />
        </Route>
        <Route path={`${path}/pay`}>
          <PayBill />
        </Route>
        <Route path={`${path}/myOrders`}>
          <MyOrders />
        </Route>
        <Route path={`${path}/manageOrders`}>
          <ManageOrders />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
      </div>
    </div>
  );
};

export default Dashboard;
