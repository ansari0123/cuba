import React from "react";
import logo from "../assets/images/logo.svg";
import dashboard from "../assets/images/dashboard.svg";
import invite_codes from "../assets/images/invite_codes.svg";
import masters from "../assets/images/masters.svg";
import waiting_list from "../assets/images/waiting_list.svg";
import users from "../assets/images/users.svg";
import platforms from "../assets/images/platforms.svg";
import boarding from "../assets/images/boarding.svg";
import task from "../assets/images/task.svg";
import retailers from "../assets/images/retailers.svg";
import campaign from "../assets/images/campaign.svg";
import campaigns from "../assets/images/campaigns.svg";
import reports from "../assets/images/reports.svg";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="side_bar">
        <div className="brand_wrapper">
          <img src={logo} alt="logo" />
          <button className="side_toggle"></button>
        </div>
        <div className="menu_wrapper">
          <div class="accordion" id="accordionExample">
            <ul className="side_menu">
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "active" : "inActive"
                  }
                >
                  <div className="side_item d-flex justify-content-start align-items-center">
                    <img src={dashboard} alt="" />
                    <label htmlFor="#" className="ms-2">
                      DashBoard
                    </label>
                  </div>
                </NavLink>
              </li>
              <li>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="side_item d-flex justify-content-start align-items-center">
                        <img src={masters} alt="" />
                        <label htmlFor="#" className="ms-2">
                          Masters
                        </label>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul className="side_sub_menu">
                        <li>
                          <NavLink
                            to="/masters/invite_codes"
                            className={({ isActive }) =>
                              isActive ? "active" : "inActive"
                            }
                          >
                            <div className="side_sub_item d-flex justify-content-start align-items-center">
                              <img src={invite_codes} alt="" />
                              <label htmlFor="#" className="ms-2">
                                Invite Codes
                              </label>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/masters/waiting_list"
                            className={({ isActive }) =>
                              isActive ? "active" : "inActive"
                            }
                          >
                            <div className="side_sub_item d-flex justify-content-start align-items-center">
                              <img src={waiting_list} alt="" />
                              <label htmlFor="#" className="ms-2">
                                Waiting Lists
                              </label>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/masters/users"
                            className={({ isActive }) =>
                              isActive ? "active" : "inActive"
                            }
                          >
                            <div className="side_sub_item d-flex justify-content-start align-items-center">
                              <img src={users} alt="" />
                              <label htmlFor="#" className="ms-2">
                                Users
                              </label>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/masters/platforms"
                            className={({ isActive }) =>
                              isActive ? "active" : "inActive"
                            }
                          >
                            <div className="side_sub_item d-flex justify-content-start align-items-center">
                              <img src={platforms} alt="" />
                              <label htmlFor="#" className="ms-2">
                                Platforms
                              </label>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/masters/boarding_screens"
                            className={({ isActive }) =>
                              isActive ? "active" : "inActive"
                            }
                          >
                            <div className="side_sub_item d-flex justify-content-start align-items-center">
                              <img src={boarding} alt="" />
                              <label htmlFor="#" className="ms-2">
                                Boarding Screens
                              </label>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/masters/task_types"
                            className={({ isActive }) =>
                              isActive ? "active" : "inActive"
                            }
                          >
                            <div className="side_sub_item d-flex justify-content-start align-items-center">
                              <img src={task} alt="" />
                              <label htmlFor="#" className="ms-2">
                                Task Types
                              </label>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/masters/retailers"
                            className={({ isActive }) =>
                              isActive ? "active" : "inActive"
                            }
                          >
                            <div className="side_sub_item d-flex justify-content-start align-items-center">
                              <img src={retailers} alt="" />
                              <label htmlFor="#" className="ms-2">
                                Retailers
                              </label>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="/campaign_wizard"
                  className={({ isActive }) =>
                    isActive ? "active" : "inActive"
                  }
                >
                  <div className="side_item d-flex justify-content-start align-items-center">
                    <img src={campaign} alt="" />
                    <label htmlFor="#" className="ms-2">
                      Campaign Wizard
                    </label>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/campaigns"
                  className={({ isActive }) =>
                    isActive ? "active" : "inActive"
                  }
                >
                  <div className="side_item d-flex justify-content-start align-items-center">
                    <img src={campaigns} alt="" />
                    <label htmlFor="#" className="ms-2">
                      Campaigns
                    </label>
                  </div>
                </NavLink>
              </li>
              <li>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="side_item d-flex justify-content-start align-items-center">
                        <img src={reports} alt="" />
                        <label htmlFor="#" className="ms-2">
                          Reports
                        </label>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
