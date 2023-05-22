/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="container">
      <div class="card text-center">
        <div class="card-header">Thông tin</div>
        <div className="row">
          <div class="contact-img col-lg-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Logo_DHCN.png"></img>
          </div>
          <div className="contact-content col-lg-8">
            <h2 class="contact-name m-5">Nhóm 5</h2>
            <p>
              <a href=" #">
                <i class="fa fa-envelope-square"></i>nhom5@gmail.com
              </a>
            </p>
            <p>
              <a href="https://github.com/QuanIT01">
                <i class="fa fa-github" />
                Thông tin qua Github
              </a>
            </p>
            <p>
              <a href=" #">
                <i class="fa fa-linkedin"></i>Thông tin qua Linkedin
              </a>
            </p>
            <a href=" #" class="">
              <img src=""></img>
              <span>Trường Đại Học Công Nghiệp Hà Nội</span>
            </a>
          </div>
        </div>
        <div class="card-footer text-muted">Liện hệ với tôi</div>
      </div>
    </div>
  );
};
export default Contact;
