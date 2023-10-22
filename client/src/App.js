import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Complaint from "./pages/Complaint";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
<<<<<<< HEAD

=======
>>>>>>> 06477fd4dfa73a3ee8cf83c47ff1ccee0fc5b3e7
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
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
