import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Swal from "sweetalert2";
import useAuth from "../../../context/useAuth";
import { useHistory } from "react-router-dom";

const UserInformation = (props) => {
  const apartment = props.apartment;
  const { user } = useAuth();
  const history = useHistory();
  // modal state
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // open modal
  const openModal = () => {
    setIsOpen(true);
  };
  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // custom modal style
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // form data
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const appointmentDetails = {
      name: data.name,
      address: data.address,
      email: data.email,
      phone: data.phone,
      title: apartment.title,
      price: apartment.price,
      imageUrl: apartment.imageUrl,
      desc: apartment.description,
      location: apartment.location,
      date: data.date,
      status: "pending",
      bill: "unpaid",
    };
    fetch(`http://localhost:7070/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Order success!",
            "Please pay the bill for order confirmation!",
            "success"
          );
          history.push("/dashboard/pay");
        }
      });
  };
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-purple-600 px-3 py-2 rounded font-serif tracking-widest text-white"
      >
        Buy Now
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="text-center capitalize text-xl font-serif py-5">
          {apartment?.title}
        </h1>
        <form className="md:w-96 " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="block w-full border px-2 py-1 my-2 focus:outline-none rounded"
            defaultValue={user.displayName}
            {...register("name", { required: true })}
          />
          <input
            className="block w-full border px-2 py-1 my-3 focus:outline-none rounded"
            readOnly={true}
            defaultValue={user.email}
            type="email"
            {...register("email", { required: true })}
          />
          <input
            className="block w-full border px-2 py-1 my-3 focus:outline-none rounded"
            placeholder="Your address"
            {...register("address", { required: true })}
          />
          <input
            className="block w-full border px-2 py-1 my-3 focus:outline-none rounded"
            placeholder="Your phone"
            {...register("phone", { required: true })}
          />
          <input
            className="block w-full border px-2 py-1 my-3 focus:outline-none rounded"
            type="date"
            {...register("date", { required: true })}
          />
          <div className="flex justify-center">
            <input
              className="bg-purple-600 px-3 py-2 rounded my-4 text-white text-xl tracking-widest cursor-pointer "
              type="number"
              type="submit"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserInformation;
