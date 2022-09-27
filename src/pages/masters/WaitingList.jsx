import axios from "../../axios/axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const WaitingList = () => {
    const [Users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage]=useState('')
    const [searchkey, setSearchKey]= useState('')
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
      setMessage('');
    }else{
        setLoading(false);
        setMessage('No Waiting User Found')
    }   
  };
  useEffect(() => {
    fetchWaitingUserList();
  }, []);
  return (
    <div className="content">
      <div className="action_bar">
        <h4>Waiting User List</h4>
      </div>
      <hr className="mt-4" />
      <div className="option_bar d-flex justify-content-between align-content-center">
        <input type="search" name="search" id="search" placeholder="Search" onChange={(e)=>setSearchKey(e.target.value)} />
        <div className="options d-flex align-items-center">
          <button className="export_btn me-5">Export</button>
          <select className="option_select">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    
      <table class="table mt-3">
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
        <tbody className="table_body" style={{
            position:'relative'
        }}>
            {
                loading?(<>

                        <div className="spinner-3 mt-5 text-center" style={{
                            position: 'absolute',
                            left: '45%',
                            
                        }}></div>
                   
                     
              
                 
                </>):(<></>)
            }
            {
                message?(<>
                    <h3 className="mt-5 d-flex-justify-content-center align-items-center">{message}</h3>
                </>):(<></>)
            }
            {
                
            }
          {Users?.filter((item)=>{
            if(searchkey === ''){
              return item
            }
            else if(item.name.toLowerCase().includes(searchkey.toLowerCase())){
              return item
            }
          })?.map((user, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.created_at}</td>
                  <td>pending</td>
                  <td>{user.invite_code}</td>
                  <td>Action{index+1}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WaitingList;
