import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14text-sm">
        {/* ----------left section---- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt=""></img>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Quickly find and connect with trusted doctors in your area. Browse
            through our extensive list of professionals and book your
            appointment effortlessly, all from the comfort of your home
          </p>
        </div>
        {/* ----------middle section---- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>Abou us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ----------right section---- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+92-3266534982</li>
            <li>alihaider@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* --------------copy right-------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
