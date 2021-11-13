import React, { useEffect, useState } from "react";
import useAuth from "../../../context/useAuth";
import MyOrdersTable from "./MyOrdersTable";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://dry-gorge-66689.herokuapp.com/orders?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div className="bg-white md:p-10">
      {orders.length ? (
        <div>
          {" "}
          <h1 className="text-xl  py-3 ">{user?.displayName}'s orders</h1>
          <table className="md:table-fixed table-auto w-full border">
            <thead>
              <tr>
                <th className="border border-purple-600 text-gray-600 tracking-wider ">
                  Title
                </th>
                <th className="border border-purple-600 text-gray-600 tracking-wider lg:table-cell  hidden">
                  price
                </th>
                <th className="border border-purple-600 text-gray-600 tracking-wider md:table-cell hidden">
                  date
                </th>
                <th className="border border-purple-600 text-gray-600 tracking-wider  lg:table-cell hidden">
                  status
                </th>
                <th className="border border-purple-600 text-gray-600 tracking-wider">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <MyOrdersTable key={order._id} order={order}></MyOrdersTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
    </div>
  );
};

export default MyOrders;
