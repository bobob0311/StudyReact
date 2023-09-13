import React from "react"
import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

export default function ExpenseList(items) {
    if (items.items.length === 0) {
        return <h2 className='expenses-list__fallback' >Found no expenses</h2>;
    }
    return (
        <ul className="expenses-list">
            {

                items.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />)
                )}
        </ul>
    )

}