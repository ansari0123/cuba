import axios from "../../axios/axios";
import react, { useState, useEffect } from "react";
import add_plus from "../../assets/images/add_plus.svg";
import swal from "sweetalert";
import { ErrorMessage, input, Form, Formik } from "formik";
import * as yup from "yup";
import ReactPaginate from "react-paginate";
const InviteCodes = () => {
  const [pageCount, setPageCount] = useState(0);
  const [addData, setAddData] = useState({
    user_id: "",
    invite_code: "",
    max_invites: "",
  });

  const [isDataUpdate, setIsDataUpdate] = useState(false);
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({
    add: "",
    update: "",
  });
  const initialValuesAdd = {
    user_id: "",
    invite_code: "",
    max_invites: "",
  };
  const [updateData, setUpdateData] = useState({});

  const validationSchemaAdd = yup.object().shape({
    user_id: yup.number().required("Please Enter User Id"),
    invite_code: yup.string().required("Please Enter Invite Code"),
    max_invites: yup.string().required("Please Enter max invite"),
  });

  const fetchAllCodes = async () => {
    const resp = await axios
      .get("/invite_codes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((resp) => {
        setCodes(resp?.data?.data);
        setLoading(false);
        setMessage("");
        setPageCount(Math.ceil(resp.data?.data.length / 8));
        console.log("pageCount", pageCount);
        updatePageItems(1);
      })
      .catch((error) => {
        setLoading(false);
        setMessage("No Code Found");
      });
  };

  useEffect(() => {
    fetchAllCodes();
    // updatePageItems(1);
  }, []);

  const handleAdd = async (values) => {
    // e.preventDefault();
    console.log(values);
    setLoader(true);
    if (
      !(addData.user_id == "") &&
      !(addData.invite_code == "" && !(addData.max_invites == ""))
    ) {
      const resp = await axios
        .post("/invite_codes/add", addData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => {
          console.log(resp);
          setLoader(false);
          fetchAllCodes();
          setAddData({
            user_id: "",
            invite_code: "",
            max_invites: "",
          });
          swal("Code Added Successfully", "", "success");
        })
        .catch((err) => {
          setLoader(false);
          swal("Code Not Added", "", "error");
        });
    }
  };
  const handleUpdate = async () => {
    setLoader(true);
    const fetchUpdate = await axios
      .put(
        "/invite_codes/update",
        {
          id: updateData?.id,
          user_id: updateData?.user_id,
          invite_code: updateData?.invite_code,
          max_invites: updateData?.max_invites,
          status: updateData?.status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        setLoader(false);
        fetchAllCodes();
        swal("Code updated Successfully", "", "success");
      })
      .catch((errror) => {
        console.log(error);
        setLoader(false);
        swal("Code not updated", "", "error");
      });
  };

  const [pageItems, setPageItems] = useState([]);

  const updatePageItems = (pageNo) => {
    const end = pageNo * 8;
    const start = end - 8;
    const items = codes.slice(start, end);
    setPageItems(items);
    console.log(pageItems);
  };
  useEffect(() => {
    const items = codes.slice(0, 8);
    setPageItems(items);
    console.log(pageItems);
  }, [codes]);
  // handle page change
  const handlePageChange = (data) => {
    updatePageItems(data.selected + 1);
  };
  return (
    <>
      <div className="content">
        <div className="action_bar">
          <h4>Invite Codes</h4>
          <button
            className="add_btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <img src={add_plus} alt="" />
          </button>

          {/* ============================================ */}
          {/* ========== ADD CODE CANVAS STARTS ===========*/}
          {/* ============================================ */}
          <div
            class="offcanvas offcanvas-end"
            data-bs-backdrop="static"
            tabindex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="staticBackdropLabel">
                Add Invite Code
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              {/* <Formik 
              initialValues={initialValuesAdd}
              validationSchema={validationSchemaAdd}
              onSubmit={handleAdd}
              >
                <Form> */}
              <div className="input_box mt-3">
                <label htmlFor="email" className="input_label">
                  User
                </label>
                <input
                  type="number"
                  name="user_id"
                  class="form-control"
                  id="number"
                  value={addData.user_id}
                  onChange={(e) =>
                    setAddData({ ...addData, user_id: e.target.value })
                  }
                />
                <small className="text-danger"></small>
              </div>
              <div className="input_box mt-5">
                <label htmlFor="email" className="input_label">
                  Invite Code
                </label>
                <input
                  type="text"
                  name="invite_code"
                  class="form-control"
                  id="email"
                  value={addData.invite_code}
                  onChange={(e) =>
                    setAddData({ ...addData, invite_code: e.target.value })
                  }
                />
                <small className="text-danger"></small>
              </div>
              <div className="input_box mt-5">
                <label htmlFor="email" className="input_label">
                  Max Invites
                </label>
                <input
                  type="number"
                  name="max_invites"
                  class="form-control"
                  id="email"
                  value={addData.max_invites}
                  onChange={(e) =>
                    setAddData({ ...addData, max_invites: e.target.value })
                  }
                ></input>
                <small className="text-danger"></small>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className="action_btn"
                  onClick={handleAdd}
                >
                  {" "}
                  {loader ? (
                    <>
                      {" "}
                      <div class="spinner-border me-2" role="status"></div>
                    </>
                  ) : (
                    <>Sign In</>
                  )}
                </button>
              </div>

              {/* </Form>

              </Formik> */}
            </div>
          </div>
          {/* ============================================ */}
          {/* ========== ADD CODE CANVAS END ===========*/}
          {/* ============================================ */}
        </div>

        <table class="table mt-3">
          <thead className="table_head">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Invite Code</th>
              <th scope="col">Max. Invites</th>
              <th scope="col">Total Invites</th>
              <th scope="col">Status</th>
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
            {pageItems?.map((code, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{code.invite_code}</td>
                    <td>{code.max_invites}</td>
                    <td>{code.total_invites}</td>
                    <td>
                      <label
                        htmlFor=""
                        className="status_label_active"
                        style={{
                          backgroundColor: code.status ? "#51BB25" : "#DC3545",
                        }}
                      >
                        {code.status ? "Active" : "In Active"}
                      </label>
                    </td>
                    <td>
                      <button
                        className="edit_btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target={`#staticBackdropUpdate${index}`}
                        aria-controls="staticBackdrop"
                        onClick={() => setUpdateData(code)}
                      >
                        @ Edit
                      </button>
                    </td>
                  </tr>

                  <div
                    class="offcanvas offcanvas-end"
                    data-bs-backdrop="static"
                    tabindex="-1"
                    id={`staticBackdropUpdate${index}`}
                    aria-labelledby="staticBackdropLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="staticBackdropLabel">
                        Edit Invite Code
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      <div className="input_box mt-3">
                        <label htmlFor="email" className="input_label">
                          User id
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="email"
                          defaultValue={updateData.user_id}
                          readOnly="true"
                          onChange={(e) =>
                            setUpdateData({
                              ...updateData,
                              user_id: e.target.value,
                            })
                          }
                        ></input>
                      </div>
                      <div className="input_box mt-5">
                        <label htmlFor="email" className="input_label">
                          Invite Code
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          readOnly={true}
                          value={updateData.invite_code}
                          onChange={(e) =>
                            setUpdateData({
                              ...updateData,
                              invite_code: e.target.value,
                            })
                          }
                        ></input>
                      </div>
                      <div className="input_box mt-5">
                        <label htmlFor="email" className="input_label">
                          Max Invites
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="email"
                          value={updateData.max_invites}
                          onChange={(e) =>
                            setUpdateData({
                              ...updateData,
                              max_invites: e.target.value,
                            })
                          }
                        ></input>
                      </div>
                      <div className="input_box mt-5">
                        <label htmlFor="email" className="input_label">
                          Code Status
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setUpdateData({
                              ...updateData,
                              status: e.target.value,
                            })
                          }
                        >
                          <option value="select">Select Status</option>
                          <option value="1" selected={true}>
                            Active
                          </option>
                          <option value="0">In Active</option>
                        </select>
                      </div>
                      <div className="d-flex justify-content-center mt-5">
                        <button
                          type="submit"
                          // value="Update"
                          className="action_btn"
                          onClick={handleUpdate}
                        >
                          {" "}
                          {loader ? (
                            <>
                              {" "}
                              <div
                                class="spinner-border me-2"
                                role="status"
                              ></div>
                            </>
                          ) : (
                            <>Update</>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
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
    </>
  );
};

export default InviteCodes;
