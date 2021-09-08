import React from 'react';
import Accordion from './Components/Accordion';
import './styles/app.css';
import questions from './questions';

const App = () => {

  return (
    <div className='app'>
      <Accordion items={questions} title='Questions about product orders'/>
    </div>
  )
}
export default App;
