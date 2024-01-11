

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading}) => {
    return (
        <div className="md:w-4/12 my-10 mx-auto text-center">
            
            <h3 className="text-5xl mb-4 uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;