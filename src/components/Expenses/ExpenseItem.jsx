import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
    const [titles, setTitles] = useState(title);


    const ClickHandler = () => {
        setTitles('Updated!')
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{titles}</h2>
                    <div className="expense-item__price" >${amount}</div>
                </div>
            </Card>
        </li>

    );
}