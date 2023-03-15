import { FaStar } from 'react-icons/fa';
import './Rating.scss';

const Rating = ({ rating }) => {

    return (
        <span className='rating'>
            <b>IMDb:</b>
            <FaStar />
            <span>{rating}</span>
        </span>
    );
};

export default Rating;
