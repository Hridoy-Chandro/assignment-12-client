import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../assets/Images/1 (3).jpg'
import img2 from '../../assets/Images/1 (2).jpg'
import img3 from '../../assets/Images/1 (1).jpg'


const Banner = () => {
    return (
        <div>
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

export default Banner;