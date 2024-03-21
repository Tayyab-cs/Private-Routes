import { useContext } from "react";
import { LocationContext, UserContext } from "../../store/index.js";

const ContextComponent2 = () => {
  const user = useContext(UserContext);
  const location = useContext(LocationContext);

  return (
    <div>
      <h1>Component 2</h1>
      <h2>this is from {user}</h2>
      <h4>{`address: ${location.district}, ${location.country}`}</h4>
    </div>
  );
};

export default ContextComponent2;
