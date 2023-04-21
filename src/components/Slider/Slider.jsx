import React from "react";
import styles from "./Slider.module.css";
import clsx from "clsx";

const Slider = ({ buttons, state, setState, limit, className }) => {
  const handlePrevButtonClick = () => {
    setState((prevState) => (prevState > 0 ? prevState - 1 : limit));
  };
  const handleNextButtonClick = () => {
    setState((prevState) => (prevState < limit ? prevState + 1 : 0));
  };
  const handleButtonClick = (i) => {
    setState(i);
  };

  return (
    <div className={clsx(styles.slider, className)}>
      <div className={styles.slider__bg}></div>
      <button onClick={handlePrevButtonClick} className={clsx(styles.button, styles["button-prev"])}></button>
      {buttons.map((button, i) => {
        return (
          <div className={styles['button-container']}>
            <button
              key={i}
              className={clsx(styles.button, styles["button-round"], i === state && styles.active)}
              onClick={() => handleButtonClick(i)}
            ></button>
            <span className={styles.button__span}>{button.name}</span>
          </div>
        );
      })}
      <button onClick={handleNextButtonClick} className={clsx(styles.button, styles["button-next"])}></button>
    </div>
  );
};

export default Slider;
