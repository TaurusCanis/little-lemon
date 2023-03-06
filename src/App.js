import './App.css';
import './styles.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    	<div className="App">
		<Header />
		<Navbar />
		<Routes>
			<Route path="/" element={<Homepage />}></Route>
			<Route path="/booking" element={<Booking />}></Route>
		</Routes>
		<Footer />
   	 </div>
    </BrowserRouter>
  );
}

export default App;
