import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

const App = () => (
  <>
    <Nav />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default App;
