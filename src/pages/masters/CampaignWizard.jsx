import React, { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import upload_image from "../../assets/images/upload_image.svg";

const CampaignWizard = () => {
  // add product dialog handling
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="main_container">
        <div className="side_bar_container">
          <Sidebar />
        </div>
        <div className="content_container">
          <Header />
          <div className="content_background">
            <div className="content">
              {/* ===================================== PAGE TITILES  STARTS============================== */}
              <div className="row">
                <div className="col-4">
                  <div className="step_title h-100 w-100 d-flex justify-content-center align-items-center">
                    1 Campaign Setup
                  </div>
                </div>
                <div className="col-4">
                  <div className="step_title h-100 w-100 d-flex justify-content-center align-items-center">
                    2 Products Setup
                  </div>
                </div>
                <div className="col-4">
                  <div className="step_title h-100 w-100 d-flex justify-content-center align-items-center">
                    3 Per Day Setup
                  </div>
                </div>
              </div>
              {/* ===================================== PAGE TITILES  ENDS================================ */}

              <div className="form_body mb-5">
                {/* ===================================== CAMPAIGN SETUP STARTS============================== */}
                {/* <div className="row">
                  <div className="col-6">
                    <div className="input_box mt-3 horizantal_input">
                      <label htmlFor="email" className="input_label">
                        Retailer
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="select">Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">In Active</option>
                      </select>
                    </div>
                    <div className="input_box mt-3 horizantal_input">
                      <label htmlFor="email" className="input_label">
                        Platform
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="select">Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">In Active</option>
                      </select>
                    </div>
                    <div className="input_box mt-3 horizantal_input">
                      <label htmlFor="email" className="input_label">
                        Platform
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="select">Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">In Active</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input_box mt-3 d-flex horizantal_input d-flex align-items-center">
                      <label htmlFor="email" className="input_label">
                        Targeting
                      </label>
                      <input
                        type="checkbox"
                        name="all"
                        id="all"
                        className="ms-3"
                      />
                      <span className="ms-2">All</span>
                    </div>
                    <div className="input_box mt-3 ">
                      <label htmlFor="email" className="input_label">
                        Gender
                      </label>
                      <div className="radio-holder d-flex ">
                        <div className="radio_box">
                          <input type="radio" name="order" id="order1" />
                          <label htmlFor="order1">All</label>
                        </div>
                        <div className="radio_box">
                          <input type="radio" name="order" id="order2" />
                          <label htmlFor="order2">Male</label>
                        </div>
                        <div className="radio_box">
                          <input type="radio" name="order" id="order3" />
                          <label htmlFor="order3">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="input_box mt-3 ">
                      <label htmlFor="email" className="input_label">
                        Age
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="select">Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">In Active</option>
                      </select>
                    </div>
                    <div className="input_box mt-3 ">
                      <label htmlFor="email" className="input_label">
                        Income
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="select">Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">In Active</option>
                      </select>
                    </div>
                    <div className="input_box mt-3 ">
                      <label htmlFor="email" className="input_label">
                        Merital St.
                      </label>
                      <div className="radio-holder d-flex ">
                        <div className="radio_box">
                          <input type="radio" name="order" id="order1" />
                          <label htmlFor="order1">All</label>
                        </div>
                        <div className="radio_box">
                          <input type="radio" name="order" id="order2" />
                          <label htmlFor="order2">Merried</label>
                        </div>
                        <div className="radio_box">
                          <input type="radio" name="order" id="order3" />
                          <label htmlFor="order3">Single</label>
                        </div>
                      </div>
                    </div>
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        Having Kids
                      </label>
                      <div className="radio-holder d-flex ">
                        <div className="radio_box">
                          <input type="radio" name="order" id="order1" />
                          <label htmlFor="order1">All</label>
                        </div>
                        <div className="radio_box">
                          <input type="radio" name="order" id="order2" />
                          <label htmlFor="order2">Yes</label>
                        </div>
                        <div className="radio_box">
                          <input type="radio" name="order" id="order3" />
                          <label htmlFor="order3">No</label>
                        </div>
                      </div>
                    </div>
                    <div className="input_box mt-3 ">
                      <label htmlFor="email" className="input_label">
                        Occupation
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="select">Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">In Active</option>
                      </select>
                    </div>
                    <div className="input_box mt-3">
                      <label htmlFor="email" className="input_label">
                        Category Prefrances
                      </label>
                      <div className="radio-holder d-flex ">
                        <div className="radio_box">
                          <input type="checkbox" name="order" id="order1" />
                          <label htmlFor="order1">All</label>
                        </div>
                        <div className="radio_box">
                          <input type="checkbox" name="order" id="order2" />
                          <label htmlFor="order2">Yes</label>
                        </div>
                        <div className="radio_box">
                          <input type="checkbox" name="order" id="order3" />
                          <label htmlFor="order3">No</label>
                        </div>
                        <br></br>
                        <div className="radio_box">
                          <input type="checkbox" name="order" id="order1" />
                          <label htmlFor="order1">All</label>
                        </div>
                        <div className="radio_box">
                          <input type="checkbox" name="order" id="order2" />
                          <label htmlFor="order2">Yes</label>
                        </div>
                        <div className="radio_box">
                          <input type="checkbox" name="order" id="order3" />
                          <label htmlFor="order3">No</label>
                        </div>
                        <div className="radio_box">
                          <input type="checkbox" name="order" id="order1" />
                          <label htmlFor="order1">All</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* ===================================== CAMPAIGN SETUP ENDS============================== */}

                {/* ===================================== PRODUCT SETUP STARTS============================== */}
                {/* <table class="table mt-3">
                  <thead className="table_head">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th scope="col">Task Hours</th>
                      <th scope="col">Earning Type</th>
                      <th scope="col">Reward</th>
                      <th scope="col">Review Required</th>
                    </tr>
                  </thead>
                  <tbody
                    className="table_body"
                    style={{
                      position: "relative",
                    }}
                  >
                    {false ? (
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
                    {false ? (
                      <>
                        <h3 className="mt-5 d-flex-justify-content-center align-items-center">
                          NO DATA FOUND
                        </h3>
                      </>
                    ) : (
                      <></>
                    )}
                    <tr>
                      <th>1</th>
                      <td>MamaEarth</td>
                      <td>2022-09-23</td>
                      <td>2022-09-30</td>
                      <td>2</td>
                      <td>Rupees</td>
                      <td>277</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
                <button className="action_btn" onClick={handleShow}>
                  Add Product
                </button> */}
                {/* =====================================  ADD PRODUCT MODAL STARTS============================== */}
                {/* <Modal
                  show={show}
                  onHide={handleClose}
                  centered
                  dialogClassName="add_product_modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-4">
                            <div className="hr_label">
                              Product name<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="text" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              Start Date<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="date" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              End Date<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="date" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Task Hours</div>
                          </div>
                          <div className="col-8">
                            <input type="number" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              Product URL<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="url" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              Earning Tag<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="text" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              Earning Type<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="radio-holder d-flex ">
                              <div className="radio_box">
                                <input type="radio" name="eType" id="coins" />
                                <label htmlFor="coins">Coins</label>
                              </div>
                              <div className="radio_box">
                                <input type="radio" name="eType" id="rupees" />
                                <label htmlFor="rupees">Rupees</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Product Image</div>
                          </div>
                          <div className="col-8">
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
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              Question 1<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="text" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              Question 2<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="text" className="hr_input w-100" />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row ">
                          <div className="col-4">
                            <div className="hr_label">
                              Product Decription<sup>*</sup>
                            </div>
                          </div>
                          <div className="col-8">
                            <input type="text" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">
                              Task Terms<sup>*</sup>
                            </div>
                            <span>Seprated by commas</span>
                          </div>
                          <div className="col-8">
                            <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="3"
                              className="hr_input w-100"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Completion Rate</div>
                          </div>
                          <div className="col-8">
                            <input type="number" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Reward Rate</div>
                          </div>
                          <div className="col-8">
                            <input type="number" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Reward</div>
                          </div>
                          <div className="col-8">
                            <input type="number" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Review Required?</div>
                          </div>
                          <div className="col-8">
                            <div className="radio-holder d-flex ">
                              <div className="radio_box">
                                <input
                                  type="radio"
                                  name="rRequired"
                                  id="reviewYes"
                                />
                                <label htmlFor="reviewYes">Yes</label>
                              </div>
                              <div className="radio_box">
                                <input
                                  type="radio"
                                  name="rRequired"
                                  id="reviewNO"
                                />
                                <label htmlFor="reviewNO">No</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Review Rate</div>
                          </div>
                          <div className="col-8">
                            <input type="number" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Review Reward</div>
                          </div>
                          <div className="col-8">
                            <input type="number" className="hr_input w-100" />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Review After Days</div>
                          </div>
                          <div className="col-8">
                            <input type="number" className="hr_input w-100" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="action_btn" onClick={handleClose}>
                      Add
                    </Button>
                    <Button className="action_btn" onClick={handleClose}>
                      Add & Close
                    </Button>
                  </Modal.Footer>
                </Modal> */}
                {/* =====================================  ADD PRODUCT MODAL ENDS  ============================== */}
                {/* ===================================== PRODUCT SETUP ENDS============================== */}

                {/* ===================================== PER DAY SETUP STARTS============================== */}
                <div className="row mt-2">
                  <div className="col-4">
                    <div className="hr_label">Setup Options</div>
                  </div>
                  <div className="col-8">
                    <div className="radio-holder d-flex ">
                      <div className="radio_box">
                        <input type="radio" name="sOption" id="same" />
                        <label htmlFor="same">Same all days</label>
                      </div>
                      <div className="radio_box">
                        <input type="radio" name="sOption" id="gradual" />
                        <label htmlFor="gradual">Gradual growth</label>
                      </div>
                      <div className="radio_box">
                        <input type="radio" name="sOption" id="custom" />
                        <label htmlFor="custom">Fully Custom</label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ===================================== SAME ALL DAY STARTS============================== */}
                <div className="row">
                  <div className="row mt-2">
                    <div className="col-2 d-flex align-items-center">
                      <div className="hr_label">Task Hours</div>
                    </div>
                    <div className="col-5">
                      <input type="number" className="hr_input w-100" />
                    </div>
                    <div className="col-5">
                      <button className="action_btn">Plan</button>
                    </div>
                  </div>
                </div>
                {/* =====================================  SAME ALL DAY ENDS============================== */}
                {/* ===================================== PER DAY SETUP ENDS============================== */}
              </div>

              <div className="form_footer d-flex justify-content-end align-items-center">
                <button className="action_btn">Submit & Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignWizard;
