import React from 'react';
import Nav from './components/Nav';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import './App.scss';
import '../src/css/font-awesome.min.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <main>
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
