import { Carousel } from "react-responsive-carousel";
import img1 from '../../assets/Images/award (1).jpg';
import img2 from '../../assets/Images/award (2).jpg';
import img3 from '../../assets/Images/award (3).jpg';
import SectionTitle from "../../Components/SectionTitle";

const Award = () => {
    return (
        <div>
            <SectionTitle heading="Our award"></SectionTitle>

            <Carousel className="text-center">
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>

            </Carousel>

        </div>
    );
};

export default Award;