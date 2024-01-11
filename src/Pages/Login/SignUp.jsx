import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire("Sign Up Successful");
        })
        reset();
    }



    return (
        <div>
            <Helmet>
                <title>My Task | Sign Up</title>
            </Helmet>
            <div className="bg-base-200">
                <div className="pt-20 ">

                    <div className="card shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="flex gap-9">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register("name", { required: true })}
                                        name="name"
                                        placeholder="Name" className="input input-bordered " />
                                    {errors.name && <span className="text-red-600">Name is required</span>}

                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        {...register("email", { required: true })}
                                        name="email"
                                        placeholder="Email" className="input input-bordered" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-9">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password"
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 16,
                                                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&? "])/
                                            })}

                                            name="password"
                                            placeholder="password" className="input input-bordered " />
                                            {errors.password && <span className="text-red-600">password is required</span>}
                                            {errors.password && <span className="text-red-600">password must be 6 characters and one uppercase, lowercase and special characters.</span>}
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Bank Account No</span>
                                        </label>
                                        <input type="text"
                                            {...register("account", { required: true })}
                                            name="account"
                                            placeholder="" className="input input-bordered" />
                                            {errors.account && <span className="text-red-600">account is required</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-9">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Designation</span>
                                    </label>
                                    <input type="text"
                                        {...register("designation", { required: true })}
                                        name="designation"
                                        placeholder="Designation" className="input input-bordered " />
                                        {errors.designation && <span className="text-red-600">designation is required</span>}
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Salary</span>
                                    </label>
                                    <input type="number"
                                        {...register("salary", { required: true })}
                                        name="salary"
                                        placeholder="Salary" className="input input-bordered" />
                                        {errors.salary && <span className="text-red-600">salary is required</span>}
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-9">
                                    <div className="form-control w-1/2">
                                        <div className="label">
                                            <span className="label-text">Roll</span>
                                        </div>
                                        <select
                                        defaultValue="default"
                                            {...register("default", { required: true })}
                                            className="select select-bordered">
                                                {errors.name && <span className="text-red-600">Roll is required</span>}
                                            <option value="default"> Select a Roll</option>
                                            <option value="admin">Admin</option>
                                            <option value="hr">HR</option>
                                            <option value="employee">Employee</option>

                                        </select>
                                    </div>

                                    <div className="w-1/2">
                                        <label className="label">
                                            <span className="label-text">Your Photo</span>
                                        </label>
                                        <div className="">
                                            <input type="file"
                                                {...register("image", { required: true })}
                                                className="file-input w-full" />
                                                {errors.image && <span className="text-red-600">file is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    className="btn btn-primary" type="submit" value="SIGN UP" />
                            </div>
                        </form>
                        <p className='font-semibold text-center'>Already have an account ?<Link to="/login"> <span className='underline'>Please Login</span> </Link> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;