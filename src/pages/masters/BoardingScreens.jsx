import React from "react";
import board_bags from "../../assets/images/board_bags.svg";
import board_add from "../../assets/images/board_add.svg";
const BoardingScreens = () => {
  return (
    <>
      <div className="content">
        <div className="row">
          <div className="col-3">
            <div className="board">
              <img src={board_bags} alt="" />
              <h3>Get free products you’ll love</h3>
              <p>
                Get free products from your favourite brands in exchange for
                your honest reviews
              </p>
              <button className="board_action">Next</button>
              <button className="board_update"    data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdropUpdate"
              aria-controls="staticBackdrop">Update Screen</button>
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
                    <div className="input_box">
                      <label htmlFor="email" className="input_label">
                      Image URL
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                      ></input>
                    </div>
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
                      ></input>
                    </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">  <button className="action_btn mt-4">Add Screen</button></div>
              
              </div>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="board">
              <img src={board_bags} alt="" />
              <h3>Get free products you’ll love</h3>
              <p>
                Get free products from your favourite brands in exchange for
                your honest reviews
              </p>
              <button className="board_action">Next</button>
              <button className="board_update">Update Screen</button>
            </div>
          </div>
          <div className="col-3">
            <div className="board">
              <img src={board_bags} alt="" />
              <h3>Get free products you’ll love</h3>
              <p>
                Get free products from your favourite brands in exchange for
                your honest reviews
              </p>
              <button className="board_action">Next</button>
              <button className="board_update">Update Screen</button>
            </div>
          </div>
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
                    <div className="input_box">
                      <label htmlFor="email" className="input_label">
                      Image URL
                      </label>
                      <input
                        type={"text"}
                        class="form-control"
                        id="email"
                      ></input>
                    </div>
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
                      ></input>
                    </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">  <button className="action_btn mt-4">Add Screen</button></div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardingScreens;
