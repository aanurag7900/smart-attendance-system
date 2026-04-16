
// import { Link } from "react-router-dom";

// function Main() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
//       <h1 className="text-3xl font-bold mb-8">
//         Smart Attendance System
//         </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
//         {/* New Registration */}
//         <button className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-violet-100 transition">
//           <h2 className="text-xl font-semibold mb-2"><Link to="/enrolluser"> ➕ New Registration</Link></h2>
//           <p className="text-gray-600 text-sm">Register a new student or faculty member into the system.
            
//           </p>
//         </button>

//         {/* Mark Attendance */}
//         <button className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-green-100 transition">
//           <h2 className="text-xl font-semibold mb-2"> <Link to="/markattendance">✔️ Mark Attendance </Link></h2>
            
//           <p className="text-gray-600 text-sm">
//             Use face recognition to mark attendance automatically.
//           </p>
//         </button>
//       </div>
//     </main>
//   );
// }

// export default Main;





import { Link } from "react-router-dom";
import { FaUserPlus, FaCheckCircle } from "react-icons/fa";

function Main() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white px-4">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide">
        Smart Attendance System
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

        {/* Registration Card */}
        <Link
          to="/enrolluser"
          className="group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaUserPlus className="text-3xl text-violet-400 group-hover:scale-110 transition" />
            <h2 className="text-2xl font-semibold text-white">
              New Registration
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Register a new student or faculty member into the system with secure data handling.
          </p>
        </Link>

        {/* Attendance Card */}
        <Link
          to="/markattendance"
          className="group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCheckCircle className="text-3xl text-green-400 group-hover:scale-110 transition" />
            <h2 className="text-2xl font-semibold text-white">
              Mark Attendance
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Use AI-powered face recognition to mark attendance automatically and accurately.
          </p>
        </Link>
      </div>

    
    </main>
  );
}

export default Main;