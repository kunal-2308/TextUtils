import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextForm.css";
import { Link } from "react-router-dom";

export default function TextForm(props) {
  const [text, setText] = useState("");

  let getUp = () => {
    if(text.length===0){
      alert("POP!");
    }
    else{
    let upperVal = text.toUpperCase();
    setText(upperVal);
    }
    
  };

  let getDown = () => {
    let lowerVal = text.toLowerCase();
    setText(lowerVal);
  };

  let onChangeFun = (evt) => {
    setText(evt.target.value);
  };

  let clearText = () => {
    setText("");
  };


  let handleCopy = () => {
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      console.log("Copied Text");
    }, 200);
  };


  let val = text.length>0 ? text: "Enter some text for preview";


  let ansString = "";
  let alternateText = () => {
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 1) {
        let val = text[i].toUpperCase();
        ansString = ansString + val;
      } else if (i % 2 === 0) {
        let val = text[i].toLowerCase();
        ansString = ansString + val;
      }
    }
    setText(ansString);
  };

  
  const[btnStyle,setStyle] = useState({
    color : 'white',
    textDecoration : 'none'
  });

  console.log(btnStyle.color);

  return (
    <>
    <div className="container" style={props.styling}>
      <h2 id="heading-pops">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={onChangeFun}
        ></textarea>
      </div>
      <div className="buttons-div">
        <button type="button" className="btn btn-primary" onClick={getUp}>
          Convert to Upper Case
        </button>
        <button type="button" className="btn btn-primary" onClick={getDown}>
          Convert to Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={alternateText}
        >
          Convert to Alternate Case
        </button>
        <button type="button" className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
        <button type="button" className="btn btn-primary" onClick={handleCopy}>
          Copy To Clipboard
        </button>
      </div>

      <div className="summary my-3">
        <h3>Text Summary</h3>
        <p>
          {text.length<=2?0 : text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p> {val}</p>
      </div>
      <button className="btn btn-primary" id="clickMe" style={btnStyle}>Click ME!</button>
      </div>

     
    </>
  );
}

TextForm.prototype = {
  placeholderVal: PropTypes.string,
  heading: PropTypes.string,
};
