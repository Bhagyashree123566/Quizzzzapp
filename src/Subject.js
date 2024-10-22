import React, { useState } from 'react';
import Question from './Question';

export function Java() {
    const javaQuestions = [
        {
            qno: 'Q.1-)',
            quest: 'Memory occupied by char variable is ?',
            optA: '1 byte',
            optB: '8 byte',
            optC: '2 byte',
            optD: '4 byte',
            corrans: 'C'
        },
        {
            qno: 'Q.2-)',
            quest: 'Memory occupied by int variable is ?',
            optA: '1 byte',
            optB: '8 byte',
            optC: '2 byte',
            optD: '4 byte',
            corrans: 'D'
        },
        {
            qno: 'Q.3-)',
            quest: 'Which of these is not a primitive data type?',
            optA: 'int',
            optB: 'Float',
            optC: 'boolean',
            optD: 'char',
            corrans: 'B'
        },
        {
            qno: 'Q.4-)',
            quest: 'Which method can be used to find the length of a string in Java?',
            optA: 'getSize()',
            optB: 'length()',
            optC: 'getLength()',
            optD: 'size()',
            corrans: 'B'
        },
        {
            qno: 'Q.5-)',
            quest: 'Which keyword is used to create a subclass in Java?',
            optA: 'super',
            optB: 'this',
            optC: 'extends',
            optD: 'class',
            corrans: 'C'
        }
    ];
    
    const [answers, setAnswers] = useState({});
  const [showQuestions, setShowQuestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNum]: selectedOption
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1 className="title">Java Content</h1>
      <button className="button" type='button' onClick={() => setShowQuestions(true)}>
        Show Java Questions
      </button>
      {showQuestions && (
        <form onSubmit={handleSubmit}>
          {javaQuestions.map((q, index) => (
            <Question
              key={index}
              qno={q.qno}
              quest={q.quest}
              optA={q.optA}
              optB={q.optB}
              optC={q.optC}
              optD={q.optD}
              onChange={handleOnChange}
            />
          ))}
          <br /><br />
          <button className="button button-submit" type='submit'>Submit Question</button>
        </form>
      )}
      {submitted && (
        <div>
          <h2>Your Answers:</h2>
          {javaQuestions.map((q, index) => (
            <div key={index}>
              <p>{q.qno} {q.quest}</p>
              <p>Your answer: {answers[q.qno] || 'Not answered'}</p>
              <p>Correct answer: {q.corrans}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export function Sql() {
    const sqlQuestions = [
        {
            qno: 'Q.1-)',
            quest: 'Which SQL statement is used to extract data from a database?',
            optA: 'GET',
            optB: 'OPEN',
            optC: 'SELECT',
            optD: 'EXTRACT',
            corrans: 'C'
        },
        {
            qno: 'Q.2-)',
            quest: 'Which SQL statement is used to update data in a database?',
            optA: 'MODIFY',
            optB: 'UPDATE',
            optC: 'SAVE',
            optD: 'ALTER',
            corrans: 'B'
        },
        {
            qno: 'Q.3-)',
            quest: 'Which function is used to count the number of rows in a SQL query?',
            optA: 'COUNT()',
            optB: 'SUM()',
            optC: 'NUMBER()',
            optD: 'TOTAL()',
            corrans: 'A'
        },
        {
            qno: 'Q.4-)',
            quest: 'Which SQL clause is used to filter records?',
            optA: 'GROUP BY',
            optB: 'ORDER BY',
            optC: 'WHERE',
            optD: 'HAVING',
            corrans: 'C'
        },
        {
            qno: 'Q.5-)',
            quest: 'Which command is used to delete a table from a database?',
            optA: 'REMOVE TABLE',
            optB: 'DROP TABLE',
            optC: 'DELETE TABLE',
            optD: 'CLEAR TABLE',
            corrans: 'B'
        }
    ];

    
    const [answers, setAnswers] = useState({});
    const [showQuestions, setShowQuestions] = useState(false);
    const [submitted, setSubmitted] = useState(false);
  
    const handleOnChange = (questionNum, selectedOption) => {
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionNum]: selectedOption
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
    };
  
    return (
      <div className="container">
        <h1 className="title">Sql Content</h1>
        <button className="button" type='button' onClick={() => setShowQuestions(true)}>
          Show SQL Questions
        </button>
        {showQuestions && (
          <form onSubmit={handleSubmit}>
            {sqlQuestions.map((q, index) => (
              <Question
                key={index}
                qno={q.qno}
                quest={q.quest}
                optA={q.optA}
                optB={q.optB}
                optC={q.optC}
                optD={q.optD}
                onChange={handleOnChange}
              />
            ))}
            <br /><br />
            <button className="button button-submit" type='submit'>Submit Question</button>
          </form>
        )}
        {submitted && (
          <div>
            <h2>Your Answers:</h2>
            {sqlQuestions.map((q, index) => (
              <div key={index}>
                <p>{q.qno} {q.quest}</p>
                <p>Your answer: {answers[q.qno] || 'Not answered'}</p>
                <p>Correct answer: {q.corrans}</p>
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

export function Html() {
    const htmlQuestions = [
        {
            qno: 'Q.1-)',
            quest: 'What does HTML stand for?',
            optA: 'Hyper Text Markup Language',
            optB: 'Hyperlinks and Text Markup Language',
            optC: 'Home Tool Markup Language',
            optD: 'Hyperlinking Text Management Language',
            corrans: 'A'
        },
        {
            qno: 'Q.2-)',
            quest: 'Who is making the Web standards?',
            optA: 'Mozilla',
            optB: 'Microsoft',
            optC: 'Google',
            optD: 'The World Wide Web Consortium',
            corrans: 'D'
        },
        {
            qno: 'Q.3-)',
            quest: 'Choose the correct HTML element for the largest heading:',
            optA: '<h1>',
            optB: '<heading>',
            optC: '<h6>',
            optD: '<head>',
            corrans: 'A'
        },
        {
            qno: 'Q.4-)',
            quest: 'What is the correct HTML element for inserting a line break?',
            optA: '<br>',
            optB: '<lb>',
            optC: '<break>',
            optD: '<ln>',
            corrans: 'A'
        },
        {
            qno: 'Q.5-)',
            quest: 'Which character is used to indicate an end tag?',
            optA: '*',
            optB: '/',
            optC: '!',
            optD: '\\',
            corrans: 'B'
        }
    ];

    
  const [answers, setAnswers] = useState({});
  const [showQuestions, setShowQuestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNum]: selectedOption
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1 className="title">Html Content</h1>
      <button className="button" type='button' onClick={() => setShowQuestions(true)}>
        Show HTML Questions
      </button>
      {showQuestions && (
        <form onSubmit={handleSubmit}>
          {htmlQuestions.map((q, index) => (
            <Question
              key={index}
              qno={q.qno}
              quest={q.quest}
              optA={q.optA}
              optB={q.optB}
              optC={q.optC}
              optD={q.optD}
              onChange={handleOnChange}
            />
          ))}
          <br /><br />
          <button className="button button-submit" type='submit'>Submit Question</button>
        </form>
      )}
      {submitted && (
        <div>
          <h2>Your Answers:</h2>
          {htmlQuestions.map((q, index) => (
            <div key={index}>
              <p>{q.qno} {q.quest}</p>
              <p>Your answer: {answers[q.qno] || 'Not answered'}</p>
              <p>Correct answer: {q.corrans}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


