import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsDetails from "./pages/NewsDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Departments from "./pages/Departments";
import Sug from "./pages/Sug";
import Entertainment from "./pages/Entertainment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Admission from "./pages/Admission";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import BreakingTicker from "./components/BreakingTicker";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddNews from "./pages/AddNews";

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <BreakingTicker />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/sug" element={<Sug />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
        

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/topheader" element={<TopHeader />} />
         <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-news"element={<AddNews />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;