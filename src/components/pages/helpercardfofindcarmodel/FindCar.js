/* styles */
import './FindCar.scss';
import iconCar from '../../../assets/icon_car.svg';

const HelpCardToFindCarModel = () => (
    <section className="help-card help-card--position help-card--background mb-3">
        <h5 className="help-card__title title--font text-uppercase d-none d-lg-block border-bottom pb-3">ayuda</h5>
        <div className="help-card__message d-flex flex-lg-row-reverse align-items-center">
            <figure className="mx-1 mb-0">
                <img src={iconCar} alt="ícono de un carro" />
            </figure>
            <p className="mx-1 mb-0">
                ¿No encuentras el modelo?
                <br />
                <span className="help-card__link cursor--pointer title--font">CLIC AQUÍ</span>
            </p>
        </div>
    </section>
);

export default HelpCardToFindCarModel;
