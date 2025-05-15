import ReactDOM from 'react-dom/client';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Register from './pages/Register';
import Login from './pages/Login';
import ModernResort from './pages/ModernResort';
import BookingPage from './pages/BookingPage';

export default function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="packages" element={<Packages />} />
          <Route path="modernresort" element={<ModernResort />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} /> 
          <Route path="bookingpage" element={<BookingPage />} />
           </Route>
      </Routes>
    </HashRouter>  
  );
}
const trip =ReactDOM.createRoot(document.getElementById("root"))
trip.render(<App />);