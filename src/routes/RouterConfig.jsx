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
import GqlComponent from "../components/gqlComponent/index.jsx";
import ContextComponent from "../components/contextComponent/index.jsx";
import Position from "../components/position/index.jsx";
import Graph from "../components/graph/index.jsx";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/about" element={<About />} />
      <Route path="/graphql" element={<GqlComponent />} />
      <Route path="/context" element={<ContextComponent />} />
      <Route path="/position" element={<Position />} />
      <Route path="/graph" element={<Graph />} />
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
