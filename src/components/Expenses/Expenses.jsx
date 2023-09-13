import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpenseChart";


export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');


    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        if (selectedYear === '2019') {
            setFilterInfoText()
        }
    };

    const filterdExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filterdExpenses} />
            <ExpenseList items={filterdExpenses} />





            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    )
}