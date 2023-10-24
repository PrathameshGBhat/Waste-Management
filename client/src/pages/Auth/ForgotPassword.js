import React,{useState} from "react";
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import FOR from "../../videos/FOR.mp4";


const ForgotPassword = () => {
        const [email,setEmail] = useState("");
        const [newPassword,setNewPassword] = useState("");
        const [answer,setAnswer] = useState("");
        const navigate = useNavigate();
    
         // form function
         const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const res = await axios.post("/api/v1/auth/forgot-password",
                {email,newPassword,answer,}
                );
                if(res && res.data.success){
                  toast.success(res.data && res.data.message);
                
                  navigate('/login');
                }else{
                 toast.error(res.data.message);
                }
            }catch (error){
              console.log(error);
              toast.error("Something Went Wrong");
            }
          };
  return (
    <Layout title={'Forgot Password - WM'}>
      <video autoPlay muted loop className="bg-video">
          <source src={FOR} type="video/mp4" />
      </video>
         <div className="form-container">
           <form onSubmit={handleSubmit}>
           <h1 className="title">Reset Password</h1>
  <div className="mb-3">
    
   
  </div>
  <div className="mb-3">
    <input type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="form-control"
     id="exampleInputEmail1" 
     placeholder="Enter Your Email"
     required
     />
   
  </div>
  <div className="mb-3">
    <input type="text"
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
    className="form-control"
     id="exampleInputEmail1" 
     placeholder="Enter Your Favorite Color"
     required
     />
   
  </div>
  <div className="mb-3">
    <input type="password"
    value={newPassword} 
    onChange={(e) => setNewPassword(e.target.value)}
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder="Enter New Password"
    required
    />
  </div>
  
  <button type="submit" className="btn btn-primary">Reset</button>
</form>

        </div>
    </Layout>
  );
};

export default ForgotPassword;