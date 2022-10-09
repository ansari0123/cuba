import axios from '../../axios/axios'
import react, { useState, useEffect } from 'react'
import add_plus from '../../assets/images/add_plus.svg'
import swal from 'sweetalert'
import upload_image from '../../assets/images/upload_image.svg'
import ReactPaginate from 'react-paginate'

const Platforms = () => {
  const [addData, setAddData] = useState({
    user_id: '',
    invite_code: '',
    max_invites: '',
  })

  const [codes, setCodes] = useState([
    {
      name: 'Flipkart',
      logo: 'coming soon',
      URL: 'http://www.flipkart.com',
      Description:
        ' The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another',
    },
  ])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [addLoader, setAddLoader] = useState(false)

  const [error, setError] = useState({
    add: '',
    update: '',
  })

  const [step, setStep] = useState(1)
  const [addDataPlatform, setAddDataPlatform] = useState({
    name: '',
    logo: '',
    url: '',
    description: '',
    number_of_order_screenshots: '3',

    app_instructions: '',
    mweb_instructions: '',

    web_instructions: '',
    review_instructions: '',
    order_mweb_shots: '',
    order_web_shots: '',
    order_app_shots: '',
    delivery_mweb_shots: '',
    delivery_web_shots: '',
    review_app_shots: '',
    review_mweb_shots: '',
    review_web_shots: '',
    order_video_url: '',
    delivery_video_url: '',
    review_video_url: '',
  })
  console.log(addDataPlatform)

  const handlePlatform = async () => {
    setAddLoader(true)
    const formData = new FormData()
    formData.append('name', addDataPlatform.name)
    formData.append('logo', addDataPlatform.logo)
    formData.append('url', addDataPlatform.url)
    formData.append('description', addDataPlatform.description)
    formData.append(
      'number_of_order_screenshots',
      addDataPlatform.number_of_order_screenshots,
    )
    formData.append('app_instructions', addDataPlatform.app_instructions)
    formData.append('mweb_instructions', addDataPlatform.mweb_instructions)
    formData.append('web_instructions', addDataPlatform.web_instructions)
    formData.append('review_instructions', addDataPlatform.review_instructions)
    formData.append('order_mweb_shots', addDataPlatform.order_mweb_shots)
    formData.append('order_web_shots', addDataPlatform.order_web_shots)
    formData.append('order_app_shots', addDataPlatform.order_app_shots)
    formData.append('delivery_web_shots', addDataPlatform.delivery_web_shots)
    formData.append('review_app_shots', addDataPlatform.review_app_shots)
    formData.append('review_mweb_shots', addDataPlatform.review_mweb_shots)
    formData.append('review_web_shots', addDataPlatform.review_web_shots)
    formData.append('order_video_url', addDataPlatform.order_video_url)
    formData.append('delivery_video_url', addDataPlatform.delivery_video_url)
    formData.append('review_video_url', addDataPlatform.review_video_url)

    const resp = await axios
      .post('/platform/add', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((result) => {
        setAddLoader(false)
        console.log(result)

        swal('Platform Added Successfully', '', 'success')
      })
      .catch((err) => {
        setAddLoader(false)
        swal(err.message, '', 'error')
      })
  }

  const fetchAllCodes = async () => {
    const resp = await axios.get('/platforms', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(resp.data?.data)

    if (resp.data) {
      setCodes(resp?.data?.data);
      setLoading(false)
      setMessage('')
      setPageCount(Math.ceil(resp.data?.data.length / 5));
      console.log("pageCount", pageCount);
      updatePageItems(1);
    } else {
      setLoading(false)
      setMessage('No Code Found')
    }
  }

  useEffect(() => {
    fetchAllCodes()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    if (
      !(addData.user_id == '') &&
      !(addData.invite_code == '' && !(addData.max_invites == ''))
    ) {
      const resp = await axios.post('/invite_codes/add', addData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      console.log(resp)
      if (resp.status == 200) {
        swal('Code Added Successfully', '', 'success')
      } else {
        swal('Code Not Added', 'error')
      }
    }
  }

  // ======================================= pagination starts ======================
  const [pageCount, setPageCount] = useState(0);
  const [pageItems, setPageItems] = useState([]);

  const updatePageItems = (pageNo) => {
    const end = pageNo * 4;
    const start = end - 4;
    const items = codes.slice(start, end);
    setPageItems(items);
    console.log(pageItems);
  };
  useEffect(() => {
    const items = codes.slice(0, 4);
    setPageItems(items);
    console.log(pageItems);
  }, [codes]);
  // handle page change
  const handlePageChange = (data) => {
    updatePageItems(data.selected + 1);
  };
  // ======================================= PAGINATION ENDS ========================
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
                                value={addDataPlatform.name}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    name: e.target.value,
                                  })
                                }
                              ></input>
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="email" className="input_label">
                                Logo
                              </label>
                              {/* <input
                                type="text"
                                class="form-control"
                                id="email"
                                 value={addDataPlatform.logo}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    logo: e.target.files[0],
                                  })
                                }
                              ></input> */}
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      logo: e.target.files[0],
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
                              {addDataPlatform.logo ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.logo,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="input_box mt-3">
                              <label htmlFor="text" className="input_label">
                                Description
                              </label>
                              <textarea
                                type="text"
                                class="form-control"
                                id="text"
                                value={addDataPlatform.description}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    description: e.target.value,
                                  })
                                }
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
                                value={addDataPlatform.url}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    url: e.target.value,
                                  })
                                }
                              ></input>
                            </div>{' '}
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
                                value={addDataPlatform.app_instructions}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    app_instructions: e.target.value,
                                  })
                                }
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
                                value={addDataPlatform.mweb_instructions}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    mweb_instructions: e.target.value,
                                  })
                                }
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
                                value={addDataPlatform.web_instructions}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    web_instructions: e.target.value,
                                  })
                                }
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
                                value={addDataPlatform.review_instructions}
                                onChange={(e) =>
                                  setAddDataPlatform({
                                    ...addDataPlatform,
                                    review_instructions: e.target.value,
                                  })
                                }
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
                            <h5
                              className="text-center"
                              style={{
                                color: '#000000',
                                fontSize: '16px',
                                fontWeight: '700',
                              }}
                            >
                              Order
                            </h5>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                                App ScreenShot
                              </label>
                              {/* <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: '50px' }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div> */}
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      order_app_shots: e.target.files[0],
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
                              {addDataPlatform.order_app_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.order_app_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="file1" className="input_label">
                                mWeb ScreenShot
                              </label>
                              {/* <div className="upload_box">
                                <input type="file" name="file" id="file" />
                                <label
                                  htmlFor="file"
                                  className=" d-flex align-items-center justify-content-start p-2 "
                                  style={{ height: '50px' }}
                                >
                                  <img
                                    src={upload_image}
                                    alt=""
                                    className="me-2"
                                  />
                                  <span>Upload Image </span>
                                </label>
                              </div> */}
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file1"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      order_mweb_shots: e.target.files[0],
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
                              {addDataPlatform.order_mweb_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.order_mweb_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="file2" className="input_label">
                                Desktop Web ScreenShot
                              </label>
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file2"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      order_web_shots: e.target.files[0],
                                    })
                                  }
                                />
                                <label
                                  htmlFor="file2"
                                  className=" d-flex flex-column align-items-center justify-content-center"
                                >
                                  <img src={upload_image} alt="" />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                              {addDataPlatform.order_web_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.order_web_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
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
                                  style={{ height: '50px' }}
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
                            <h5
                              className="text-center"
                              style={{
                                color: '#000000',
                                fontSize: '16px',
                                fontWeight: '700',
                              }}
                            >
                              Delivery
                            </h5>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="file6" className="input_label">
                                App ScreenShot
                              </label>
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file5"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      delivery_app_shots: e.target.files[0],
                                    })
                                  }
                                />
                                <label
                                  htmlFor="file5"
                                  className=" d-flex flex-column align-items-center justify-content-center"
                                >
                                  <img src={upload_image} alt="" />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                              {addDataPlatform.delivery_app_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.delivery_app_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="email" className="input_label">
                                mWeb ScreenShot
                              </label>
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file6"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      delivery_mweb_shots: e.target.files[0],
                                    })
                                  }
                                />
                                <label
                                  htmlFor="file6"
                                  className=" d-flex flex-column align-items-center justify-content-center"
                                >
                                  <img src={upload_image} alt="" />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                              {addDataPlatform.delivery_mweb_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.delivery_mweb_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="file7" className="input_label">
                                Desktop Web ScreenShot
                              </label>
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file7"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      delivery_web_shots: e.target.files[0],
                                    })
                                  }
                                />
                                <label
                                  htmlFor="file7"
                                  className=" d-flex flex-column align-items-center justify-content-center"
                                >
                                  <img src={upload_image} alt="" />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                              {addDataPlatform.delivery_web_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.delivery_web_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
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
                                  style={{ height: '50px' }}
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
                            <h5
                              className="text-center"
                              style={{
                                color: '#000000',
                                fontSize: '16px',
                                fontWeight: '700',
                              }}
                            >
                              Review
                            </h5>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="file8" className="input_label">
                                App ScreenShot
                              </label>
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file8"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      review_app_shots: e.target.files[0],
                                    })
                                  }
                                />
                                <label
                                  htmlFor="file8"
                                  className=" d-flex flex-column align-items-center justify-content-center"
                                >
                                  <img src={upload_image} alt="" />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                              {addDataPlatform.review_app_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.review_app_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="file9" className="input_label">
                                mWeb ScreenShot
                              </label>
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file9"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      review_mweb_shots: e.target.files[0],
                                    })
                                  }
                                />
                                <label
                                  htmlFor="file9"
                                  className=" d-flex flex-column align-items-center justify-content-center"
                                >
                                  <img src={upload_image} alt="" />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                              {addDataPlatform.review_mweb_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.review_mweb_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            <div className="input_box mt-3 tut_input">
                              <label htmlFor="file10" className="input_label">
                                Desktop Web ScreenShot
                              </label>
                              <div className="upload_box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file10"
                                  onChange={(e) =>
                                    setAddDataPlatform({
                                      ...addDataPlatform,
                                      review_web_shots: e.target.files[0],
                                    })
                                  }
                                />
                                <label
                                  htmlFor="file10"
                                  className=" d-flex flex-column align-items-center justify-content-center"
                                >
                                  <img src={upload_image} alt="" />
                                  <span>Upload Image </span>
                                </label>
                              </div>
                              {addDataPlatform.review_web_shots ? (
                                <>
                                  <div className=" image_preview mt-3">
                                    <img
                                      src={URL.createObjectURL(
                                        addDataPlatform.review_web_shots,
                                      )}
                                      alt=""
                                    />
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
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
                                  style={{ height: '50px' }}
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
                          <button
                            onClick={handlePlatform}
                            className="action_btn"
                          >
                            Submit
                          </button>
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
              position: 'relative',
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
            {pageItems?.map((code, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{code.name}</td>
                    <td> <img
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                    src={code.logo}
                    alt=""
                  /></td>
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
              )
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
  )
}

export default Platforms
