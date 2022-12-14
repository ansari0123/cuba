import axios from "../../axios/axios";
import React, { useEffect, useRef, useState } from "react";
import add_plus from "../../assets/images/add_plus.svg";
import upload_image from "../../assets/images/upload_image.svg";
import swal from "sweetalert";
import { useDownloadExcel } from "react-export-table-to-excel";
import * as XLSX from "xlsx";

import ReactPaginate from "react-paginate";
const Retailers = () => {
  const [addData, setAddData] = useState({
    name: "",
    logo: null,
    subdomain: "",
    categories: "",
    balance: "",
  });
  const [retailers, setRetailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [userList, setUserList] = useState([]);

  const [addLoader, setAddLoader] = useState(false);
  const [updateData, setUpdateData] = useState({
    logo:''
  });
  const [updateLoader, setUpdateLoader] = useState(false);
  const [keywordSearch, setKeywordsSearch] = useState("");
  // const [getItem,setGetItem]=useState([])
  const componentRef = useRef();

  // exporting table

  const onHandleExport = () => {
    var excelData = [["#", "NAME", "Sub-Domain", "Category"]];

    retailers.map((elt, index) => {
      console.log(elt);
      excelData.push([
        index + 1,
        elt.name,
        // elt.logo,
        elt.subdomain,
        elt.category,
      ]);
    });
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.aoa_to_sheet(excelData);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, "retailers_list.xlsx");
  };
  /* export as EXCEL ends */

  const table_ref = useRef();
  const { onDownload } = useDownloadExcel({
    currentTableRef: table_ref.current,
    filename: "retailers_list",
    sheet: "retailers",
  });
  const handleUpdate = async () => {
    setUpdateLoader(true);


    //const img = document.
    const formData = new FormData();
    formData.append("retailer_id", updateData.id);
    formData.append("name", updateData.name);
    // formData.append("logo", updateData.logo);
    formData.append("subdomain", updateData.subdomain);
    formData.append("categories", updateData.category);
    formData.append("balance", parseInt(updateData.balance));

    const resp = await axios
      .post("retailer/update", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((result) => {
        setUpdateLoader(false);
        console.log(result);
        setUpdateData({});
        fetchAllRetailers();
        swal("Retailer Updated Successfully", "", "success");
      })
      .catch((err) => {
        setUpdateLoader(false);
        swal(err.message, "", "error");
      });
  };

  const handleAdd = async () => {
    setAddLoader(true);
    const formData = new FormData();
    formData.append("name", addData.name);
    formData.append("logo", addData.logo);
    formData.append("subdomain", addData.subdomain);
    formData.append("categories", addData.categories);
    formData.append("balance", parseInt(addData.balance));

    const resp = await axios
      .post("/retailer/add", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        setAddLoader(false);
        console.log(result);
        setAddData({});
        fetchAllRetailers();
        swal("Retailer Added Successfully", "", "success");
      })
      .catch((err) => {
        setAddLoader(false);
        swal(err.message, "", "error");
      });
  };

  const fetchAllRetailers = async () => {
    const resp = await axios.get("/retailers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(resp.data?.data);

    if (resp.data) {
      console.log(resp.data.data);
      setRetailers(resp?.data?.data);
      setLoading(false);
      setMessage("");
      setPageCount(Math.ceil(resp.data?.data.length / 5));
      console.log("pageCount", pageCount);
      updatePageItems(1);
    } else {
      setLoading(false);
      setMessage("No Code Found");
    }
  };

  useEffect(() => {
    fetchAllRetailers();
  }, []);

  console.log(updateData)
  // KeyWords Search
  // console.log(keywordSearch)
  // useEffect(()=>{
  //   retailers.filter((item)=>{
  //     console.log("search item",item)
  //     if(item.name === keywordSearch.toLowerCase()){
  //       return setGetItem(item)
  //     }
  //   })

  // },[keywordSearch,])
  // ======================================= pagination starts ======================
  const [pageCount, setPageCount] = useState(0);
  const [pageItems, setPageItems] = useState([]);

  const updatePageItems = (pageNo) => {
    const end = pageNo * 3;
    const start = end - 3;
    const items = retailers.slice(start, end);
    setPageItems(items);
    console.log(pageItems);
  };
  useEffect(() => {
    const items = retailers.slice(0, 3);
    setPageItems(items);
    console.log(pageItems);
  }, [retailers]);
  // handle page change
  const handlePageChange = (data) => {
    updatePageItems(data.selected + 1);
  };
  // ======================================= PAGINATION ENDS ========================
  return (
    <>
      <div className="content">
        {/* ======== Action bar starts ==================== */}
        <div className="action_bar">
          <h4>Retailers/ Vendors</h4>
          <button
            className="add_btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <img src={add_plus} alt="" />
          </button>
          <div
            class="offcanvas offcanvas-end"
            data-bs-backdrop="static"
            tabindex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="staticBackdropLabel">
                Add Retailer
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
                  Retailer
                </label>
                <input
                  type={"text"}
                  class="form-control"
                  id="email"
                  value={addData.name}
                  onChange={(e) =>
                    setAddData({ ...addData, name: e.target.value })
                  }
                ></input>
              </div>
              <div className="input_box mt-3">
                <label htmlFor="email" className="input_label">
                  Upload Image
                </label>
                <div className="upload_box">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) =>
                      setAddData({ ...addData, logo: e.target.files[0] })
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
              {addData.logo ? (
                <>
                  <div className=" image_preview mt-3">
                    <img src={URL.createObjectURL(addData.logo)} alt="" />
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="input_box mt-3">
                <label htmlFor="email" className="input_label">
                  Sub-Domain
                </label>
                <input
                  type={"text"}
                  class="form-control"
                  id="email"
                  value={addData.subdomain}
                  onChange={(e) =>
                    setAddData({ ...addData, subdomain: e.target.value })
                  }
                ></input>
              </div>
              <div className="input_box mt-3">
                <label htmlFor="email" className="input_label">
                  Category
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  data-live-search="true"
                  value={addData.categories}
                  onChange={(e) =>
                    setAddData({ ...addData, categories: e.target.value })
                  }
                >
                  <option value="">Select Categories</option>
                  <option value="Parsonal Care">Personal Care</option>
                  <option value="Baby Care">Baby Care</option>
                </select>
              </div>
              <div className="input_box mt-3">
                <label htmlFor="email" className="input_label">
                  Balance
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="email"
                  value={addData.balance}
                  onChange={(e) =>
                    setAddData({ ...addData, balance: e.target.value })
                  }
                ></input>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className="action_btn"
                  onClick={handleAdd}
                >
                  {addLoader ? (
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
        {/* =========== Action bar ends =================== */}

        <hr />

        {/* =========== OPTION BAR STARTS ================= */}
        <div className="option_bar d-flex justify-content-between align-content-center">
          <input
            type="search"
            id="search"
            placeholder="Search"
            onChange={(e) => setKeywordsSearch(e.target.value)}
          />
          <div className="options d-flex align-items-center">
            <button className="export_btn me-5" onClick={onHandleExport}>
              Export
            </button>
            {/*  <select className="option_select">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>*/}
          </div>
        </div>
        {/* =========== OPTION BAR ENDS =================== */}

        {/* =========== TABLE STARTS ====================== */}
        <table class="table mt-3">
          <thead className="table_head">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Logo</th>
              <th scope="col">Sub-Domain</th>
              <th scope="col">Category</th>
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
            {pageItems
              ?.filter((item) => {
                if (keywordSearch == "") {
                  return item;
                } else if (
                  item.name.toUpperCase().includes(keywordSearch.toUpperCase())
                ) {
                  return item;
                }
              })
              .map((retailer, index) => {
                return (
                  <>
                    <div
                      class="offcanvas offcanvas-end"
                      data-bs-backdrop="static"
                      tabindex="-1"
                      id={`staticBackdropUpdate${index}`}
                      aria-labelledby="staticBackdropLabel"
                    >
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">
                          Update Retailer
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
                            Retailer
                          </label>
                          <input
                            type={"text"}
                            class="form-control"
                            id="email"
                            value={updateData.name}
                            onChange={(e) =>
                              setUpdateData({
                                ...updateData,
                                name: e.target.value,
                              })
                            }
                          ></input>
                        </div>
                        <div className="input_box mt-3">
                          <label htmlFor="email" className="input_label">
                            Upload Image
                          </label>
                          <div className="upload_box">
                            <input
                              type="file"
                              name="file"
                              id="file"
                              onChange={(e) =>
                                setUpdateData({
                                  ...updateData,
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
                        </div>
                        {updateData.logo ? (
                          <>
                            <div className=" image_preview mt-3">
                              <img
                              src={
                                !(
                                  typeof updateData["logo"] ===
                                  "string"
                                )
                                  ? URL.createObjectURL(
                                      updateData["logo"]
                                    )
                                  : updateData["logo"].startsWith('http')?updateData['logo']:'https://gru.wbl.mybluehostin.me/'+updateData['logo']
                              }
                                alt=""
                              />
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <div className="input_box mt-3">
                          <label htmlFor="email" className="input_label">
                            Sub-Domain
                          </label>
                          <input
                            type={"text"}
                            class="form-control"
                            id="email"
                            value={retailer.subdomain}
                            onChange={(e) =>
                              setUpdateData({
                                ...updateData,
                                subdomain: e.target.value,
                              })
                            }
                          ></input>
                        </div>
                        <div className="input_box mt-3">
                          <label htmlFor="email" className="input_label">
                            Category
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            value={retailer.category}
                            onChange={(e) =>
                              setUpdateData({
                                ...updateData,
                                categories: e.target.value,
                              })
                            }
                          >
                            <option value="">Select Categories</option>
                            <option value="Parsonal Care">Personal Care</option>
                            <option value="Baby Care">Baby Care</option>
                          </select>
                        </div>

                        <div className="d-flex justify-content-center mt-5">
                          <button
                            type="submit"
                            className="action_btn"
                            onClick={handleUpdate}
                          >
                            {updateLoader ? (
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
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{retailer.name}</td>
                      <td>
                        <img
                          style={{
                            width: "80px",
                            height: "50px",
                            objectFit: "contain",
                          }}
                          src={retailer.logo}
                          alt=""
                        />
                      </td>
                      <td>{retailer.subdomain}</td>
                      <td>{retailer.category}</td>
                      <td>
                        <button
                          className="edit_btn_purple"
                          data-bs-toggle="offcanvas"
                          data-bs-target={`#staticBackdropUpdate${index}`}
                          aria-controls="staticBackdrop"
                          onClick={() => setUpdateData(retailer)}
                        >
                          Edit
                        </button>
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
        {/* =========== TABLE ENDS ========================= */}
      </div>
    </>
  );
};

export default Retailers;
