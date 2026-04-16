
import Nav from "./Component/Nav";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import Admin from "./Pages/Admin";
import EnrollUser from "./Pages/EnrollUser";
import MarkAttendance from "./Pages/MarkAttendance";
import PrivateRoute from "./Pages/PrivateRouter";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      
      {/* Navbar */}
      <Nav />

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="*" element={<div className="text-white text-center mt-10">404 Page Not Found</div>} />
          
          <Route path="/" element={<Main />} />
          <Route path="/enrolluser" element={<EnrollUser />} />
          <Route path="/markattendance" element={<MarkAttendance />} />
          
          <Route
            path="/admin"
            element={<Admin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;