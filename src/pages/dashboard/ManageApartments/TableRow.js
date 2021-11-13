import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const TableRow = (props) => {
  const { _id, title, location, price, stock } = props.apartment;
  const apartments = props.apartments;

  // delete handler
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
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://dry-gorge-66689.herokuapp.com/apartments/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount) {
              const prevApartments = [...apartments];
              const newApartments = prevApartments.filter(
                (apartment) => apartment._id !== id
              );
              props.setApartments(newApartments);
              Swal.fire("Deleted!", "apartment has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr className="">
      <td className="border py-2 pl-5">{title}</td>
      <td className="border py-2 pl-5 lg:table-cell hidden">{location}</td>
      <td className="border py-2 text-center  md:table-cell hidden">{price}</td>
      <td className="border py-2 text-center  lg:table-cell hidden">{stock}</td>
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

export default TableRow;
