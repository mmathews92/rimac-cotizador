import PropTypes from 'prop-types';
import './IconCircle.scss';

const IconCircle = ({ children, color, classes }) => (
    <span className={
        `icon-circle icon-circle--${color} d-inline-flex justify-content-center align-items-center rounded-circle m-1 text-center p-1 ${classes}`
    }>
        {children}
    </span>
);

export default IconCircle;

IconCircle.defaultProps = {
    color: 'disabled',
    classes: null,
};

IconCircle.propTypes = {
    children: PropTypes.element.isRequired,
    color: PropTypes.string,
    classes: PropTypes.string,
};
