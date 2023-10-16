import React, {useState} from 'react'

// Hooks (useState is a Hook)
// Hooks => A method which helps us to use features of classes in function based component 
// State is being used here

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase() 
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    
    const handleDownClick = ()=>{
        // console.log("Uppercase was clicked " + text)
        let newText1 = text.toLowerCase() 
        setText(newText1)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClear = ()=>{
        let newText2 = '' 
        setText(newText2)
        props.showAlert("Text Cleared!", "success")
    }
    
    // IMP 
    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        // console.log("I am copy") 
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied!", "success")
    }
    
    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces Removed!", "success")
    }
    // ratta maar yeh syntax state ka
    const [text, setText] = useState('Enter Text Here');
    // text = "enter here" // Wrong way to update/change the state
    // setText("hdbhbd") // correct way is to use a function to update/change the state 

    return (
        <>
        {/* backgroundColor: props.mode === 'dark'? '#042743' : 'white'  */}
        <div className='container mb-4' style={{ color: props.mode === 'dark'?'white' : '#042743'}}> 
            <h1 style={{color: props.mode === 'dark'?'white' : '#042743'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'? '#13466e' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}}></textarea> 
                {/* CSS bhi ek object ki tarah likkhi jati hai isliye Js object ki trh treat kiya aur upr ek extra {} lgaya */}
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick} >Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3"  style={{color: props.mode === 'dark'?'white' : '#042743'}}>
            <h2>Your Text Summary</h2>
            {/* <p>{text.trim() === '' ? 0 : text.split(" ").length} words and {text.replace(/\s+/g, '').length} characters</p> */}
            {/* \s means white space including new lines */}
            <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} <b>words</b>, {text.length} <b>characters</b></p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Nothing to preview!"}</p>
        </div>
        </>
    )
}
