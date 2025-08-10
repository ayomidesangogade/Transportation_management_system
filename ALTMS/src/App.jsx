import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LogIn"
import AdminDashboard from "./Pages/AdminDashboard"
import StaffDashboard from "./Pages/UserDashboard"
import DriverDashboard from "./Pages/DriverDashboard"
import RequestTransportPage from "./Pages/RequestTransportPage"
import Register from "./Pages/RegistrationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/request" element={<RequestTransportPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App