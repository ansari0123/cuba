import axios from "../../axios/axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";

const WaitingList = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchkey, setSearchKey] = useState("");

  // export table
  const waiting_user_list = useRef();
  const { onDownload } = useDownloadExcel({
    currentTableRef: waiting_user_list.current,
    filename: "waiting_users",
    sheet: "Users",
  });
  const fetchWaitingUserList = async () => {
    const resp = await axios.get("/waitinglist", {
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
        <h4>Waiting User List</h4>
      </div>
      <hr className="mt-4" />
      <div className="option_bar d-flex justify-content-between align-content-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div className="options d-flex align-items-center">
          <button className="export_btn me-5" onClick={onDownload}>
            Export
          </button>
          {/* <select className="option_select">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select> */}
         
        </div>
      </div>

      <table class="table mt-3" ref={waiting_user_list}>
        <thead className="table_head">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Waiting Since</th>
            <th scope="col">Status</th>
            <th scope="col">Invite Code</th>
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
            .filter((item) => {
              if (searchkey === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchkey.toLowerCase())
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
                    <td>{user.created_at}</td>
                    <td>pending</td>
                    <td>{user.invite_code}</td>
                    <td>Action{index + 1}</td>
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

export default WaitingList;
