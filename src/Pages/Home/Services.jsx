import { useEffect, useState } from "react";
import ServiceItems from "../Shared/ServiceItems";
import SectionTitle from "../../Components/SectionTitle";



const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://assignment-12-server-rouge-rho.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div>

            <SectionTitle
                heading={"Our Services"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    services?.map(item => <ServiceItems
                        key={item.id}
                        item={item}

                    ></ServiceItems>)
                }
            </div>
        </div>
    );
};

export default Services;