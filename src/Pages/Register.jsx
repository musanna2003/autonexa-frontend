import React from 'react';

const Register = () => {
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
                                    <fieldset className="fieldset">
                                        <label className="label">Name</label>
                                        <input type="text" className="input" placeholder="Name" name='name' />
                                        <label className="label">Email</label>
                                        <input type="email" className="input" placeholder="Email" name='email' />
                                        <label className="label">Password</label>
                                        <input type="password" className="input" placeholder="Password" name='password' />
                                        <label className="label">Photo URL</label>
                                        <input type="url" className="input" placeholder="Photo URL" name='photo' />
                                        <button className="btn btn-neutral mt-4">Register</button>
                                    </fieldset>
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