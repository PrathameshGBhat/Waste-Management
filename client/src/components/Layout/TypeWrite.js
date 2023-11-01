import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWrite = () => {
  return (
    <>
      <h1
        style={{
          paddingTop: "6rem",
          margin: "10px",
          fontFamily: "Poppins",
          fontWeight: "bold",
          fontSize: "50px",
          color: "blue",
        }}
      >
        3 R's OF LIFE
      </h1>
      <h2
        style={{
          paddingTop: "px",
          fontFamily: "Poppins",
          color: "green",
          margin: "10px",
          fontWeight: "bold",
          fontSize: "100px",
        }}
      >
        RE
        <Typewriter
          words={["USE", "CYCLE", "DUCE"]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={120}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </h2>
    </>
  );
};

export default TypeWrite;
