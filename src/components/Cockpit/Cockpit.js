import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedclasses = []; // join to "red bold"

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedclasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedclasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a react app</h1>
      <p className={assignedclasses.join(" ")}>This is Really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
