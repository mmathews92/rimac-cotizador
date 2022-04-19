import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
/* styles */
import './CarForm.scss';
/* controllers */
import { getCurrentYear } from '../../../providers/Utils';
/* Components */
import Button from '../../common/button/Button';
import Select from '../../common/select/Select';
import InputField from '../../common/input/Input';
import HelpCardToFindCarModel from '../../pages/helpercardfofindcarmodel/FindCar';
import GoBackLink from '../../pages/backbutton/BackButton';

const buildYearsList = (currentYear) => {
    const optionsList = [];
    for (let index = 1990; index <= currentYear; index += 1) {
        const element = <option key={index} value={index}>{index}</option>;
        optionsList.push(element);
    }
    return optionsList;
};

const carModelsList = ['Audi', 'BMW', 'Ford', 'Mercedes-Benz', 'Nissan', 'Renault', 'Toyota', 'Wolkswagen'];

const CarForm = ({
    yearOfCar,
    setYearOfCar,
    modelOfCar,
    setmodelOfCar,
    clientName,
}) => {
    const currentYear = getCurrentYear();
    const yearsList = buildYearsList(currentYear);
    const minSumInsured = 12500;
    const maxSumInsured = 16500;
    const history = useNavigate();
    const [totalSumInsured, setTotalSumInsured] = useState(14300);

    const decreaseOrIncrementBy100 = (min, max, currentNumber) => (operation) => {
        if (operation === 'INCREMENT' && currentNumber < max) {
            setTotalSumInsured(currentNumber + 100);
        } else if (operation === 'DECREASE' && currentNumber > min) {
            setTotalSumInsured(currentNumber - 100);
        }
    };

    const changeTotalSumInsured = decreaseOrIncrementBy100(
        minSumInsured, maxSumInsured, totalSumInsured,
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        history('/cotizar/plan');
    };

    return (
        <div className="cardata">
            <div className="cardata__button--back">
                <GoBackLink />
            </div>
            <form
                className="form cardata__form--width container-fluid pt-4 m-0"
                onSubmit={handleSubmit}
            >
                <h2 className="h1 title--color my-2">
                    ¡Hola, <span className="title__text--highlighted"> {clientName}!</span>
                </h2>
                <p className="pb-4 mb-2">Completa los datos de tu auto</p>
                <div className="row">
                    <div className="col position-relative">
                        <div className="mb-3">
                            <Select
                                id="year"
                                label="Año"
                                value={yearOfCar}
                                onChange={(event) => setYearOfCar(event.target.value)}
                            >
                                {yearsList}
                            </Select>
                        </div>
                        <div className="mb-3">
                            <Select
                                id="document-type"
                                label="Marca"
                                value={modelOfCar}
                                onChange={(event) => setmodelOfCar(event.target.value)}
                            >
                                {carModelsList.map((model) => (<option key={model} value={model}>{model}</option>))}
                            </Select>
                        </div>
                        <div className="cardata__radio--margin d-lg-flex justify-content-lg-between mb-4">
                            <p className="title-font title--color my-2">¿Tu auto es a gas?</p>
                            <div className="my-2">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gas-car"
                                        id="gas-car-yes"
                                    />
                                    <label className="form-check-label form-check-label--color" htmlFor="gas-car-yes">
                                        Sí
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gas-car"
                                        id="gas-car-no"
                                        defaultChecked
                                    />
                                    <label className="form-check-label form-check-label--color" htmlFor="gas-car-no">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <hr className="d-none d-lg-block" />

                        <HelpCardToFindCarModel />

                        <div className="d-lg-flex justify-content-lg-between mt-4">
                            <p className="title--font title--color my-2">
                                <label htmlFor="total-sum-insured">
                                    Indica la suma asegurada
                                    <br />
                                    <span className="price-range__label paragraph--color d-flex justify-content-between mt-1">
                                        <span>
                                            MIN $
                                            {minSumInsured}
                                        </span>
                                        <span>
                                            MAX $
                                            {maxSumInsured}
                                        </span>
                                    </span>
                                </label>
                            </p>
                            <div className="price-range input-group pb-4 my-2">
                                <Button
                                    classes="price-range__button border-end-0 pe-0"
                                    type="button"
                                    color="outline-light"
                                    size="small"
                                    onClick={() => changeTotalSumInsured('DECREASE')}
                                >
                                    <span className="bi bi-dash-lg" />
                                </Button>
                                <InputField
                                    classes="price-range--background title--font title--color border-end-0 border-start-0 text-center"
                                    ariaLabel="Suma total asegurada"
                                    type="text"
                                    id="total-sum-insured"
                                    value={`$ ${totalSumInsured}`}
                                    floating={false}
                                    readOnly
                                />
                                <Button
                                    classes="price-range__button border-start-0 ps-0"
                                    type="button"
                                    color="outline-light"
                                    size="small"
                                    onClick={() => changeTotalSumInsured('INCREMENT')}
                                >
                                    <span className="bi bi-plus-lg" />
                                </Button>
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                color="primary"
                                classes="w-100"
                            >
                                <>CONTINUAR <span className="bi bi-chevron-right" /></>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CarForm;

CarForm.propTypes = {
    yearOfCar: PropTypes.number.isRequired,
    setYearOfCar: PropTypes.func.isRequired,
    modelOfCar: PropTypes.string.isRequired,
    setmodelOfCar: PropTypes.func.isRequired,
    clientName: PropTypes.string.isRequired,
};
