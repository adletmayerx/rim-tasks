import clsx from "clsx";
import styles from "./TableWithSlider.module.css";
import Slider from "../Slider/Slider";
import { useState } from "react";

const TableWithSlider = () => {
  const usersGroupArray = [
    [
      {
        id: 1,
        name: "ЗГД 1",
        tasks: [
          { companyId: "gaz", quantity: 1 },
          { companyId: "fds", quantity: 3 },
          { companyId: "judge", quantity: 1 },
          { companyId: "gen-dir", quantity: 2 },
        ],
      },
      {
        id: 2,
        name: "ЗГД 2",
        tasks: [
          { companyId: "gaz", quantity: 4 },
          { companyId: "gen-dir", quantity: 1 },
        ],
      },
    ],
    [
      {
        id: 3,
        name: "ЗГД 4",
        tasks: [
          { companyId: "gaz", quantity: 7 },
          { companyId: "gen-dir", quantity: 4 },
        ],
      },

      {
        id: 4,
        name: "ЗГД 5",
        tasks: [
          { companyId: "gaz", quantity: 9 },
          { companyId: "gen-dir", quantity: 6 },
        ],
      },
      {
        id: 5,
        name: "ЗГД 7",
        tasks: [
          { companyId: "gaz", quantity: 1 },
          { companyId: "judge", quantity: 2 },
        ],
      },
    ],
    [
      {
        id: 6,
        name: "ЗГД 8",
        tasks: [{ companyId: "gaz", quantity: 2 }],
      },

      {
        id: 7,
        name: "ГБ",
        tasks: [{ companyId: "fns", quantity: 1 }],
      },
    ],
  ];
  const companies = [
    { id: "gaz", name: "ПАО Газпром" },
    { id: "fds", name: "ФДС" },
    { id: "fns", name: "ФНС" },
    { id: "heads-subj", name: "Главы субъектов" },
    { id: "judge", name: "Судебные органы" },
    { id: "gen-dir", name: "Особый контроль генерального директора" },
  ];
  const buttons = [{ name: "Отделы, службы" }, { name: "ГИ, ЗГД, ГБ" }, { name: "ЛПУМГ" }];

  const [usersState, setUsersState] = useState(0);
  const users = usersGroupArray[usersState];
  let totalTasksQuantity = 0;

  for (let user of users) {
    let totalUserTasksQuantity = 0;

    for (let task of user.tasks) {
      const company = companies.find((company) => company.id === task.companyId);

      if (company.tasksQuantity) {
        company.tasksQuantity += task.quantity;
      } else {
        company.tasksQuantity = task.quantity;
      }

      totalUserTasksQuantity += task.quantity;
    }

    user.totalTasksQuantity = totalUserTasksQuantity;
    totalTasksQuantity += totalUserTasksQuantity;
  }

  return (
    <div className={styles["container"]}>
      <table className={styles.table}>
        <colgroup>
          <col className={styles.table__column_m} />
          <col className={styles.table__column_sm} />
          <col className={styles.table__column_sm} />
          {companies.map((company) => {
            return <col className={styles.table__column_l} key={company.id}></col>;
          })}
        </colgroup>
        <thead className={styles["table-head"]}>
          <tr className={styles["table-head__row"]}>
            <th className={styles["table-heading"]} scope="col"></th>
            <th className={styles["table-heading"]} scope="col"></th>
            <th className={styles["table-heading"]} scope="col"></th>
            {companies.map((company) => {
              return (
                <th className={styles["table-heading"]} scope="col" key={company.id}>
                  {company.name}
                </th>
              );
            })}
          </tr>
          <tr className={styles["table-head__row"]}>
            <th className={styles["table-cell"]}></th>
            <th
              className={clsx(
                styles["table-cell"],
                totalTasksQuantity === 0 || !totalTasksQuantity
                  ? styles.green
                  : totalTasksQuantity <= 3
                  ? styles.yellow
                  : totalTasksQuantity <= 6
                  ? styles.pink
                  : styles.red
              )}
            >
              {totalTasksQuantity}
            </th>
            <th className={styles["table-cell"]}></th>
            {companies.map((company) => {
              return (
                <th
                  className={clsx(
                    styles["table-cell"],
                    company.tasksQuantity === 0 || !company.tasksQuantity
                      ? styles.green
                      : company.tasksQuantity <= 3
                      ? styles.yellow
                      : company.tasksQuantity <= 6
                      ? styles.pink
                      : styles.red
                  )}
                  key={company.id}
                >
                  {company.tasksQuantity}
                </th>
              );
            })}
          </tr>
          <tr className={styles["table-head__row"]}>
            <th className={styles["table-heading"]} scope="col"></th>
            <th className={styles["table-heading"]} scope="col"></th>
            <th className={styles["table-heading"]} scope="col"></th>
            {companies.map((company) => {
              return <td className={styles["table-cell"]} scope="col" key={company.id}></td>;
            })}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id} className={styles["table-body__row"]}>
                <th scope="row" className={clsx(styles["table-heading"])}>
                  {user.name}
                </th>
                <th
                  scope="row"
                  className={clsx(
                    styles["table-heading"],
                    user.totalTasksQuantity === 0 || !user.totalTasksQuantity
                      ? styles.green
                      : user.totalTasksQuantity <= 3
                      ? styles.yellow
                      : user.totalTasksQuantity <= 6
                      ? styles.pink
                      : styles.red
                  )}
                >
                  {user.totalTasksQuantity}
                </th>
                <td className={styles["table-cell"]}></td>
                {companies.map((company) => {
                  const userTaskInCompanyQuantity = user.tasks.find((task) => task.companyId === company.id)?.quantity;

                  return (
                    <td
                      className={clsx(
                        styles["table-cell"],
                        userTaskInCompanyQuantity === 0 || !userTaskInCompanyQuantity
                          ? styles.green
                          : userTaskInCompanyQuantity <= 3
                          ? styles.yellow
                          : userTaskInCompanyQuantity <= 6
                          ? styles.pink
                          : styles.red
                      )}
                      key={company.id}
                    >
                      {userTaskInCompanyQuantity}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Slider buttons={buttons} className={styles.slider} state={usersState} setState={setUsersState} limit={usersGroupArray.length - 1} />
    </div>
  );
};

export default TableWithSlider;
