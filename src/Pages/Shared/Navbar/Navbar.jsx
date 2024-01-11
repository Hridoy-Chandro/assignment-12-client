import { Link } from "react-router-dom";
import logo from '../../../assets/Images/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>

        <li><Link to="/" className="text-white bg-black">Home</Link></li>
        <li><Link to="/contact-us" className="text-white bg-black">Contact Us</Link></li>
        <li><Link to="/dashboard/userHome" className="text-white bg-black">Dashboard</Link></li>


    </>




    return (
        <div>
            <div className="navbar fixed shadow-lg z-10 bg-opacity-30 bg-gray-300 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={1} role="button" className="btn btn-ghost  sm:hidden">

                        </div>
                        <ul tabIndex={1} className="menu menu-sm gap-3 dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/"> <span><img className="h-10 w-28" src={logo} alt="" /></span> </Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <>
                                
                                    <button onClick={handleLogOut} className="btn btn-secondary">LOG OUT</button>
                                
                            </> :
                            <>
                                <li>
                                    <Link to="/login"><button className="btn btn-primary">LOGIN</button></Link>
                                </li>

                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;