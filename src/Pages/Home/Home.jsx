import { Helmet } from "react-helmet-async";
import Award from "./Award";
import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import Services from "./Services";
import Testmonials from "./Testmonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>My Task | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <ExtraSection></ExtraSection>
            <Award></Award>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;