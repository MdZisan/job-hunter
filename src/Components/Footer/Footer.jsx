import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (<div>
    <div className="bg-black text-white p-9">
      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-5 md:gap-4">
        {/* 1st */}
        <div>
          <h2 className="font-bold">Job Hunter</h2>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-4 my-3">
            <a href="">
              <img
                className=" border rounded-full bg-white p-1 w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="border rounded-full bg-white p-1 w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="border rounded-full bg-white p-1 w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* 2nd */}
        <div>
          <h2 className="font-semibold">Company</h2>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </div>
        {/* 3rd */}
        <div>
          <h2 className="font-semibold">Product</h2>
          <p>Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
        {/* 4rd */}
        <div>
          <h2 className="font-semibold">Support</h2>
        <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        {/* 5th */}
        <div>
          <h2 className="font-semibold">Contact</h2>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <hr  className="my-3"/>
      <div className="md:flex justify-between">
        <h2>@2023 Job Hunter. All Rights Reserved</h2>
        <h2>Powered by Job hunter</h2>
      </div>
    </div>
  </div>
    
  );
};

export default Footer;
