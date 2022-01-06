import React, { useState } from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import AddProducts from '../AddProducts/AddProducts';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import './Dashboard.css'

const Dashboard = () => {
    const [isActive, setActive] = useState(true);
    const { user, logout, admin } = UseAuth()
    const { url, path } = useRouteMatch()


    const toggleClass = () => {
        setActive(!isActive);
    };


    return (
        <div>
            <div className={isActive ? "sidebar active" : "sidebar"} >
                <div class="logo_content">
                    <div class="logo">
                        <div class="logo_name">Super Bike</div>
                    </div>
                    <i class='bx bx-menu' id="btn" onClick={toggleClass}></i>
                </div>
                <ul class="nav_list">
                    {/* <li>
                        <i class='bx bx-search'></i>
                        <input type="text" placeholder="Search..." />
                        <span class="tooltip">Search</span>
                    </li> */}
                    {/* <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-grid-alt'></i>
                            <span class="links_name">Dashboard</span>
                        </Nav.Link>
                        <span class="tooltip">Dashboard</span>
                    </li> */}

                    <li>
                        <Link to={`${url}/myOrders`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">My Orders</span>
                        </Link>
                        <span class="tooltip">My Orders</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-user'></i>
                            <span class="links_name">Pay</span>
                        </Nav.Link>
                        <span class="tooltip">Pay</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to={`${url}/addReview`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Review</span>
                        </Nav.Link>
                        <span class="tooltip">Review</span>
                    </li>


                    {admin && <><li>
                        <Nav.Link as={Link} to={`${url}/manageAllOrders`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Manage All Orders</span>
                        </Nav.Link>
                        <span class="tooltip">Manage All Orders</span>
                    </li>
                        <li>
                            <Nav.Link as={Link} to={`${url}/addProducts`}>
                                <i class='bx bx-user'></i>
                                <span class="links_name">Add A Product</span>
                            </Nav.Link>
                            <span class="tooltip">Add A Product</span>
                        </li>
                        <li>
                            <Nav.Link as={Link} to={`${url}/makeAdmin`}>
                                <i class='bx bx-user'></i>
                                <span class="links_name">Make Admin</span>
                            </Nav.Link>
                            <span class="tooltip">Make Admin</span>
                        </li>
                        <li>
                            <Nav.Link as={Link} to={`${url}/manageProducts`}>
                                <i class='bx bx-user'></i>
                                <span class="links_name">Manage Products</span>
                            </Nav.Link>
                            <span class="tooltip">Manage Products</span>
                        </li> </>}


                    <li>
                        <Nav.Link onClick={logout}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Logout</span>
                        </Nav.Link>
                        <span class="tooltip">Logout</span>
                    </li>

                </ul>
                <div class="content">
                    <div class="user">
                        <div class="user_details">
                            {/* <img src="images/profile.jpg" alt="" /> */}
                            <div class="name_job">
                                <div class="name">{user.displayName}</div>
                                <div class="job">{user.email}</div>
                            </div>
                        </div>
                        <i class='bx bx-log-out' style={{ cursor: 'pointer' }} id="log_out" onClick={logout}></i>
                    </div>
                </div>
            </div>
            <div class="home_content">

                <Switch>
                    {/* <Route exact path={`${path}`}>
                        <MyOrders></MyOrders>
                    </Route> */}
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;