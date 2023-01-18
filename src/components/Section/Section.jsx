import propTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
export default Section;
