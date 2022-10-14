import React from "react";
import board_bags from "../../assets/images/board_bags.svg";
import board_add from "../../assets/images/board_add.svg";
import { useState } from "react";
import swal from "sweetalert";
import axios from "../../axios/axios";
import upload_image from "../../assets/images/upload_image.svg";
import { useEffect } from "react";
import { Form, Formik } from "formik";

const BoardingScreens = () => {
  // state for screens, add screens and update screen
  const [newScreen, setNewScreen] = useState({
    image: "",
  });
  const [updateScreen, setUpdateScreen] = useState({});
  const [screens, setScreens] = useState([]);
  // loader
  const [loader, setLoader] = useState(false);

  // console.log(updateScreen);
  console.log(newScreen);
  // assigning properties to new screens and update screen
  // const handleInput = (e, type,name) => {
  //   // if (type == ADD) {
  //   //   if (!(e.target.type == "file")) {
  //   //     let  nami = e.target.name.toString();

  //   //     const value = e.target.value || e.target.files[0];

  //   //     setNewScreen({ ...newScreen, nami: value });
  //   //   } else {
  //   //     const name = e.target.name;
  //   //     const value = e.target.files[0];
  //   //     setNewScreen({ ...newScreen, name: value });
  //   //   }
  //   // } else {
  //   //   if (!(e.target.type == "file")) {
  //   //     const name = e.target.name;
  //   //     const value = e.target.value;
  //   //     setUpdateScreen({ ...updateScreen, name: value });
  //   //   } else {
  //   //     const name = e.target.name;
  //   //     const value = e.target.files[0];
  //   //     setUpdateScreen({ ...updateScreen, name: value });
  //   //   }
  //   // }
  //   // console.log(newScreen);
  // };

  // handling add screen
  const handleAdd = async () => {
    // e.preventDefault();

    setLoader(true);
    const formData = new FormData();

    for (let property in newScreen) {
      formData.append(property, newScreen[property]);
    }
    if (formData) {
      const resp = await axios
        .post("/uspscreen/add", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => {
          console.log(resp);

          setLoader(false);
          fetchAllScreens();
          setNewScreen({});
          swal(resp.message, "", "success");
        })
        .catch((err) => {
          setLoader(false);
          // swal(err.message, "", "error");
        });
    }
  };

  const handleUpdate = async () => {
    // e.preventDefault();

    setLoader(true);
    const formData = new FormData();

    for (let property in updateScreen) {
      // formData.append(property, newScreen[property]);
      if (property == "id") {
        formData.append("screen_id", updateScreen[property]);
      } else if (
        property == "image-url" &&
        typeof updateScreen[property] != "string"
      ) {
        formData.append("image", updateScreen[property]);
      } else {
        formData.append(property, updateScreen[property]);
      }
    }
    if (formData) {
      try {
        const resp = await axios
          .put("/uspscreen/update", formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((resp) => {
            console.log(resp);
            setLoader(false);
            fetchAllScreens();
            setUpdateScreen({});
            swal("Screen Updated Successfully", "", "success");
          })
          .catch((err) => {
            setLoader(false);
            swal("Something Went Wrong!", "", "error");
          });
      } catch (e) {
        swal(e.message, "", "success");
      }
    }
  };

  // handle listing of screens
  const fetchAllScreens = async () => {
    const resp = await axios
      .get("/uspscreens", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((resp) => {
        console.log(resp.data.data);
        setScreens(resp?.data?.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchAllScreens();
  }, []);
  return (
    <>
      <div className="content">
        <div className="row gy-4">
          {screens?.map((screen, index) => (
            <>
              <div className="col-3">
                <div
                  className="board"
                  style={{ backgroundColor: screen["bg-color"] }}
                >
                  <img
                    src={
                      screen["image-url"].startsWith("http")
                        ? screen["image-url"]
                        : "https://gru.wbl.mybluehostin.me/" +
                          screen["image-url"]
                    }
                    alt=""
                  />
                  <h3 style={{ color: screen["head-color"] }}>{screen.head}</h3>
                  <p style={{ color: screen["text-color"] }}>
                    {screen.subhead}
                  </p>
                  <button
                    className="board_action"
                    style={{
                      backgroundColor: screen["button-color"],
                      color: screen["button-text-color"],
                    }}
                  >
                    {screen["button-text"]}
                  </button>
                  <button
                    className="board_update"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#staticBackdropUpdate"
                    aria-controls="staticBackdrop"
                    onClick={() => setUpdateScreen(screen)}
                  >
                    Update Screen
                  </button>
                  <div
                    class="offcanvas offcanvas-end boarding_canvas"
                    data-bs-backdrop="static"
                    tabindex="-1"
                    id="staticBackdropUpdate"
                    aria-labelledby="staticBackdropLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="staticBackdropLabel">
                        Update Screen
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body ">
                      <div className="row">
                        <div className="col-12">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              Image URL
                            </label>
                            <div className="upload_box">
                              <input
                                type="file"
                                name="image"
                                id="file"
                                // onChange={(e)=>handleInput(e,ADD)}
                                onChange={(e) =>
                                  setUpdateScreen({
                                    ...updateScreen,
                                    "image-url": e.target.files[0],
                                  })
                                }
                              />
                              <label
                                htmlFor="file"
                                className=" d-flex flex-column align-items-center justify-content-center"
                              >
                                <img src={upload_image} alt="" />
                                <span>Upload Image </span>
                              </label>
                            </div>
                          </div>
                          {updateScreen["image-url"] ? (
                            <>
                              <div className=" image_preview mt-3">
                                <img
                                  style={{
                                    heigth: "180px",
                                    object: "cover",
                                  }}
                                  src={
                                    !(
                                      typeof updateScreen["image-url"] ===
                                      "string"
                                    )
                                      ? URL.createObjectURL(
                                          updateScreen["image-url"]
                                        )
                                      : updateScreen["image-url"]
                                  }
                                  alt=""
                                />
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="col-12">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              Heading
                            </label>
                            <input
                              type={"text"}
                              class="form-control"
                              id="email"
                              name="head"
                              value={updateScreen.head}
                              // onChange={(e) => handleInput(e, ADD)}
                              onChange={(e) =>
                                setUpdateScreen({
                                  ...updateScreen,
                                  head: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="col-12"></div>
                        <div className="input_box mt-3">
                          <label htmlFor="email" className="input_label">
                            Sub Head
                          </label>
                          <input
                            type={"text"}
                            class="form-control"
                            id="email"
                            name="subhead"
                            value={updateScreen.subhead}
                            // onChange={(e) => handleInput(e, ADD)}
                            onChange={(e) =>
                              setUpdateScreen({
                                ...updateScreen,
                                subhead: e.target.value,
                              })
                            }
                          ></input>
                        </div>
                        <div className="col-12"></div>
                        <div className="input_box mt-3">
                          <label htmlFor="email" className="input_label">
                            Button Text
                          </label>
                          <input
                            type={"text"}
                            class="form-control"
                            id="email"
                            name="button-text"
                            // onChange={(e) => handleInput(e, ADD)}
                            value={updateScreen["button-text"]}
                            onChange={(e) =>
                              setUpdateScreen({
                                ...updateScreen,
                                "button-text": e.target.value,
                              })
                            }
                          ></input>
                        </div>

                        <div className="col-6">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              BG-Color Hex
                            </label>
                            <input
                              type={"text"}
                              class="form-control"
                              id="email"
                              name="bg-color"
                              // onChange={(e) => handleInput(e, ADD)}
                              value={updateScreen["bg-color"]}
                              onChange={(e) =>
                                setUpdateScreen({
                                  ...updateScreen,
                                  "bg-color": e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              Head-Color Hex
                            </label>
                            <input
                              type={"text"}
                              class="form-control"
                              id="email"
                              name="head-color"
                              // onChange={(e) => handleInput(e, ADD)}
                              value={updateScreen["head-color"]}
                              onChange={(e) =>
                                setUpdateScreen({
                                  ...updateScreen,
                                  "head-color": e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              SubHead-Color Hex
                            </label>
                            <input
                              type={"text"}
                              class="form-control"
                              id="email"
                              name="text-color"
                              // onChange={(e) => handleInput(e, ADD)}
                              value={updateScreen["text-color"]}
                              onChange={(e) =>
                                setUpdateScreen({
                                  ...updateScreen,
                                  "text-color": e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              Button-Color Hex
                            </label>
                            <input
                              type={"text"}
                              class="form-control"
                              id="email"
                              name="button-color"
                              // onChange={(e) => handleInput(e, ADD)}
                              value={updateScreen["button-color"]}
                              onChange={(e) =>
                                setUpdateScreen({
                                  ...updateScreen,
                                  "button-color": e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              Btn-text-Color Hex
                            </label>
                            <input
                              type={"text"}
                              class="form-control"
                              id="email"
                              name="button-text-color"
                              // onChange={(e) => handleInput(e, ADD)}
                              value={updateScreen["button-text-color"]}
                              onChange={(e) =>
                                setUpdateScreen({
                                  ...updateScreen,
                                  "button-text-color": e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input_box mt-3">
                            <label htmlFor="email" className="input_label">
                              Screen Index
                            </label>
                            <input
                              type={"text"}
                              class="form-control"
                              id="email"
                              name="screen-index"
                              // onChange={(e) => handleInput(e, ADD)}
                              value={updateScreen["screen-index"]}
                              onChange={(e) =>
                                setUpdateScreen({
                                  ...updateScreen,
                                  "screen-index": e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className=" col-12 d-flex justify-content-center align-items-center">
                          <button
                            type="submit"
                            className="action_btn mt-4"
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
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="col-3">
            <div
              className="add_board d-flex flex-column justify-content-center align-items-center"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <img src={board_add} alt="" />
              <h3>Add New</h3>
            </div>

            {/* =============================================================== */}
            {/* ====================ADD SCREEN OFCANVAS STARTS================= */}
            {/* =============================================================== */}
            <div
              class="offcanvas offcanvas-end boarding_canvas"
              data-bs-backdrop="static"
              tabindex="-1"
              id="staticBackdrop"
              aria-labelledby="staticBackdropLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">
                  Add Screen
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body ">
                <div className="row">
                  <div className="col-12">
                    <div className="input_box mt-3">
                      <label htmlFor="file1" className="input_label">
                        Image URL
                      </label>
                      <div className="upload_box">
                        <input
                          type="file"
                          name="image"
                          id="file1"
                          // onChange={(e)=>handleInput(e,ADD)}
                          onChange={(e) =>
                            setNewScreen({
                              ...newScreen,
                              image: e.target.files[0],
                            })
                          }
                        />
                        <label
                          htmlFor="file1"
                          className=" d-flex flex-column align-items-center justify-content-center"
                        >
                          <img src={upload_image} alt="" />
                          <span>Upload Image </span>
                        </label>
                      </div>
                    </div>
                    {newScreen.image ? (
                      <>
                        <div className=" image_preview mt-3">
                          <img
                            src={URL.createObjectURL(newScreen.image)}
                            alt=""
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        Heading
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                        name="head"
                        // onChange={(e) => handleInput(e, ADD)}
                        onChange={(e) =>
                          setNewScreen({
                            ...newScreen,
                            head: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-12"></div>
                  <div className="input_box mt-3">
                    <label htmlFor="email" className="input_label">
                      Sub Head
                    </label>
                    <input
                      type={"text"}
                      class="form-control"
                      id="email"
                      name="subhead"
                      // onChange={(e) => handleInput(e, ADD)}
                      onChange={(e) =>
                        setNewScreen({
                          ...newScreen,
                          subhead: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className="col-12"></div>
                  <div className="input_box mt-3">
                    <label htmlFor="email" className="input_label">
                      Button Text
                    </label>
                    <input
                      type={"text"}
                      class="form-control"
                      id="email"
                      name="button-text"
                      // onChange={(e) => handleInput(e, ADD)}
                      onChange={(e) =>
                        setNewScreen({
                          ...newScreen,
                          "button-text": e.target.value,
                        })
                      }
                    ></input>
                  </div>

                  <div className="col-6">
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        BG-Color Hex
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                        name="bg-color"
                        // onChange={(e) => handleInput(e, ADD)}
                        onChange={(e) =>
                          setNewScreen({
                            ...newScreen,
                            "bg-color": e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        Head-Color Hex
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                        name="head-color"
                        // onChange={(e) => handleInput(e, ADD)}
                        onChange={(e) =>
                          setNewScreen({
                            ...newScreen,
                            "head-color": e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        SubHead-Color Hex
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                        name="text-color"
                        // onChange={(e) => handleInput(e, ADD)}
                        onChange={(e) =>
                          setNewScreen({
                            ...newScreen,
                            "text-color": e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        Button-Color Hex
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                        name="button-color"
                        // onChange={(e) => handleInput(e, ADD)}
                        onChange={(e) =>
                          setNewScreen({
                            ...newScreen,
                            "button-color": e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        Btn-text-Color Hex
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                        name="button-text-color"
                        // onChange={(e) => handleInput(e, ADD)}
                        onChange={(e) =>
                          setNewScreen({
                            ...newScreen,
                            "button-text-color": e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        Screen Index
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                        name="screen-index"
                        // onChange={(e) => handleInput(e, ADD)}
                        onChange={(e) =>
                          setNewScreen({
                            ...newScreen,
                            "screen-index": e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className=" col-12 d-flex justify-content-center align-items-center">
                    <button
                      type="submit"
                      className="action_btn mt-4"
                      onClick={handleAdd}
                    >
                      {" "}
                      {loader ? (
                        <>
                          {" "}
                          <div class="spinner-border me-2" role="status"></div>
                        </>
                      ) : (
                        <>Add</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* =============================================================== */}
            {/* ====================ADD SCREEN OFCANVAS STARTS================= */}
            {/* =============================================================== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardingScreens;
