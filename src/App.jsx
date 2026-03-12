import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Explore from './pages/Explore';
import ShareExperience from './pages/ShareExperience';
import PrepMaterial from './pages/PrepMaterial';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-700">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/prep-material" element={<PrepMaterial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/share" element={<ShareExperience />} />
          </Routes>
        </main>

        <ChatBot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;














// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Components Imports
// // Make sure aapke paas src/components/Navbar.jsx file bani hui hai
// import Navbar from './components/Navbar';


// // Pages Imports
// // Make sure aapke paas src/pages/PrepMaterial.jsx file bani hui hai
// import PrepMaterial from './pages/PrepMaterial';

// // Baaki pages ke liye placeholders 
// // (Agar aapke paas asli files hain jaise Home.jsx, to unhe uncomment karke import karein)
// // import Home from './pages/Home';
// // import Login from './pages/Login';

// // Filhal ke liye simple placeholders taaki error na aaye agar files missing hain
// const Home = () => <div className="pt-24 text-center text-2xl font-bold text-gray-700">🏠 Home Page</div>;
// const Login = () => <div className="pt-24 text-center text-2xl font-bold text-gray-700">🔑 Login Page</div>;
// const Register = () => <div className="pt-24 text-center text-2xl font-bold text-gray-700">📝 Register Page</div>;
// const Explore = () => <div className="pt-24 text-center text-2xl font-bold text-gray-700">🚀 Explore Feed</div>;
// const Share = () => <div className="pt-24 text-center text-2xl font-bold text-gray-700">✍️ Share Experience</div>;
// const Practice = () => <div className="pt-24 text-center text-2xl font-bold text-gray-700">✨ Practice Area</div>;

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-700">
        
//         {/* Navbar hamesha upar dikhega */}
//         <Navbar />
        
//         {/* Routes decide karte hain ki kaunse link par kya dikhana hai */}
//         <Routes>
//           <Route path="/" element={<Home />} />
          
//           {/* Prep Material Page ka Route */}
//           <Route path="/prep-material" element={<PrepMaterial />} />
          
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/share" element={<Share />} />
//           <Route path="/practice" element={<Practice />} />
//         </Routes>

//       </div>
//     </Router>
//   );
// }

// export default App;