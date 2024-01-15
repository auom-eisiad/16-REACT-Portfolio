import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./components/Navbar";
import './App.css';

const App = () => (
  <>
    <Nav />
    <main className="mx-3">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default App;
