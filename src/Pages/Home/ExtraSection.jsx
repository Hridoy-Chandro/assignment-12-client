import SectionTitle from '../../Components/SectionTitle';
import img from '../../assets/Images/img.jpg';

const ExtraSection = () => {
    return (
        <div>
            <SectionTitle heading="meet our team">

            </SectionTitle>
            <div className="flex my-20">
                <div className="w-1/2">
                    <h1 className="text-5xl text-center pb-5 font-semibold my-5">Communication</h1>
                    <p>

                        Employee management is a multifaceted process crucial for organizational success. It encompasses various key elements, starting with strategic recruitment and seamless onboarding to integrate new hires. Ongoing performance management involves setting clear expectations, providing constructive feedback, and recognizing achievements. Communication plays a pivotal role, fostering transparency and engagement, while continuous employee development ensures a skilled and adaptable workforce.
                        Employee management is a multifaceted process crucial for organizational success. It encompasses various key elements, starting with strategic recruitment and seamless onboarding to integrate new hires. Ongoing performance management involves setting clear expectations, providing constructive feedback, and recognizing achievements. Communication plays a pivotal role, fostering transparency and engagement, while continuous employee development ensures a skilled and adaptable workforce.
                    </p>
                </div>
                <div className="w-1/2">
                    <img className='rounded-2xl ' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;