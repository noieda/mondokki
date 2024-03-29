import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import RoomsAvailable from './components/RoomsAvailable';
import Home from './components/Home';
import Summary from './components/Summary';
import Payment from './components/Payment';
import Invoice from './components/Invoice';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Helmet } from 'react-helmet'
import { useEffect, useState } from "react"

function App() {

  // const [pages, setPages] = useState("home")

  useEffect(() => {
    console.log("appjs use")
  }, [])

  return (
    <div className="App">
      <Helmet>
        <title>Mondokki</title>
      </Helmet>

      <Navigation />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          
          {/* route for user to reserve a room */}
          <Route path="/roomsavailable" element={<RoomsAvailable />}/>

          <Route path="/bookingform" element={<BookingForm />}/>
            
          <Route path="/summary" element={<Summary />} />
            
          <Route path="/payment" element={<Payment />} />

          <Route path="/invoice" element={<Invoice />} />

          {/* another route */}
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
