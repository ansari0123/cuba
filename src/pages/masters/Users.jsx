import axios from "../../axios/axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import campaign from "../../assets/images/campaign.svg";
import { useDownloadExcel } from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";
const Users = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchUser, setSearchUser] = useState("");

  // table exporting
  const table_ref = useRef();
  const { onDownload } = useDownloadExcel({
    currentTableRef: table_ref.current,
    filename: "user_list",
    sheet: "Users",
  });
  const fetchWaitingUserList = async () => {
    const resp = await axios.get("/allusers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(resp);
    if (resp.data) {
      setUsers(resp?.data?.data);
      setLoading(false);
      setMessage("");
      setPageCount(Math.ceil(resp.data?.data.length / 5));
      console.log("pageCount", pageCount);
      updatePageItems(1);
    } else {
      setLoading(false);
      setMessage("No Waiting User Found");
    }
  };
  useEffect(() => {
    fetchWaitingUserList();
  }, []);
  // =================================== Age calculation starts ==========================
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  // =================================== Age calculation Ends ==========================

  // ======================================= pagination starts ======================
  const [pageCount, setPageCount] = useState(0);
  const [pageItems, setPageItems] = useState([]);

  const updatePageItems = (pageNo) => {
    const end = pageNo * 5;
    const start = end - 5;
    const items = Users.slice(start, end);
    setPageItems(items);
    console.log(pageItems);
  };
  useEffect(() => {
    const items = Users.slice(0, 5);
    setPageItems(items);
    console.log(pageItems);
  }, [Users]);
  // handle page change
  const handlePageChange = (data) => {
    updatePageItems(data.selected + 1);
  };
  // ======================================= PAGINATION ENDS ========================
  return (
    <div className="content">
      <div className="action_bar">
        <h4>Members</h4>
      </div>
      <hr className="mt-4" />
      <div className="option_bar d-flex justify-content-between align-content-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <div className="options d-flex align-items-center">
          <button className="export_btn me-5" onClick={onDownload}>
            Export
          </button>
          {/*  <select className="option_select">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>*/}
         
        </div>
      </div>

      <table class="table mt-3" ref={table_ref}>
        <thead className="table_head">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Users</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Occupation</th>
            <th scope="col">Shopping Preference</th>
            <th scope="col">Invite Code</th>
            <th scope="col">P.status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody
          className="table_body"
          style={{
            position: "relative",
          }}
        >
          {loading ? (
            <>
              <div
                className="spinner-3 mt-5 text-center"
                style={{
                  position: "absolute",
                  left: "45%",
                }}
              ></div>
            </>
          ) : (
            <></>
          )}
          {message ? (
            <>
              <h3 className="mt-5 d-flex-justify-content-center align-items-center">
                {message}
              </h3>
            </>
          ) : (
            <></>
          )}
          {}
          {pageItems
            ?.filter((item) => {
              if (searchUser == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchUser.toLocaleLowerCase())
              ) {
                return item;
              }
            })
            ?.map((user, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{getAge(user.date_of_birth)}</td>
                    <td>{user.gender}</td>
                    <td>{user.occupation}</td>
                    <td className="clamp_1">{user.shopping_prefernce}</td>
                    <td>{user.invite_code}</td>
                    <td>{user.status}</td>
                    <td>
                      <button
                        className="edit_btn_purple"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal${index}`}
                      >
                        view
                      </button>
                      <div
                        class="modal fade"
                        id={`exampleModal${index}`}
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered user_modal">
                          <div class="modal-content user_modal_content">
                            <div class="modal-header user_modal_header">
                              <h5 class="modal-title" id="exampleModalLabel ">
                                User’s Profile
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body p-0 ">
                              <div className="user_view_body d-flex">
                                <div className="view_menu">
                                  <div
                                    class="nav flex-column nav-pills "
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                  >
                                    <button
                                      class="nav-link user_nav_link active d-flex align-items-center"
                                      id="v-pills-home-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#v-pills-home"
                                      type="button"
                                      role="tab"
                                      aria-controls="v-pills-home"
                                      aria-selected="true"
                                    >
                                      <img
                                        className="me-2"
                                        src={campaign}
                                        alt=""
                                        style={{
                                          height: "16px",
                                          width: "16px",
                                        }}
                                      />
                                      Profile
                                    </button>
                                    <button
                                      class="nav-link user_nav_link d-flex align-items-center"
                                      id="v-pills-profile-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#v-pills-profile"
                                      type="button"
                                      role="tab"
                                      aria-controls="v-pills-profile"
                                      aria-selected="false"
                                    >
                                      <img
                                        className="me-2"
                                        src={campaign}
                                        alt=""
                                        style={{
                                          height: "16px",
                                          width: "16px",
                                        }}
                                      />
                                      Earnings
                                    </button>
                                    <button
                                      class="nav-link user_nav_link d-flex align-items-center"
                                      id="v-pills-messages-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#v-pills-messages"
                                      type="button"
                                      role="tab"
                                      aria-controls="v-pills-messages"
                                      aria-selected="false"
                                    >
                                      <img
                                        className="me-2"
                                        src={campaign}
                                        alt=""
                                        style={{
                                          height: "16px",
                                          width: "16px",
                                        }}
                                      />
                                      Task History
                                    </button>
                                    <button
                                      class="nav-link user_nav_link d-flex align-items-center"
                                      id="v-pills-settings-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#v-pills-settings"
                                      type="button"
                                      role="tab"
                                      aria-controls="v-pills-settings"
                                      aria-selected="false"
                                    >
                                      <img
                                        className="me-2"
                                        src={campaign}
                                        alt=""
                                        style={{
                                          height: "16px",
                                          width: "16px",
                                        }}
                                      />
                                      Payment History
                                    </button>
                                  </div>
                                </div>
                                <div className="view_content flex-grow-1">
                                  <div
                                    class="tab-content"
                                    id="v-pills-tabContent"
                                  >
                                    <div
                                      class="tab-pane fade show active"
                                      id="v-pills-home"
                                      role="tabpanel"
                                      aria-labelledby="v-pills-home-tab"
                                      tabindex="0"
                                    >
                                      Profile
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="v-pills-profile"
                                      role="tabpanel"
                                      aria-labelledby="v-pills-profile-tab"
                                      tabindex="0"
                                    >
                                      djj{" "}
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="v-pills-messages"
                                      role="tabpanel"
                                      aria-labelledby="v-pills-messages-tab"
                                      tabindex="0"
                                    >
                                      djjd
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="v-pills-settings"
                                      role="tabpanel"
                                      aria-labelledby="v-pills-settings-tab"
                                      tabindex="0"
                                    >
                                      dkjdk
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        previousLabel={"<"}
        nextLabel={">"}
        pageRangeDisplayed={5}
        containerClassName={"pagination justify-content-end"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Users;
