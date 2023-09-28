import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });

                fetch('https://bistro-boss-server-murex.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("jwt response", data);

                    })

                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className=" min-h-screen w-auto bg-base-200">
                <div className=" flex-col">
                    <div className="text-center  ">
                        {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                        {/* <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" className='rounded-lg' alt="" /> */}
                        <div className="text-center ">
                        <h1 className=" mb-6 text-2xl md:text-5xl  font-bold">Login now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    </div>
                    <div className="card w-full sm:p-4 md:w-1/2 mx-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered focus:outline-none focus:border-secondary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered focus:outline-none focus:border-secondary" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered focus:outline-none focus:border-secondary" />

                            </div>
                            {/* ToDo; make button disable for captcha */}
                            <div className="form-control mt-6">
                                <input  style={{backgroundColor:'#F000B8'}} disabled={false} className="btn" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='ml-8 text-xl'><> <Link to="/singup" > New Here? <span className='text-red-600 font-bold '> Create an account</span> </Link> </></p>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Login;