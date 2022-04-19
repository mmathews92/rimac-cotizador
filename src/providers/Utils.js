export const eventHandler = (setStateCallback) => (value) => { setStateCallback(value); };

export const getCurrentYear = () => new Date().getFullYear();

export const getTotalMonthPrice = (policyCoveragesList, basePrice) => {
    const additionalCost = policyCoveragesList.reduce(
        (prevValue, currentValue) => (prevValue + currentValue.price),
        0,
    );
    return basePrice + additionalCost;
};

export default {
    eventHandler,
    getCurrentYear,
    getTotalMonthPrice,
};
