import React,{useState} from 'react';
import copy from 'copy-to-clipboard';

function Jockgenerator() {

  const [jock, setJock] = useState() //to store jock from the array
  const [index, setIndex] = useState(0) //to change the array index

  //array of jocks
  const jockArray = ["Why don't skeletons fight each other? Because they don't have the guts!",
    "What did one plate say to the other plate? Lunch is on me!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't eggs tell jokes? Because they might crack up!"
  ]
    
  //jock generator fuction
  const getJock = ()=>{
    setJock(jockArray[index]);
    setIndex(index+1);
    if(index === 4){
        setIndex(0);
    }

  }

  //using npm package => npm i --save styled-components copy-to-clipboard
  const handlecopyJock = ()=>{
    let cj = document.getElementById('copyjock').value;
    copy(cj);
    alert(`You have copied "${cj}"`);
  
  }

  return (
    <div>
      <h1>Click the button to get a joke!</h1> <br/>
      <input id="copyjock" style={{padding: '20px', width: '800px', fontSize: '25px', textAlign: 'center'}} type='text' value={jock} readOnly /> <br/>
      <button onClick={getJock}>Get Joke</button>
      <button onClick={handlecopyJock}>Copy Joke</button>
    </div>
  );
}

export default Jockgenerator;
