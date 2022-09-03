import { useEffect, useState } from 'react';
import './App.css';
import Question from './Question.json';
function App() {
  const [count,setCount]=useState(0)
  const [result,setResult]=useState(false)
  const [select,setSelect]=useState()
  const [opStyle,setOpStyle]=useState('')
  const [clicked,setSClicked]=useState(false)
  const [score,setScore]=useState(0)
  const [optionData,setOptionData]=useState(false)
  const [status,seStatus]=useState('')
  const [qtnCount,setQtnCount]=useState(1)
  
  const Continue=()=>{
    console.log(count,"count")
    console.log(clicked,"clickedclicked")
    if(clicked===true){
    if(count<Question.length-1){
      setCount(count+1)
      setOpStyle('')
      setSClicked(false)
      setQtnCount(qtnCount+1)
    }else{
      setResult(true)
    }
    if(optionData===true){
      setScore(score+1)
    }
  }
  }

  const handleClick=(index,optionVal)=>{
    setSelect(index)
    setOpStyle("selected")
    setSClicked(true)
    setOptionData(optionVal)
  }

  useEffect(()=>{
    if(score>2){
      seStatus("Pass")
    }else{
      seStatus('fail')
    }
  },[score])
  return (
    <div className="App">
      {result?<div>
        <h1>Total Mark: {score}</h1>
        <h3>--- {status} ---</h3>
      </div>
      :
      <div>
        {score}
        <h3>Q: {qtnCount}/{Question.length}</h3>
        <h1>{Question[count].qtn}</h1>
        <div>
          {
            Question[count].option.map((op,i)=><p key={i} className={select==i?opStyle:""} onClick={()=>handleClick(i,op.correct)}>{op.ans}</p>)
          }
        </div>
        <button onClick={Continue}>{qtnCount==4?"Finish":"Continue"}</button>
      </div>
    }
    </div>
  );
}

export default App;
