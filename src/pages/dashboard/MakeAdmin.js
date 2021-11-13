import React, { useState } from "react";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const makeAdminHandler = (e) => {
    const user = { email };
    fetch(`http://localhost:7070/users/admin`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Good job!", "New Admin Created Successfully!", "success");
          setEmail("");
        }
      });

    e.preventDefault();
  };
  return (
    <div className="bg-white py-10 px-5 rounded">
      <h1 className="text-xl py-10 text-center">Make an admin</h1>
      <form onSubmit={makeAdminHandler}>
        <div className="flex justify-center">
          <input
            className="md:w-96 w-full py-2 px-3 border focus:outline-none"
            placeholder="email address"
            type="email"
            onBlur={emailChangeHandler}
          />
        </div>
        <div className="flex justify-center py-5">
          <button className="py-2 px-3 bg-green-100 rounded " type="submit ">
            Make Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
