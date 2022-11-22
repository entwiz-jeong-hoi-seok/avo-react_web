/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Address : </span> 서울특별시 금천구 가산디지털1로 225, 
                    1016호,1017호(가산동, 에이스 가산 포휴)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">CUSTOMER CENTER</h6>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> admin@entwiz.com
                  </li>
                  <li>
                  <span>Phone : </span> 1666-7926
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
          COPYRIGHT @ 2022 <a href="#0">ENTWIZ</a> CORP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
