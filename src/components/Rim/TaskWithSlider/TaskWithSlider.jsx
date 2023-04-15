import React from "react";
import Task from "../Task/Task";
import styles from "./TaskWithSlider.module.css";
import clsx from "clsx";

const TaskWithSlider = (count) => {
    return (
        <div className={styles["task-slider"]}>
            <Task type="future" count={0} />
            <div className={styles.slider}>
                <button className={clsx(styles.button, styles["button-prev"])}></button>
                <button className={clsx(styles.button, styles["button-round"])}></button>
                <button className={clsx(styles.button, styles["button-round"])}></button>
                <button className={clsx(styles.button, styles["button-round"])}></button>
                <button className={clsx(styles.button, styles["button-next"])}></button>
            </div>
        </div>
    );
};

export default TaskWithSlider;
