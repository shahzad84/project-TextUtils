import React,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClear=()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext="";
        setText(newtext)
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();//to unselect the copy part
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);//by using this we can type on textarea
    }

    const[text,setText]=useState('');
    //text="new text";//wrong way to chanage the state
    //setText="new text";//Right way to change th state
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="mybox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'black': 'black'}} id="mybox" rows="3"></textarea>
            {/* //due to some issue dark backgroundColor is not working in textbox */}
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>You Text Summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes To read </p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>


        </div>

        </>
    )
}