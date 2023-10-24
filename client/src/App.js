import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Blog from "./components/Blog";
import Events from "./components/Events";

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </Router>
  );
}

export default App;
