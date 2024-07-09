import React, { useState } from "react";

export default function About(props) {
  const [style1, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "none",
    borderRadius: "10px",
  });

  const [btn,btnStyle] = useState({
    color:'black',
    backgroundColor :'white',
    border : 'none',
  })

  const [btnTxt, setBtnText] = useState("Enable Light Mode");

  let updateMode = () => {
    if (style1.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
        border: "none",
        borderRadius: "10px",
      });

      btnStyle({
        color:'white',
    backgroundColor :'black',
    border : 'none',
      })

      setBtnText("Enable Dark Mode");
    }

    else{
        setStyle({
            color: "white",
            backgroundColor: "black",
            border: "none",
            borderRadius: "10px",
          });
          btnStyle({
            color:'black',
            backgroundColor :'white',
            border : 'none',
          })
    }
  };

  return (
    <>
      <h1 className="my-3">{props.heading}</h1>
      <div className="main mx-5 my-5" style={style1} id="main-1">
        <div className="accordion" id="accordionExample" style={style1}>
          <div className="accordion-item" style={style1}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={style1}
                id="a-i-1"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              
            >
              <div className="accordion-body" style={style1}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style1}>
            <h2 className="accordion-header" style={style1}>
              <button
                style={style1}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              style={style1}
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style1}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style1}>
            <h2 className="accordion-header" style={style1}>
              <button
                style={style1}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              style={style1}
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style1}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button
          id="dark-mode-btn"
          className=" btn btn-primary"
          type="button"
          style={btn}
          onClick={updateMode}
        >
          {btnTxt}
        </button>
      </div>
    </>
  );
}
