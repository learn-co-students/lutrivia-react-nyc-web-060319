import React from 'react';
import Header from './Header';
import Questions from './Questions';
import ScoreForm from './ScoreForm';
import data from './data'

function App() {
  return (
    <div>
      <Header />
      <Questions  questions = {data.questions}/>
      <ScoreForm />
    </div>
  );
}

export default App;
