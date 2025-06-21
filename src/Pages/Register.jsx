import React, { useContext } from 'react';
import { MyContext } from '../MyContext';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(MyContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const photo = e.target.photo.value.trim();
        const password = e.target.password.value;
    
        if (!name || !email || !password) {
            toast.error("Please fill in all required fields.");
            return;
        }
    
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
    
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        if (!uppercasePattern.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!lowercasePattern.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
    
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
    
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    toast.success("Registration successful!");
                    navigate(location?.state || "/");
                }).catch((error) => {
                    console.error("Profile update error:", error);
                    toast.error("Failed to update profile.");
                });
            })
            .catch((error) => {
                console.error(error);
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already in use. Try logging in.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Invalid email address.");
                } else {
                    toast.error("Registration failed. " + error.message);
                }
            });
    };

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
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <form onSubmit={handleRegister} className="fieldset">
                                        <label className="label">Name</label>
                                        <input type="text" className="input" placeholder="Name" name='name' />
                                        <label className="label">Email</label>
                                        <input type="email" className="input" placeholder="Email" name='email' />
                                        <label className="label">Password</label>
                                        <input type="password" className="input" placeholder="Password" name='password' />
                                        <label className="label">Photo URL</label>
                                        <input type="url" className="input" placeholder="Photo URL" name='photo' />
                                        <button className="btn btn-neutral mt-4">Register</button>
                                    </form>
                                    <div className='text-start'>
                                        <p>
                                        Already have an account?&nbsp;  
                                            <a href='/login' className="link link-hover text-white/80 hover:underline font-[500]">
                                            Login here
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

export default Register;