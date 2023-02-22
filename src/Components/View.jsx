import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserdataQuery } from "../Features/User";

const view = () => {
  const id = useParams();
  const { data, isLoading } = useUserdataQuery(id);
  let [user, setUser] = useState([]);
  useEffect(() => {
    {
      isLoading ? "" : setUser([data]);
    }
  }, [isLoading]);
  console.log(user);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="head text-center">
              <h1>View User</h1>
            </div>

            <div className="body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>User</th>
                    <th>Email</th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
                    <h1>Loading...</h1>
                  ) : (
                    <>
                      {user.map((e, i) => {
                        return (
                          <>
                            <tr>
                              <td>{e.id}</td>
                              <td>{e.user}</td>
                              <td>{e.email}</td>
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

export default view;
