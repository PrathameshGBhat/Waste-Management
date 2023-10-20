import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Complaint from "./pages/Complaint";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
<<<<<<< HEAD
import Login from "./pages/Auth/Login";



=======
>>>>>>> 652c7d130ad404f9ea5e55694578777ab9a92862

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
