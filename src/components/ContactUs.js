import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className="ContactUs-con">
      <div className="contact-us">
        <h3>Contact Us</h3>
      </div>

      <div className="form-con">
        <div className="address-con">
          <div className="contacts">
            <div className="contact">
              <MdEmail />
              <p>tsenterprises@swazi.net</p>
            </div>
            <div className="contact">
              <MdLocalPhone />
              <p>+268 7604 6822</p>
            </div>
            <div className="contact">
              <FaWhatsapp />
              <p>+268 7604 6822</p>
            </div>
          </div>
          <div className="box-con">
            <p>Ngwenya Old Mine Road</p>
            <p>P.O Box 059</p>
            <p>Ngwenya, H105</p>
          </div>

          <div className="hangles">
            <div className="handle-con">
              <FaFacebookF />
            </div>

            <div className="handle-con">
              <FaInstagram />
            </div>

            <div className="handle-con">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="form">
          <div action="" className="contact-form">
            <div className="name-mail">
              <input
                type="text"
                required
                placeholder="YOUR NAME"
                className="name"
              />
              <input
                type="email"
                required
                placeholder="YOUR EMAIL"
                className="name"
              />
            </div>
            <div className="subject-field">
              <input
                type="text"
                required
                placeholder="ENTER SUBJECT"
                className="subject"
              />
            </div>
            <div className="text-field">
              <textarea
                name=""
                id=""
                cols="15"
                rows="8"
                placeholder="Message here"
                className="text-area"
              ></textarea>
            </div>
            <div className="submit-btn">
              <button id="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
