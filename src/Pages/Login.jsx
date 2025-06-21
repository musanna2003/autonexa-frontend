import React, { useContext } from 'react';
import { MyContext } from '../MyContext';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {

    const {signInUser , googleSignIn} = useContext(MyContext);
    const navigate = useNavigate();
    const location = useLocation();

    const errorTost = (msg) =>{toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });} 

    const successTost = () =>{
        toast.success('Login Successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }   

    const handelSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then(() => {
            successTost()
            navigate( location?.state || "/");
            // Signed in 
            // const user = userCredential.user;
           
          })
        .catch((error) => {
        let message = "";
        if (error.code === "auth/user-not-found") {
            message = "User not found. Please register first.";
        } else if (error.code === "auth/invalid-credential") {
            message = "Incorrect password. Please try again.";
        } else {
            message = "Login failed. " + error.message;
        }
        errorTost(message); // Use the same message directly
        });
    }

    const handelGoogle = () =>{
        googleSignIn()
        .then((res) => {
            console.log(res)
            successTost()
            navigate( location?.state || "/");

        })
        .catch((error) => {
            let message = "";

            if (error.code === "auth/popup-closed-by-user") {
                message = "Popup closed before signing in.";
            } else if (error.code === "auth/cancelled-popup-request") {
                message = "Popup request was cancelled.";
            } else if (error.code === "auth/popup-blocked") {
                message = "Popup was blocked by the browser.";
            } else if (error.code === "auth/network-request-failed") {
                message = "Network error. Please check your internet connection.";
            } else {
                message = "Google sign-in failed. " + error.message;
            }
            errorTost(message);
          });
    }

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-3xl">
                

                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <form onSubmit={handelSignIn} className="fieldset">
                                        <label className="label">Email</label>
                                        <input type="email" className="input" placeholder="Email" name='email' />
                                        <label className="label">Password</label>
                                        <input type="password" className="input" placeholder="Password" name='password' />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button className="btn btn-neutral mt-4">Login</button>
                                    </form>
                                    <div className="divider">OR</div>
                                    <button onClick={handelGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                        Login with Google
                                    </button>
                                    <div className='text-start'>
                                        <p>
                                            Don't have an account?&nbsp;  
                                            <a href='/register' className="link link-hover text-white/80 hover:underline font-[500]">
                                            Register here
                                            </a>
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;