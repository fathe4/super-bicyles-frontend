import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import './Dashboard.css'

const Dashboard = () => {
    const [isActive, setActive] = useState(true);
    const { user, logout } = UseAuth()

    console.log(user);


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
                    <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-grid-alt'></i>
                            <span class="links_name">Dashboard</span>
                        </Nav.Link>
                        <span class="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-user'></i>
                            <span class="links_name">My Orders</span>
                        </Nav.Link>
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
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-user'></i>
                            <span class="links_name">Manage All Orders</span>
                        </Nav.Link>
                        <span class="tooltip">Manage All Orders</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-user'></i>
                            <span class="links_name">Add A Product</span>
                        </Nav.Link>
                        <span class="tooltip">Add A Product</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-user'></i>
                            <span class="links_name">Make Admin</span>
                        </Nav.Link>
                        <span class="tooltip">Make Admin</span>
                    </li>
                    <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-user'></i>
                            <span class="links_name">Manage Products</span>
                        </Nav.Link>
                        <span class="tooltip">Manage Products</span>
                    </li>

                    <li>
                        <Nav.Link as={Link} to="/dashboard">
                            <i class='bx bx-user'></i>
                            <span class="links_name">Review</span>
                        </Nav.Link>
                        <span class="tooltip">Review</span>
                    </li>
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
                <div class="text">Dashboard</div>
                <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
                </p>
                <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
                </p>
                <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
                </p>
                <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;