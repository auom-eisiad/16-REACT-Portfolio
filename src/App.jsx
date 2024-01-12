import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";

const App = () => (
  <>
    <Nav />
    <main className="mx-3">
      <Outlet />
    </main>
  </>
);

export default App;
