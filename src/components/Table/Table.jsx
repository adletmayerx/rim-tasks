import styles from "./Table.module.css";

const Table = () => {
    const users = [
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
    ];

    const companies = [
        { id: "gaz", name: "ПАО Газпром" },
        { id: "fds", name: "ФДС" },
        { id: "fns", name: "ФНС" },
        { id: "heads-subj", name: "Главы субьектов" },
    ];

    return (
        <div>
            <table></table>

            <table></table>
        </div>
    );
};

export default Table;
