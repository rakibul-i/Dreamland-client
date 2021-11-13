import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const Table = (props) => {
  const { _id, title, email, date, status } = props.order;

  // delete order from database
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isonfirmed) {
        fetch(`http://localhost:7070/orders/${id}`, { method: "DELETE" })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");
            }
          });
      }
    });
  };

  // update order status
  const handleOrderStatus = (e) => {
    const updatedStatus = e.target.value;

    fetch(`http://localhost:7070/orders/${_id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ updatedStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire(
            "Updated!",
            "Your order has been updated successfully.",
            "success"
          );
        }
      });
  };
  return (
    <tr className="">
      <td className="border py-2 pl-5">{title}</td>
      <td className="border py-2 pl-5 lg:table-cell hidden">{email}</td>
      <td className="border py-2 text-center  md:table-cell hidden">{date}</td>
      <td className="border py-2 text-center mx-auto  lg:table-cell hidden">
        <select
          className={
            status == "pending"
              ? "bg-red-100 rounded px-3 py-1 text-xl focus:outline-none"
              : "bg-green-100 rounded px-3 py-1 text-xl focus:outline-none"
          }
          onChange={handleOrderStatus}
        >
          <option value={status}>{status}</option>
          <option value={status === "pending" ? "success" : "pending"}>
            {status === "pending" ? "success" : "pending"}
          </option>
        </select>
      </td>
      <td className="border py-2 text-center ">
        <div className="flex justify-center items-center">
          <AiFillDelete
            className="text-red-600 text-xl cursor-pointer"
            onClick={() => deleteHandler(_id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default Table;
