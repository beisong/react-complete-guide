import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons:[
      {id:'1',name:'Max', age:24},
      {id:'2',name:'Manu', age:27},
      {id:'3',name:'Steph', age:29}
    ],
    otherState:'some other value',
    showPerson:false
  };

  deletePersonHandler =(personIndex)=>{
    // const persons = this.state.persons.slice();   // Slice create a copy so original state not affected
    const persons = [...this.state.persons];         // equil of slice ; CREATE A COPY
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  };

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  };

  nameChangeHandler = (event ,personid) =>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===personid;
    });

    const person = {...this.state.persons[personIndex]};  //Create a new object instead of referencing original object

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
          <Persons
            persons ={this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />
      );
    }


    return (
        <div className={classes.App}>
          <Cockpit
            showPerson = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler}
          >
          </Cockpit>
          {persons}
        </div>
    );
  }
}


export default App;
