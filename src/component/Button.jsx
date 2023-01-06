import React, { useState } from 'react'

export default function Button(props) {
    // 
    // function toggleHover() {
    // }
    return (
        <div  onClick={()=>props.click()}
             onMouseEnter={()=>props.setHover(true)} onMouseLeave={()=>props.setHover(false)} 
            className="button-box" style={{ ...props.style }}>
            <a href="#" className="button-text">{props.name}</a>
        </div>
    )
}
