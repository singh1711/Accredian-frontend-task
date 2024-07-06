import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ReferralBenefits from './components/ReferralBenefits';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <ReferralBenefits />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
