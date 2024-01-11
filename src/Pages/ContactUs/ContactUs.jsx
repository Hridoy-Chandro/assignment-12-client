
import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/Images/Screenshot 2024-01-04 182914.jpg';

const ContactUs = () => {
    return (
     <div>
        <Helmet>
            <title>My-Task | Contact Us</title>
        </Helmet>
           <div className="pt-24">
            <div className="flex gap-20 my-10">
                <div className="w-1/2">
                    <h1 className="text-red-600 text-5xl uppercase font-bold mb-10">Contact Us</h1>
                    <p>You are welcomed to visit our office for any information related to course and training. You can also reach us through the hotline number or messenger.

                    </p>
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl text-rose-500 uppercase font-bold ">Head Office
                    </h1>
                    <h3 className="pt-5">
                        Momtaz Plaza (4th Floor) <br />
                        Opposite of Labaid Hospital <br />
                        House#7, Road#4, Dhanmondi, <br />
                        Dhaka 1205, Bangladesh <br />
                        Phone Number
                    </h3>
                </div>
            </div>
            <section className='flex my-10'>
                <div className='w-1/2'>
                    <img src={img1} alt="" />
                </div>
                <div className='w-1/2 ml-12'>
                    <h1 className="text-2xl uppercase pb-4 font-semibold">Inbox your queries</h1>
                    <div>
                        <form className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name"
                                    placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="gap-4 flex">
                                <div className='w-1/2'>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email"
                                        placeholder="email" className="input input-bordered w-full" required />
                                </div>
                                <div className='w-1/2'>
                                    <label className="label">
                                        <span className="label-text">Phone No</span>
                                    </label>
                                    <input type="number" name="phone"
                                        placeholder="Phone No" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Write Details</span>
                                    </label>
                                    <input type="text" name="details"
                                        placeholder="Write Details" className="input input-bordered" required />
                                </div>
                            </div>
                            <input type="submit" value="Submit" className='btn btn-secondary my-5 uppercase' />
                        </form>
                    </div>
                </div>
            </section>
        </div>
     </div>
    );
};

export default ContactUs;