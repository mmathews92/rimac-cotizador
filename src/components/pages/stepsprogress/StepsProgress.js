import PropTypes from 'prop-types';
import './StepsProgress.scss';

const StepsProgress = ({ steps, currentStep }) => {
    const percentage = currentStep === 0 ? currentStep : ((currentStep / steps) * 100);
    return (
        <div className="stepsprogress-container container-fluid d-lg-none py-3">
            <label className="stepsprogress-container__label--margin" htmlFor="file">
                Paso
                {' '}
                {currentStep}
                {' '}
                de
                {' '}
                {steps}
            </label>

            <div className="d-inline-block stepsprogress-container__bar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" aria-label="progres bar" />
                </div>
            </div>
        </div>
    );
};

export default StepsProgress;

StepsProgress.defaultProps = {
    steps: 1,
    currentStep: 0,
};

StepsProgress.propTypes = {
    steps: PropTypes.number,
    currentStep: PropTypes.number,
};
