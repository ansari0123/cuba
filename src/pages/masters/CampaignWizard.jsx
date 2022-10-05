import React, { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import upload_image from "../../assets/images/upload_image.svg";

const CampaignWizard = () => {
  const [setup, setSetup] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [show, setShow] = useState(false);
  const [categoryType, setCategoryType] = useState(true);

  // add product dialog handling
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handling pages
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    setPageNo(pageNo - 1);
  };

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
              <div className="action_bar">
                <h4>Waiting User List</h4>
              </div>
              {/* ===================================== PAGE TITILES  STARTS============================== */}

              <div
                className="row"
                style={{
                  height: "40px",
                }}
              >
                <div
                  className={`col-4 h-100 ${
                    pageNo > 0
                      ? "completed"
                      : pageNo < 0
                      ? "not_completed"
                      : "in_progress"
                  }`}
                >
                  <div className="step_title h-100 w-100 d-flex justify-content-center align-items-center">
                    1 Campaign Setup
                  </div>
                </div>
                <div
                  className={`col-4 h-100 ${
                    pageNo > 1
                      ? "completed"
                      : pageNo < 1
                      ? "not_completed"
                      : "in_progress"
                  }`}
                >
                  <div className="step_title h-100 w-100 d-flex justify-content-center align-items-center">
                    2 Products Setup
                  </div>
                </div>
                <div
                  className={`col-4 h-100 ${
                    pageNo > 2
                      ? "completed"
                      : pageNo < 2
                      ? "not_completed"
                      : "in_progress"
                  }`}
                >
                  <div className="step_title h-100 w-100 d-flex justify-content-center align-items-center">
                    3 Per Day Setup
                  </div>
                </div>
              </div>
              {/* ===================================== PAGE TITILES  ENDS================================ */}

              <div className="form_body mb-5">
                {/* ===================================== CAMPAIGN SETUP STARTS============================== */}
                {pageNo == 0 ? (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label">Retailer</div>
                          </div>
                          <div className="col-8">
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

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Platform</div>
                          </div>
                          <div className="col-8">
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

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Category</div>
                          </div>
                          <div className="col-8">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) => setCategoryType(e.target.value)}
                            >
                              <option value="select">Select Status</option>
                              <option value="1">By Product</option>
                              <option value="0">Traffic</option>
                            </select>
                          </div>
                        </div>

                        {categoryType == 1 ? (
                          <>
                            <div className="row mt-2">
                              <div className="col-4">
                                <div className="hr_label">
                                  {" "}
                                  Days gap between orders
                                </div>
                              </div>
                              <div className="col-8">
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
                              </div>
                            </div>

                            <div className="row mt-2">
                              <div className="col-4">
                                <div className="hr_label">
                                  Exclusive Product
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="radio-holder d-flex ">
                                  <div className="radio_box">
                                    <input
                                      type="radio"
                                      name="eProduct"
                                      id="order2"
                                    />
                                    <label htmlFor="order2">Yes</label>
                                  </div>
                                  <div className="radio_box">
                                    <input
                                      type="radio"
                                      name="eProduct"
                                      id="order3"
                                    />
                                    <label htmlFor="order3">No</label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row mt-2">
                              <div className="col-4">
                                <div className="hr_label">Timeline Days</div>
                              </div>
                              <div className="col-8">
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-6">
                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Targeting</div>
                          </div>
                          <div className="col-8">
                            <input
                              type="checkbox"
                              name="all"
                              id="all"
                              className="ms-3"
                            />
                            <span className="ms-2">All</span>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Gender</div>
                          </div>
                          <div className="col-8">
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
                        </div>

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Age</div>
                          </div>
                          <div className="col-8">
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

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Income</div>
                          </div>
                          <div className="col-8">
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

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Merital St.</div>
                          </div>
                          <div className="col-8">
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
                        </div>

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Having Kids</div>
                          </div>
                          <div className="col-8">
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
                        </div>

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Occupation</div>
                          </div>
                          <div className="col-8">
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

                        <div className="row mt-2">
                          <div className="col-4">
                            <div className="hr_label"> Category Prefrances</div>
                          </div>
                          <div className="col-8">
                            <div className="radio-holder row ">
                              <div className="radio_box col-3">
                                <input
                                  type="checkbox"
                                  name="order"
                                  id="order1"
                                />
                                <label htmlFor="order1">All</label>
                              </div>
                              <div className="radio_box col-3">
                                <input
                                  type="checkbox"
                                  name="order"
                                  id="order2"
                                />
                                <label htmlFor="order2">Yes</label>
                              </div>
                              <div className="radio_box col-3">
                                <input
                                  type="checkbox"
                                  name="order"
                                  id="order3"
                                />
                                <label htmlFor="order3">No</label>
                              </div>
                              <br></br>
                              <div className="radio_box col-3">
                                <input
                                  type="checkbox"
                                  name="order"
                                  id="order1"
                                />
                                <label htmlFor="order1">All</label>
                              </div>
                              <div className="radio_box col-3">
                                <input
                                  type="checkbox"
                                  name="order"
                                  id="order2"
                                />
                                <label htmlFor="order2">Yes</label>
                              </div>
                              <div className="radio_box col-3">
                                <input
                                  type="checkbox"
                                  name="order"
                                  id="order3"
                                />
                                <label htmlFor="order3">No</label>
                              </div>
                              <div className="radio_box col-3">
                                <input
                                  type="checkbox"
                                  name="order"
                                  id="order1"
                                />
                                <label htmlFor="order1">All</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/* ===================================== CAMPAIGN SETUP ENDS============================== */}

                {/* ===================================== PRODUCT SETUP STARTS============================== */}
                {pageNo === 1 ? (
                  <>
                    <table class="table mt-3">
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
                    </button>
                    {/* =====================================  ADD PRODUCT MODAL STARTS============================== */}
                    <Modal
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
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
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
                                    <input
                                      type="radio"
                                      name="eType"
                                      id="coins"
                                    />
                                    <label htmlFor="coins">Coins</label>
                                  </div>
                                  <div className="radio_box">
                                    <input
                                      type="radio"
                                      name="eType"
                                      id="rupees"
                                    />
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
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-4">
                                <div className="hr_label">Reward Rate</div>
                              </div>
                              <div className="col-8">
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-4">
                                <div className="hr_label">Reward</div>
                              </div>
                              <div className="col-8">
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
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
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-4">
                                <div className="hr_label">Review Reward</div>
                              </div>
                              <div className="col-8">
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-4">
                                <div className="hr_label">
                                  Review After Days
                                </div>
                              </div>
                              <div className="col-8">
                                <input
                                  type="number"
                                  className="hr_input w-100"
                                />
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
                    </Modal>
                    {/* =====================================  ADD PRODUCT MODAL ENDS  ============================== */}
                  </>
                ) : (
                  <></>
                )}
                {/* ===================================== PRODUCT SETUP ENDS============================== */}

                {/* ===================================== PER DAY SETUP STARTS============================== */}
                {pageNo === 2 ? (
                  <>
                    <div className="row mt-2">
                      <div className="col-4">
                        <div className="hr_label">Setup Options</div>
                      </div>
                      <div className="col-8">
                        <div className="radio-holder d-flex ">
                          <div className="radio_box">
                            <input
                              type="radio"
                              name="sOption"
                              id="same"
                              onChange={(e) => setSetup(0)}
                              checked={setup == 0}
                            />
                            <label htmlFor="same">Same all days</label>
                          </div>
                          <div className="radio_box">
                            <input
                              type="radio"
                              name="sOption"
                              id="gradual"
                              onChange={(e) => setSetup(1)}
                              checked={setup == 1}
                            />
                            <label htmlFor="gradual">Gradual growth</label>
                          </div>
                          <div className="radio_box">
                            <input
                              type="radio"
                              name="sOption"
                              id="custom"
                              onChange={(e) => setSetup(2)}
                              checked={setup == 2}
                            />
                            <label htmlFor="custom">Fully Custom</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {setup == 0 ? (
                      <>
                        {" "}
                        <table class="table mt-3">
                          <thead className="table_head">
                            <tr>
                              <th scope="col">Date</th>
                              <th scope="col">Target</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    ) : setup == 1 ? (
                      <>
                        {" "}
                        <table class="table mt-3">
                          <thead className="table_head">
                            <tr>
                              <th scope="col">Date</th>
                              <th scope="col">Target</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    ) : (
                      <>
                        <table class="table mt-3">
                          <thead className="table_head">
                            <tr>
                              <th scope="col">Date</th>
                              <th scope="col">Target</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>2022-09-23</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}

                {/* ===================================== SAME ALL DAY STARTS============================== */}
                {/* <div className="row">
                  <div className="row mt-2">
                    <div className="col-2 d-flex align-items-center">
                      <div className="hr_label">Task Hours</div>
                    </div>
                    <div className="col-5">
                      <input type="number" className="hr_input w-100" />
                    </div>
                    <div className="col-5">
                      <button className="action_btn">Plan </button>
                    </div>
                  </div>
                </div> */}
                {/* =====================================  SAME ALL DAY ENDS============================== */}
                {/* ===================================== PER DAY SETUP ENDS============================== */}
              </div>

              <div className="form_footer d-flex justify-content-end align-items-center">
                <button className="action_btn" onClick={handleNext}>
                  Submit & Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignWizard;
