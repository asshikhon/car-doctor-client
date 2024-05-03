import PropTypes from 'prop-types'
import { FaArrowRight } from "react-icons/fa6";
const ServiceCard = ({service}) => {

const {title, img, price} = service

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions mt-5 flex justify-center items-center">
        <p className='text-xl text-[#FF3811] font-bold'>Price : {price}</p>
        <FaArrowRight className='text-[#FF3811]' />
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes= {

    service: PropTypes.object
}

export default ServiceCard;
