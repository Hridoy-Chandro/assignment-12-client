import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="px-8 pb-5">
        <div className="divider"></div>
        <div>
            <button className="btn">
                <FaGoogle className="mr-4"></FaGoogle>
                Google
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;