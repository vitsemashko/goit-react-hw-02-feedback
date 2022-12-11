import propTypes from "prop-types";
import css from "./Notification.module.css";
const Notification = ({ message }) => {
	return <span className={css.message}>{message}</span>;
};
Notification.propTypes = {
	message: propTypes.string.isRequired,
};
export default Notification;
