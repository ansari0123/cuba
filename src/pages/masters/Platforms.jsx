import axios from "../../axios/axios";
import react, { useState, useEffect } from "react";
import add_plus from "../../assets/images/add_plus.svg";
import swal from "sweetalert";
import upload_image from "../../assets/images/upload_image.svg";

const Platforms = () => {
  const [addData, setAddData] = useState({
    user_id: "",
    invite_code: "",
    max_invites: "",
  });

  const [codes, setCodes] = useState([
    {
      name: "Flipkart",
      logo: "coming soon",
      URL: "http://www.flipkart.com",
      Description:
        " The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [error, setError] = useState({
    add: "",
    update: "",
  });

  const [step, setStep] = useState(1);

  const fetchAllCodes = async () => {
    const resp = await axios.get("/invite_codes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(resp.data?.data);

    if (resp.data) {
      // setCodes(resp?.data?.data);
      setLoading(false);
      setMessage("");
    } else {
      setLoading(false);
      setMessage("No Code Found");
    }
  };

  useEffect(() => {
    fetchAllCodes();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      !(addData.user_id == "") &&
      !(addData.invite_code == "" && !(addData.max_invites == ""))
    ) {
      const resp = await axios.post("/invite_codes/add", addData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(resp);
      if (resp.status == 200) {
        swal("Code Added Successfully", "", "success");
      } else {
        swal("Code Not Added", "error");
      }
    }
  };
  return (
    <>
      <div className="content">
        <div className="action_bar">
          <h4>Shoping Platforms</h4>
          <button
            className="add_btn"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal`}
          >
            <img src={add_plus} alt="" />
          </button>
          <div
            class="modal fade"
            id={`exampleModal`}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered user_modal">
              <div class="modal-content user_modal_content p-2">
                <div class="modal-header  border-0 d-flex justify-content-center">
                  <h3 className="">Add Platform</h3>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body  ">
                  {step == 1 ? (
                    <>
                      <div className="step_container">
                        <div className="row">
                          <div className="col-6">
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Retailer
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="email"
                              ></input>
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Logo
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="email"
                              ></input>
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Description
                              </label>
                              <textarea
                                type="email"
                                class="form-control"
                                id="email"
                              ></textarea>
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                URL
                              </label>
                              <input
                                type="url"
                                class="form-control"
                                id="email"
                              ></input>
                            </div>{" "}
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Order ScreensShots
                              </label>
                              <div className="radio-holder d-flex">
                                <div className="radio_box">
                                  <input
                                    type="radio"
                                    name="order"
                                    id="order1"
                                  />
                                  <label htmlFor="order1">1</label>
                                </div>
                                <div className="radio_box">
                                  <input
                                    type="radio"
                                    name="order"
                                    id="order2"
                                  />
                                  <label htmlFor="order2">2</label>
                                </div>
                                <div className="radio_box">
                                  <input
                                    type="radio"
                                    name="order"
                                    id="order3"
                                  />
                                  <label htmlFor="order3">3</label>
                                </div>
                                <div className="radio_box">
                                  <input
                                    type="radio"
                                    name="order"
                                    id="order4"
                                  />
                                  <label htmlFor="order4">4</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Order Instructions for App
                              </label>
                              <textarea
                                type="email"
                                class="form-control"
                                id="email"
                              ></textarea>
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Order Instructions for mweb
                              </label>
                              <textarea
                                type="email"
                                class="form-control"
                                id="email"
                              ></textarea>
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Order Instructions for web
                              </label>
                              <textarea
                                type="email"
                                class="form-control"
                                id="email"
                              ></textarea>
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Review Instructions
                              </label>
                              <textarea
                                type="email"
                                class="form-control"
                                id="email"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                          <button
                            className="action_btn"
                            onClick={() => setStep(2)}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* =========== SECOND STEP STARTS HERE ========== */}

                      <div className="row">
                        <div className="col-4">
                          <div className="input_container">
                            <h5 className="text-center" style={{
                              color:'#000000',
                              fontSize:'16px',
                              fontWeight:'700'
                            }}>Order</h5>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                                App ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              mWeb ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              Desktop Web ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              Video Tutorial
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="input_container">
                            <h5 className="text-center" style={{
                              color:'#000000',
                              fontSize:'16px',
                              fontWeight:'700'
                            }}>Delivery</h5>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                                App ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              mWeb ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              Desktop Web ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              Video Tutorial
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="input_container">
                            <h5 className="text-center" style={{
                              color:'#000000',
                              fontSize:'16px',
                              fontWeight:'700'
                            }}>Review</h5>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                                App ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              mWeb ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              Desktop Web ScreenShot
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                              Video Tutorial
                              </label>
                              <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: "50px" }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-end mt-3">
                        <button className="action_btn me-3">Previous</button>
                          <button className="action_btn">Submit</button>
                        </div>
                      </div>

                      {/* =========== SECOND STEP ENDS HERE ========== */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <table class="table mt-3">
          <thead className="table_head">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Logo</th>
              <th scope="col">URL</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody
            className="table_body"
            style={{
              position: "relative",
            }}
          >
            {/* {loading ? (
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
            )} */}
            {message ? (
              <>
                <h3 className="mt-5 d-flex-justify-content-center align-items-center">
                  {message}
                </h3>
              </>
            ) : (
              <></>
            )}
            {codes?.map((code, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{code.name}</td>
                    <td>{code.logo}</td>
                    <td>{code.URL}</td>
                    <td>{code.Description}</td>
                    <td>
                      <div className="d-flex flex-column">
                        <button
                          className="edit_btn_purple"
                          data-bs-toggle="modal"
                          data-bs-target={`#exampleModal${index}`}
                        >
                          Edit
                        </button>
                        <button className="btn_green mt-2">View</button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Platforms;
