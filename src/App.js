import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 shadow-lg p-6 flex flex-col items-center text-white text-center">
      <a href="/" className="text-5xl font-extrabold tracking-wide">My Portfolio</a>
      <div className="space-x-8 text-lg mt-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white text-center p-6 mt-12">
      <p className="text-lg">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  return (
    <div className="w-full">
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-white shadow-xl rounded-2xl space-y-6 p-12">
        <h1 className="text-8xl font-extrabold text-indigo-700 text-center">Hi, I am ShienJian.<br />Designer and problem solver.</h1>
      </section>
      <section id="about" className="h-screen flex flex-col justify-center items-center bg-purple-100 shadow-xl rounded-2xl space-y-6 p-12">
        <h1 className="text-6xl font-extrabold text-purple-600">About Me</h1>
        <p className="text-xl text-gray-700">I am a passionate designer creating stunning visuals that inspire.</p>
      </section>
      <section id="contact" className="h-screen flex flex-col justify-center items-center bg-indigo-100 shadow-xl rounded-2xl space-y-6 p-12">
        <h1 className="text-6xl font-extrabold text-indigo-500">Contact Me</h1>
        <p className="text-xl text-gray-700">Feel free to reach out for collaborations or inquiries.</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-indigo-200 to-purple-300 min-h-screen flex flex-col text-gray-900 p-8">
        <Navbar />
        <motion.div 
          className="flex-grow container mx-auto p-8 max-w-5xl bg-white shadow-2xl rounded-2xl mt-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
