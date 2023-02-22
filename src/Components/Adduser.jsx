import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdduserMutation } from "../Features/User";

const Adduser = () => {
  const [addusuer, userobj] = useAdduserMutation();
  let navigate = useNavigate();
  let [newuser, setUser] = useState({
    user: "",
    email: "",
  });

  const { user, email } = newuser;
  const Adduser = () => {
    navigate("/");
    addusuer(newuser);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="input d-flex flex-column justify-content-center">
              <label htmlFor="User">User</label>
              <input
                type="text"
                className="form-control w-50"
                id="User"
                name="user"
                value={user}
                onChange={(e) =>
                  setUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />

              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control w-50"
                id="Email"
                name="email"
                value={email}
                onChange={(e) =>
                  setUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />

              <button className="btn btn-primary w-25" onClick={Adduser}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adduser;
