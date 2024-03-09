import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Main() {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
