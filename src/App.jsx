import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App
