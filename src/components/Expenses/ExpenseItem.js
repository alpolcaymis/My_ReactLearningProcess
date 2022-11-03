import React, { useState } from "react";

import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../UI/Card.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const eventHandler = () => {
    setTitle("harran");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={eventHandler}>Title Changer</button>
    </Card>
  );
};

export default ExpenseItem;
