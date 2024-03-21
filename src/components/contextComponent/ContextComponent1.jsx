import { useContext } from "react";
import { UserContext, LocationContext } from "../../store/index.js";

const ContextComponent1 = () => {
  const [user, setUser] = useContext(UserContext);
  const location = useContext(LocationContext);
  setUser("component 1");

  return (
    <div>
      <h1>Component 1</h1>
      <h2>this is from {user}</h2>
      <h4>{`address: ${location.name}`}</h4>
    </div>
  );
};

export default ContextComponent1;
