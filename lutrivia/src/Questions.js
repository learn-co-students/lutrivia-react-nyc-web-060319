import React, {Component} from 'react';

class Questions extends Component {
  render(){
      const questions = this.props.questions.map(question => {
        return <Question
          key={question.text}
          text={question.text}
          answer={question.answer} />
      })

    return (
    <div>
        {questions}
    </div>
  );
}}

export default Questions;
