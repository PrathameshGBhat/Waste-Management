import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWrite = () => {
  return (
    <>
        <h1
          style={{
            paddingTop: "6rem",
            margin: "10px",
            fontWeight: "bold",
            fontSize: "50px",
          }}
        >
          3 R's OF LIFE
        </h1>
        <h2
          style={{
            paddingTop: "2rem",
            color: "blue",
            margin: "10px",
            fontWeight: "bold",
          }}
        >
          R
          <Typewriter
            words={["EUSE", "ECYCLE","EDUCE"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

    </>
  );
};

export default TypeWrite;
