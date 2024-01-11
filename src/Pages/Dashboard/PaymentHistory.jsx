import { useEffect, useState } from "react";



const PaymentHistory = () => {
    const [people, setPeople] = useState([]);
    // const {name } = people;

    useEffect(() => {
        fetch('https://assignment-12-server-rouge-rho.vercel.app/people')
            .then(res => res.json())
            .then(data => setPeople(data))
    }, []);
    return (
        <div>
            <div className="overflow-x-auto w-full my-5">
                <table className="table table-xs">
                    <thead>

                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Bank Account</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                  
                        {
                            people.map((item, index) => <tbody key={item._id}>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Verified}</td>
                                    <td>{item.BankAccount}</td>
                                    <td>{item.Salary}</td>
                                    <td>{item.Pay}</td>
                                    <td>{item.Details}</td>

                                </tr>
                            </tbody>)
                        }
               
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;


