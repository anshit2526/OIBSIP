import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Navbar />
        <main className='w-dvw'>
          <div className='flex h-28 justify-end items-end relative top-0'>
            <button className='mx-16 h-max rounded-xl underline font-light hover:no-underline'>Download my CV</button>
            <Link to='/Contact'> <button className='mx-16 h-max rounded-3xl bg-my-theme px-10 py-2'>Get in touch</button></Link>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/Experience" element={<Experience />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </main>

      </Router >
    </>

  );
}

export default App;
