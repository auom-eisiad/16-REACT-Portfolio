import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./pages/Footer";

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
