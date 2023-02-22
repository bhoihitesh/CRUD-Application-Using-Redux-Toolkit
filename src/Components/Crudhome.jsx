import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAllUsersQuery, useDeluserMutation } from "../Features/User";

const Crudhome = () => {
  let { data, isLoading } = useAllUsersQuery();
  let [delfunc, delobj] = useDeluserMutation();
  let [IsAdd, setIsAdd] = useState(false);
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    {
      isLoading ? "" : setGetData(data);
    }
  }, [isLoading]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table-head text-center">
              <h1>User List</h1>
            </div>

            <div className="table-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>
                      User
                      <Link to={"add"}>
                        <button className="btn btn-success">Add</button>
                      </Link>
                    </th>
                    <th>Email</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <h1>Loading...</h1>
                  ) : (
                    <>
                      {getData.map((e, i) => {
                        return (
                          <>
                            <tr>
                              <td>{e.id}</td>
                              <td>{e.user}</td>
                              <td>{e.email}</td>
                              <td>
                                <Link to={`view/${e.id}`}>
                                  <button className="btn btn-primary">
                                    view
                                  </button>
                                </Link>

                                <Link to={`edit/${e.id}`}>
                                  <button className="btn btn-primary">
                                    update
                                  </button>
                                </Link>

                                <button
                                  className="btn btn-primary"
                                  onClick={() => delfunc(e.id)}
                                >
                                  delete
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crudhome;
