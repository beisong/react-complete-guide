import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    //INLINE STYLE; Scope to element only
    const buttonStyle = {
      backgroundColor : 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;
    if (this.state.showPerson){
      persons=(
        <div>
          {
            this.state.persons.map((person,index)=>{
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  click = {()=> this.deletePersonHandler(index)}
                  changed = {(event)=>this.nameChangeHandler(event, person.id)}
                />
              )
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is Really working</p>
          <button
            style={buttonStyle}
            // onClick={this.switchNameHandler.bind(this, 'Max Switch')}
            onClick={this.togglePersonHandler}>
            Switch Name
          </button>
          {persons}
      </div>
    );
    //   return React.createElement('div',{className:'App'},React.createElement('h1', null, 'h1 Text '))
  }
}

export default App;
