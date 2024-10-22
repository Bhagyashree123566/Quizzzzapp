import React from 'react';

export default function Question(props) {
  return (
    <>
      <h1>{props.qno} {props.quest}</h1>
      <input 
        type='radio' 
        name={props.qno} 
        value='A' 
        onChange={(e) => props.onChange(props.qno, e.target.value)} 
      />
      A. {props.optA}
      <br />
      <input 
        type='radio' 
        name={props.qno} 
        value='B' 
        onChange={(e) => props.onChange(props.qno, e.target.value)} 
      />
      B. {props.optB}
      <br />
      <input 
        type='radio' 
        name={props.qno} 
        value='C' 
        onChange={(e) => props.onChange(props.qno, e.target.value)} 
      />
      C. {props.optC}
      <br />
      <input 
        type='radio' 
        name={props.qno} 
        value='D' 
        onChange={(e) => props.onChange(props.qno, e.target.value)} 
      />
      D. {props.optD}
      <br />
    </>
  );
}
