import { useState } from "react";
import "./App.css";
import About from "./components/About";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmitComp from "./components/SubmitComp";

function App() {
  const [text, setText] = useState("Enable Dark Mode");

  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  let handleEvent = () => {
    if (text === "Enable Dark Mode") {
      setText("Disable Dark Mode");
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setText("Enable Dark Mode");
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <div style={style} className="main-1">
          <Navbar
            name="TextUtils"
            aboutText="About TextUtils"
            search="Search"
            text={text}
            handle={handleEvent}
            styling={style}
          />

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  placeholderVal="Enter your Text"
                  heading="Enter you're text to analyze"
                  styling={style}
                />
              }
            />
            <Route exact path="/ContactUs"></Route>
            <Route exact path="/SubmitComp" element={<SubmitComp style={style} setStyle={setStyle}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
