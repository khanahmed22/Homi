import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { SignIn } from "./components/pages/SignIn";
import { SignUp } from "./components/pages/SignUp";
import { NotFound } from "./components/pages/NotFound";
import { Properties } from "./components/properties/Properties";

import { Footer } from "./components/Footer";
import { Apartments } from "./components/properties/Apartments";
import { Houses } from "./components/properties/Houses";
import { AP1 } from "./components/properties/AP1";
import { H1 } from "./components/properties/H1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/properties" element={<Properties></Properties>}>
          <Route path="apartments">
            <Route index element={<Apartments></Apartments>}></Route>
            <Route path=":id" element={<AP1></AP1>}></Route>
          </Route>

          <Route path="houses">
            <Route index element={<Houses></Houses>}></Route>
            <Route path=":id" element={<H1></H1>}></Route>
          </Route>
        </Route>

        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
