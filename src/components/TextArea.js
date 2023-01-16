import React from 'react'
import { useState } from 'react'

export default function TextArea(props) {
    const [text, setText]=useState("")
    //const[words, setWords]=useState(0);
    //const[char, setChar]=useState(0);

    function handleOnChange(event) {
        //console.log("Before "+text);
        var newtext=event.target.value;
        setText(newtext);
        //console.log("After "+text);
        //setWords(countWords());
        //setChar(countChar());
    }

    function setToUpper(){
        //console.log(text);
        var data=text.toUpperCase();
        setText(data)
    }

    function clearTextBox(){
        setText('');
        //setWords(0);
        //setChar(0);
    }

    var camelCase = () =>{
        var data= text.split(' ');
        console.log(data);
        for(var i=0;i<data.length;i++){
            data[i]=data[i].charAt(0).toUpperCase()+data[i].substring(1);
        }
        data=data.join(' ')
        setText(data);
    }

    var countWords = () =>{
        return text.split(' ').length;
    }

    var countChar = () =>{
        return text.length;
    }

    return (
        <>
            <div>
                <h5 style={{color:(props.mode=='dark'?'white':'black')}}>Enter your text for Anaysis</h5>
                <textarea className="form-control my-3" style={{backgroundColor:(props.mode==='dark'?'grey':'white'), color:(props.mode=='dark'?'white':'black')}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter your text'></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={setToUpper}>Upper Case</button>
            <button type="button" className="btn btn-primary mx-3" onClick={clearTextBox}>Clear All</button>
            <button type="button" className="btn btn-primary" onClick={camelCase}>Camel Case</button>

            <div className='container my-3'>
                <a style={{color:(props.mode=='dark'?'white':'black')}}>Number of words in your Box are: {text.split(' ').length}</a>
            </div>

            <div className='container my-3'>
                <a style={{color:(props.mode=='dark'?'white':'black')}}>Number of Characters in your Box are: {text.length}</a>
            </div>

            <div className='container my-3'>
                <a style={{color:(props.mode=='dark'?'white':'black')}}>Expected Reading time is {text.length*0.08} seconds</a>
            </div>
        </>
    )
}