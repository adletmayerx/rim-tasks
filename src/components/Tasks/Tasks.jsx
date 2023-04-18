import React from "react";
import Task from "../Task/Task";
import TaskWithSlider from "../TaskWithSlider/TaskWithSlider";
import style from "./Tasks.module.css";

const Tasks = () => {
    return (
        <div className={style.tasks}>
            <h4 className={style.tasks__title}>Полученные</h4>
            <ul className={style.tasks__list}>
                <li className={style.tasks__item}>
                    <Task count={0} type="due" />
                </li>
                <li className={style.tasks__item}>
                    <Task count={0} type="today" />
                </li>
                <li className={style.tasks__item}>
                    <TaskWithSlider count={0} />
                </li>
            </ul>
        </div>
    );
};

export default Tasks;
