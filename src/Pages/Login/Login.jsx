// import { Navigate, useNavigate } from "react-router-dom";;
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || "/";

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
      
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire("Login Successful");
        })
       
        navigate( from, {replace: true});
            
    }

    return (
        <>
            <Helmet>
                <title>My Task | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"
                                    placeholder="password" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    
                                    className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='font-semibold text-center'>New Here ?<Link to="/signUp"> <span className='underline'>Please Create an Account</span> </Link> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            
        </>
    );
};

export default Login;