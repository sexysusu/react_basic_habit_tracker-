import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  
  // handleIncrement = (habit) => {
  //   this.props.onIncrement(habit);
  //   console.log('habit :>> ', habit);
  // };

  // handleDecrement = (habit) => {
  //   this.props.onDecrement(habit); 
  // };

  // handleDelete = (habit) => {
  //   this.props.onDelete(habit);
  // };


  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit 
              key={habit.id} 
              habit={habit} 
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete} 
            />
          ))}  
        </ul>
        <button className='habits-reset' onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;