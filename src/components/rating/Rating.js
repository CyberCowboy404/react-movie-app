import { FaStar } from 'react-icons/fa';
import './Rating.scss';

const Rating = ({ rating }) => {
    
    return (
        <span className='rating'>
            <b>IMDb:</b> <FaStar /> {rating}
        </span>
    );
};

export default Rating;
