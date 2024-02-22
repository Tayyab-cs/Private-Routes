import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import { Box } from "@chakra-ui/react";
import RouterConfig from "./routes/RouterConfig.jsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Box>
        <Header />
        <RouterConfig />
      </Box>
    </>
  );
}

export default App;
