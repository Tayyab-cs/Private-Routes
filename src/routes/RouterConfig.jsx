import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/navbar/About.jsx";
import Home from "../components/navbar/Home.jsx";
import Contact from "../components/navbar/Contact.jsx";
import Email from "../components/contactPages/Email.jsx";
import PhoneNo from "../components/contactPages/PhoneNo.jsx";
import Address from "../components/contactPages/Address.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import Content from "../components/navbar/Content.jsx";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}>
        <Route path="email" element={<Email />} />
        <Route path="phone-no" element={<PhoneNo />} />
        <Route
          path="address"
          element={<PrivateRoutes Component={Address} authorize={false} />}
        />
      </Route>
    </Routes>
  );
}
