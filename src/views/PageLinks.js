// import { Link } from "react-router-dom";

// const PageLinks = () => {
//     return (
//         <div >
//             <Link to="/" fontSize="2xl">
//                 Sign In Page
//             </Link>
//             <Link to="/about" fontSize="2xl">
//                 Home Page
//             </Link>
//             <Link to="/contact" fontSize="2xl">
//                 Account Page
//             </Link>
//         </div>
//     );
// };

// export default PageLinks;
import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from "reactstrap";

const PageLinks = () => {
    return (
        <div>
            <nav className="nav justify-content-center">
                <ul className="nav ">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">
                            contact
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/product">
                            Product
                        </Link>
                    </li>
                    <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle caret nav>
                            Customer
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                <Link className="nav-link" to="/customer">
                                    Customer
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <li>
                        <Link className="nav-link disabled" to="">
                            Disabled
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link " to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link " to="/logout">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
};

export default PageLinks;
