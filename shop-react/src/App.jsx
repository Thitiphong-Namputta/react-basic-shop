import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Home from "./pages/Home";
import Dashbord from "./pages/Dashbord";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav className="me-auto" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/Dashbord">Dashbord</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/Shop">Shop</Nav.Link>
          </Nav.Item>
        </Nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
