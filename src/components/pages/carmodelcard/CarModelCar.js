import PropTypes from 'prop-types';
import './CarModel.scss'
import imageCardMobile from '../../../assets/man-happy-mobile.svg';

const CarModelCard = ({ plate, model, year }) => (
    <div className="car-model-card d-flex position-relative">
        <div className="car-model-card__content">
            <p className="car-model-card__text--disabled">
                Placa:
                {' '}
                {plate}
            </p>
            <p
                className="car-model-card__title title-font title--color d-flex justify-content-between justify-content-lg-start"
            >
                <span className="me-1">
                    {model}
                    {' '}
                </span>
                <span className="ms-1">{year}</span>
            </p>
            <span className="car-model-card__btn cursor--pointer title--font text-uppercase">editar</span>
        </div>
        <figure className="car-model-card__figure position-absolute end-0 bottom-0 mb-0 pe-2">
            <img src={imageCardMobile} alt="hombre sonriente con casa de Rimac" />
        </figure>
    </div>
);

export default CarModelCard;

CarModelCard.propTypes = {
    plate: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
};
