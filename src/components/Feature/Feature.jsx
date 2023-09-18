import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Feature = ({feature}) => {
    return (
        <div className=''>
           
            <p className='flex items-center gap-2'> <BsFillCheckCircleFill className='text-green-400'></BsFillCheckCircleFill> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;