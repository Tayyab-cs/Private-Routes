import { useState } from "react";
import { UserContext, LocationContext } from "../../store/index.js";
import ContextComponent1 from "./ContextComponent1.jsx";
import ContextComponent2 from "./ContextComponent2.jsx";

const ContextComponent = () => {
  const [user, setUser] = useState("parent context component");
  const [address, setAddress] = useState({
    name: "House no I-69, Street no 69",
    district: "Punjab",
    country: "Pakistan",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <LocationContext.Provider value={address}>
        <div>
          <h1>Context Component</h1>
          <ContextComponent1 />
          <ContextComponent2 />
        </div>
      </LocationContext.Provider>
    </UserContext.Provider>
  );
};

export default ContextComponent;
