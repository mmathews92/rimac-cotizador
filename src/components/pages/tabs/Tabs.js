import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Tabs.scss';

const isActive = (current, item) => (
    item.name === current ? 'tabs-categories__tab--active' : 'tabs-categories__tab--disabled'
);

const Tabs = ({ items, currentTab, onClick }) => (
    <nav className="nav nav-pills nav-justified">
        {
            items.map((item) => (
                <Link
                    key={item.name}
                    onClick={() => onClick(item.name)}
                    className={`nav-link tabs-categories__tab tabs-categories__text text-uppercase ${isActive(currentTab, item)}`}
                    to={item.pathname}
                >
                    {item.name}
                </Link>
            ))
        }
    </nav>
);

export default Tabs;

Tabs.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    currentTab: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
