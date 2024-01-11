

// eslint-disable-next-line react/prop-types
const ServiceItems = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { name, image, designation, responsibilities } = item;
    console.log(item);
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title font-bold">{name}</h1>
                    <h2 className="font-semibold">{designation}</h2>
                    <p>{responsibilities}</p>
                </div>
            </div>
          </div>
            );
};

            export default ServiceItems;