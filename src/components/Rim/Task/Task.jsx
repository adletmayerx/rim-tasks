import React from "react";
import style from "./Task.module.css";
import clsx from "clsx";

const Task = ({ type = "future", count = 0 }) => {
    return (
        <div className={style.task}>
            <h3 className={style.task__title}>Срок истек</h3>
            <div
                className={clsx(
                    style.task__content,
                    type === "due" ? style.red : undefined,
                    type === "today" ? style.yellow : undefined,
                    type === "future" ? style.green : undefined
                )}
            >
                <span className={style["task__task-count"]}>{count}</span>
            </div>
        </div>
    );
};

export default Task;
