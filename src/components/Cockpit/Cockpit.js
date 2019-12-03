import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  //useEffect called for all render cycle   (for Functional Component)
  //combined of componentDidMount/ componentDidUpdate
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
  }, []); //reruns if array changes. if empty arroy, only run once

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
      <h1>{props.title}</h1>
      <p className={assignedclasses.join(" ")}>This is Really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
