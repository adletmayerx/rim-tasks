import React from "react";
import styles from "./Slider.module.css";
import clsx from "clsx";

const Slider = ({ buttons, setState, className }) => {
  const handlePrevClick = () => {
    setState((prevState) => prevState - 1);
  };
  const handleNextClick = () => {
    setState((prevState) => prevState - 1);
  };

  return (
    <div className={clsx(styles.slider, className)}>
      <button onClick={handlePrevClick} className={clsx(styles.button, styles["button-prev"])}></button>
      {buttons.map((button) => {
        return (
          <button className={clsx(styles.button, styles["button-round"])}>
            <span className={styles.button__span}>{button.name}</span>
          </button>
        );
      })}
      <button onClick={handleNextClick} className={clsx(styles.button, styles["button-next"])}></button>
    </div>
  );
};

export default Slider;
