import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOpstion = ({opstion}) => {
    const {name, features, price} = opstion;
    return (
        <div className='bg-blue-500 rounded-2xl p-4 text-white flex flex-col'>
           <h2 className='text-center'>
           <span className='text-7xl font-bold'>{price}</span>
            <span className='text-2xl'>/mon</span>
           </h2>
            <h2 className='text-3xl text-center mt-8 '>{name}</h2>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-400 w-full rounded-lg py-2 font-bold hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

PriceOpstion.propTypes = {
    opstion: PropTypes.object
}

export default PriceOpstion;