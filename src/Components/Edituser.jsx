import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEdituserMutation, useUserdataQuery } from "../Features/User";

const Edituser = () => {
  let id = useParams();
  let navigate = useNavigate();
  const { data, isLoading } = useUserdataQuery(id);
  const [editfunc, editobj] = useEdituserMutation();
  let [edit, setEdit] = useState([]);
  useEffect(() => {
    {
      isLoading ? "" : setEdit(data);
    }
  }, [isLoading]);

  const updateuser = () => {
    editfunc(edit);
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="head text-center">
              <h1>Edit User</h1>
            </div>

            <div className="input d-flex flex-column">
              <label htmlFor="User">
                <b> User</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="User"
                name="user"
                value={edit.user}
                onChange={(e) =>
                  setEdit({ ...edit, [e.target.name]: e.target.value })
                }
              />

              <label htmlFor="Email">
                {" "}
                <b> Email</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="Email"
                name="email"
                value={edit.email}
                onChange={(e) =>
                  setEdit({ ...edit, [e.target.name]: e.target.value })
                }
              />
            </div>
            <button className="btn btn-primary" onClick={updateuser}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edituser;
