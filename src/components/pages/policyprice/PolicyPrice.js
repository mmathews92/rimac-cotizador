import PropTypes from 'prop-types';
/* styles */
import './PolicyPrice.scss';
/* components */
import { useNavigate } from 'react-router-dom';
import Button from '../../common/button/Button';
import badgeImage from '../../../assets/badge-vehicular-flexible.png';

const PolicyPrice = ({ total }) => {
    const history = useNavigate ();

    const handleClick = (event) => {
        event.preventDefault();
        history('/finalizar');
    };

    return (
        <div className="policy-price container-fluid">
            <div className="d-flex flex-lg-column justify-content-between">
                <div className="align-self-end d-lg-flex full-width">
                    <div className="d-lg-flex flex-lg-column align-items-lg-center justify-content-lg-between">
                        <p className="h2 title-font title-color mb-1">
                            $
                            {total}
                            .00
                        </p>
                        <span className="policy-price__text--small text-uppercase d-lg-none">Mensual</span>
                        <span className="policy-price__text--small text-uppercase d-none d-lg-block">Mensuales</span>
                    </div>
                    <figure className="d-none d-lg-block mx-1 mb-0 ms-auto">
                        <img src={badgeImage} alt="Insignia vehicular flexible" />
                    </figure>
                </div>
                <hr className="d-none d-lg-block my-4" />
                <div className="align-self-end full-width">
                    <p className="d-none d-lg-block">El precio incluye:</p>
                    <ul className="list-unstyled d-none d-lg-block mb-4">
                        <li className="mb-2">
                            <i className="bi bi-check2 policy-price__list-icon me-3" />
                            <span>Llanta de respuesto</span>
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-check2 policy-price__list-icon me-3" />
                            <span>Analisis de motor</span>
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-check2 policy-price__list-icon me-3" />
                            <span>Aros gratis</span>
                        </li>
                    </ul>
                    <Button
                        classes="policy-price__button"
                        onClick={handleClick}
                    >
                        <>LO QUIERO</>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PolicyPrice;

PolicyPrice.propTypes = {
    total: PropTypes.number.isRequired,
};
