import { Link } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import "./styles.css";
// import Child from "./components/Child";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Child /> */}
      <Link to="/child">Child</Link>
      <hr />
      <Link to="/sibling">Sibling</Link>
      <AllRoutes />
    </div>
  );
}
