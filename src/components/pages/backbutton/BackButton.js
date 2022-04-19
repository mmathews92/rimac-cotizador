import { useNavigate } from 'react-router-dom';
import './BackButton.scss';
import IconCircle from '../../common/iconcircle/IconCircle';

const GoBackLink = () => {
    const navigate = useNavigate();
    const handleClickToGoBack = (event) => {
        event.preventDefault();
        navigate(-1);
    };
    return (
        <a href="/#" className="go-back-link text-decoration-none d-none d-lg-block" onClick={handleClickToGoBack}>
            <IconCircle color="primary-outline">
                <i className="bi bi-chevron-left" />
            </IconCircle>
            <span className="go-back-link__text ms-3 text-uppercase">volver</span>
        </a>
    );
};

export default GoBackLink;
