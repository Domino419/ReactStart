// import styles from './CSSModule.module.scss';
import styles from "./CSSModule.module.scss";

const CssModule = () => {
        console.log(':::::::::::::::::::::CssModule :', {styles})
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something"> CSS Module ! </span>
        </div>
    );
};

export default CssModule;