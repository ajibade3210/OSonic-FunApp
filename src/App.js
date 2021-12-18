import React from 'react';
import './App.css';
import {Download, FAQ, Features, Footer, Header, Navbar, Subscribe} from './components';

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
        <Features />
        <Download />
        <Subscribe />
        <FAQ />
        <Footer/>
    </main>
  )
}

export default App;