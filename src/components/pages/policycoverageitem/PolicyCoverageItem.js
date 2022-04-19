import PropTypes from 'prop-types';
import './PolicyCoverageItem.scss';
import { useState } from 'react';

const PolicyCoverageItem = (
    {
        item,
        onChange,
    },
) => {
    const [showContent, setShowContent] = useState(false);
    const [itemIsAdded, setitemAdded] = useState(false);
    const { name, image, content } = item;

    const handleClickButton = () => {
        setShowContent(!showContent);
    };

    const handleChangeInput = (value) => {
        let operation = '';
        if (value) {
            operation = 'ADD';
        } else {
            operation = 'DELETE';
        }
        setitemAdded(value);
        onChange(item, operation);
    };

    return (
        <div className="policy-coverage-item d-flex">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="full-width ms-2 ps-2">
                <div className="full-width d-inline-flex justify-content-between mb-2">
                    <div className="title--font">
                        <p className="policy-coverage-item__title title--font title--color mb-1">
                            {name}
                        </p>
                        {!showContent && (
                            <span
                                role="presentation"
                                className="policy-coverage-item__btn policy-coverage-item__btn--down cursor--pointer text-uppercase"
                                onClick={handleClickButton}
                            >
                                <span className="d-lg-none">ver más</span>
                                <span className="d-lg-none ms-2">
                                    <i className="bi bi-chevron-down" />
                                </span>
                            </span>
                        )}
                        {!itemIsAdded && (
                            <span
                                role="presentation"
                                className="policy-coverage-item__btn policy-coverage-item__btn--down cursor--pointer text-uppercase"
                                onClick={() => handleChangeInput(true)}
                            >
                                <span className="icon d-none d-lg-inline me-2">
                                    <i className="bi bi-plus-circle" />
                                </span>
                                <span className="d-none d-lg-inline">agregar</span>
                            </span>
                        )}
                        {itemIsAdded && (
                            <span
                                role="presentation"
                                className="policy-coverage-item__btn policy-coverage-item__btn--down cursor--pointer text-uppercase"
                                onClick={() => handleChangeInput(false)}
                            >
                                <span className="icon d-none d-lg-inline me-2">
                                    <i className="bi bi-dash-circle" />
                                </span>
                                <span className="d-none d-lg-inline">quitar</span>
                            </span>
                        )}
                    </div>
                    <div className="d-lg-none form-check form-switch">
                        <input
                            className="form-check-input policy-coverage-item__input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            onChange={(event) => handleChangeInput(event.target.checked)}
                        />
                    </div>
                    <div className="d-none d-lg-block">
                        {!showContent && (
                            <span role="presentation" className="mx-2 cursor--pointer" onClick={handleClickButton}>
                                <i className="bi bi-chevron-down" />
                            </span>
                        )}
                        {showContent && (
                            <span role="presentation" className="mx-2 cursor--pointer" onClick={handleClickButton}>
                                <i className="bi bi-chevron-up" />
                            </span>
                        )}
                    </div>
                </div>
                {showContent && (
                    <div>
                        <p>
                            {content}
                        </p>
                        <span
                            role="presentation"
                            className="policy-coverage-item__btn policy-coverage-item__btn--up cursor--pointer d-lg-none text-uppercase"
                            onClick={handleClickButton}
                        >
                            ver menos
                            <span className="mx-2">
                                <i className="bi bi-chevron-up" />
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PolicyCoverageItem;

PolicyCoverageItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
};
