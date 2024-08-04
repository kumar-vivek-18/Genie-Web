import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Earn from './components/earnings/Earn';
import Contacts from './components/contacts/Contacts';
import Reports from './components/contacts/Reports';
import Error from './components/utils/Error';
import TermsAndConditons from './components/termsandconditons/TermsandConditons';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/about' element={<About />} /> */}
        {/* <Route exact path='/services' element={<About />} /> */}
        <Route exact path='/earn' element={<Earn />} />
        <Route exact path='/contact' element={<Contacts />} />
        <Route exact path='/contact/report' element={<Reports />} />
        <Route exact path='/termsandconditions' element={<TermsAndConditons/>} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
