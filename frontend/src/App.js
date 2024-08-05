import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
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
        <Route path="/" element={<Navigate to="/genie" replace />} />
        <Route exact path='/genie' element={<Home />} />
        <Route exact path='/genie/earn' element={<Earn />} />
        <Route exact path='/genie/contact' element={<Contacts />} />
        <Route exact path='/genie/contact/report' element={<Reports />} />
        <Route exact path='/genie/termsandconditions' element={<TermsAndConditons />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
