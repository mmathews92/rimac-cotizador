import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
/* styles */
import './MakeYourPlan.scss';
/* components */
import GoBackLink from '../backbutton/BackButton';
import CarModelCard from '../carmodelcard/CarModelCar';
import Tabs from '../tabs/Tabs';
import PolicyCoverageItem from '../policycoverageitem/PolicyCoverageItem';
/* data */
import policyCoverages from '../../../providers/Constants';
import PolicyPrice from '../policyprice/PolicyPrice';
import { getTotalMonthPrice } from '../../../providers/Utils';

const MakeYourPlan = ({ yearOfCar, modelOfCar, plateOfCar }) => {
    const { pathname } = useLocation();
    const categories = [
        { pathname: `${pathname}`, name: 'Protege a tu auto' },
        { pathname: `${pathname}`, name: 'Protege a los que te rodean' },
        { pathname: `${pathname}`, name: 'mejora tu plan' },
    ];
    const baseMonthPrice = 20;
    const [currentCategory, setCurrentCategory] = useState(categories[0].name);
    const [policyCoveragesAdded, setPolicyCoveragesAdded] = useState([]);

    const addPolicyCoverage = (policyCoverage, operation) => {
        let newPolicyCoveragesAddedList = [];
        if (policyCoveragesAdded.length === 0) {
            newPolicyCoveragesAddedList.push(policyCoverage);
        } else if (operation === 'ADD') {
            newPolicyCoveragesAddedList = [...policyCoveragesAdded, policyCoverage];
        } else if (operation === 'DELETE') {
            newPolicyCoveragesAddedList = policyCoveragesAdded.filter(
                (item) => item.id !== policyCoverage.id,
            );
        }
        setPolicyCoveragesAdded(newPolicyCoveragesAddedList);
    };

    const handleClickTabs = (tabName) => {
        setCurrentCategory(tabName);
    };

    return (
        <div className="cardata">
            <div className="cardata__button--back">
                <GoBackLink />
            </div>
            <div className="d-lg-flex">
                <div className="col-lg-6">
                    <div className="policy-coverages__section policy-coverages__section--background container-fluid pt-4">
                        <section>
                            <h2 className="h1 title--color my-2">Mira las coberturas</h2>
                            <p className="pb-4 mb-2">Conoce las coberturas para tu plan</p>
                            <div className="row">
                                <div className="col">
                                    <CarModelCard plate={plateOfCar} model={modelOfCar} year={yearOfCar} />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="policy-coverages__section container-fluid">
                        <section>
                            <h4 className="title--color my-2">Agrega o quita coberturas</h4>
                            <p className="pb-4 mb-2">Conoce las coberturas para tu plan</p>
                            <div className="row">
                                <div className="col">
                                    <Tabs
                                        items={categories}
                                        currentTab={currentCategory}
                                        onClick={handleClickTabs}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {policyCoverages
                                        .filter((item) => item.type === currentCategory)
                                        .map((item) => (
                                            <PolicyCoverageItem
                                                key={item.id}
                                                item={item}
                                                onChange={addPolicyCoverage}
                                            />
                                        ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="fixed-bottom col-lg-4 offset-lg-1 policy-coverages__section-boxprice--position">
                    <PolicyPrice
                        total={getTotalMonthPrice(policyCoveragesAdded, baseMonthPrice)}
                    />
                </div>
            </div>
        </div>
    );
};

export default MakeYourPlan;

MakeYourPlan.propTypes = {
    yearOfCar: PropTypes.number.isRequired,
    modelOfCar: PropTypes.string.isRequired,
    plateOfCar: PropTypes.string.isRequired,
};
