import React  from 'react'
// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // let myStyle = {
    //     color: props.mode === 'dark'?'white':'#042743',
    //     backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    //     border: '2px solid',
    //     borderColor: props.mode ==='dark'?'#042743':'white'
    // }

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }

    // }
    return (
        // style = {myStyle}
        // style = {backgroundColor: props.mode === 'dark'? '#042743' : 'white', color: props.mode === 'dark'?'white' : '#042743'}
        <div className= 'container' style={{color: props.mode === 'dark'?'white' : 'rgb(36 74 104)',backgroundColor: props.mode === 'dark'? '#042743':'white' ,border: '2px solid',
        borderColor: props.mode ==='dark'?'#042743':'white'}}>
            <h1 className= 'my-3' style={{color: props.mode === 'dark'?'white' : '#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', border: '2px solid',
        borderColor: props.mode ==='dark'?'#042743':'white'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', border: '2px solid',
        borderColor: props.mode ==='dark'?'#042743':'white'}}>
                            <b>Analyze your text</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', border: '2px solid',
        borderColor: props.mode ==='dark'?'#042743':'white'}}>
                        <div className="accordion-body" >
                            These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', border: '2px solid',
        borderColor: props.mode ==='dark'?'#042743':'white'}}>
                            <b>Free to use</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',border: '2px solid',
        borderColor: props.mode ==='dark'?'#042743':'white'}}>
                        <div className="accordion-body">
                             These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',border: '2px solid',
        borderColor: props.mode ==='dark'?'#042743':'white'}}>
                            <b>Browser Compatible</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',border: '2px solid',
        borderColor: props.mode ==='dark'?'rgb(36 74 104)':'white'}}>
                        <div className="accordion-body">
                            These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button> */}
            </div>
                
        </div>
    )
}
