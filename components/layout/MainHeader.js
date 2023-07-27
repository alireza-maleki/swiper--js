import React, { Fragment } from "react";
import classes from "./MainHeader.module.scss";
import Bascket from "../bascket/Bascket";

import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";



const MainHeader = () => {
    return (
        <Fragment>

            {/* === Top Header === */}
            <div className={` container my-3 ${classes.header}  `}>

                <div className="d-flex align-items-center justify-content-between flex-md-row flex-column flex-column-reverse">


                    <div className={` mb-3 mb-md-0 ${classes.text} `}>
                        <p className="my-0">Hello Customer, welcome to <span>Ana</span> Market !</p>
                    </div>


                    <div className="d-flex align-items-center">

                        <div className={`d-flex align-itmes-center flex-row-reverse d-md-flex d-none  ${classes.paragraph} `}>
                            <p>Store Location</p>
                            <p>Track Your Orders</p>
                            <p>FAQs</p>
                        </div>

                        <select className={` ${classes['select-box-1']}`}>
                            <option value="English">English</option>
                            <option value="Russian">Russian</option>
                        </select>

                        <select className={classes['select-box-2']}>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>

                </div>

            </div>

            <hr className="border-bottom my-0" />






            {/* === Hearch Header === */}
            <div className="container">

                <div className="d-flex my-4 align-items-center justify-content-between ">
                    <div className={classes.logo}>
                        <h3>
                            <span>A</span>
                            <span>N</span>
                            <span>A</span>
                        </h3>
                    </div>

                    <div className={classes['input-box']}>
                        <select>
                            <option value="Food">Food</option>
                            <option value="Car">Car</option>
                            <option value="Electronic">Electronic</option>
                            <option value="House">House</option>
                            <option value="Body">body</option>
                            <option value="Women">Women</option>
                        </select>

                        <input type="text" placeholder="Search For Products" />

                        <div className={classes.search}>
                            <BiSearch className='fs-3' />
                        </div>

                    </div>

                    <div className={` d-flex align-items-center justify-content-between ${classes.icons} `}>

                        <div className={`  fs-3 ${classes.heart}`} >
                            <span>5</span>
                            <AiOutlineHeart />
                        </div>

                        <Bascket />

                        <div className="d-flex align-items-center ">
                            <BsPerson className="fs-3" />
                            <div>
                                <p>Login</p>
                                <p>Register</p>
                            </div>
                        </div>

                    </div>

                    

                </div>

            </div>


        </Fragment>
    )
}

export default MainHeader;

