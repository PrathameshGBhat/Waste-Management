import React from "react";
import Layout from "../components/Layout/Layout";
<<<<<<< HEAD
import Since2022 from "../images/Since2022.png";

=======
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter'
import Since2022 from "../images/Since2022.png";
>>>>>>> 06477fd4dfa73a3ee8cf83c47ff1ccee0fc5b3e7
const AboutUs = () => {
  return (
    <Layout title={"About us"}>
      <div className="row aboutus">
        <div className="col-md-6 ">
          <img
<<<<<<< HEAD
=======
            className="logo"
>>>>>>> 06477fd4dfa73a3ee8cf83c47ff1ccee0fc5b3e7
            src={Since2022}
            alt="contactus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-5">
          <div className="text-justify mt-4 ">
            <h1 style={{paddingTop:'4rem', margin:'auto 0', fontWeight:'normal'}}>Students of CSE Branch 2nd Year </h1>
            <h1 style={{ paddingTop:'2rem',margin:'auto 0', fontWeight:'normal'}}>Developers:</h1>
            <h2 style={{paddingTop:'2rem',color:'red', fontWeight:'bold'}}>
              <Typewriter
              words={['Prathamesh','Sujeeth']}
              loop={Infinity}  
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              />
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
