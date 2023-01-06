import React from 'react'
import Button from './Button';
import { FiCheck, FiX } from "react-icons/fi";

export default function Card(props) {
    const [hover, setHover] = React.useState(false)
    const { title, btn_name, features, color, footer,h_color } = props.e
    return (
        <div className="card-body">
            <h3 className="card-heading" style={{ backgroundColor: color }}>{title}</h3>
            <div className="button-outer">
                <Button setHover={setHover} click={()=>alert(title)} name={btn_name} style={{ backgroundColor: hover?h_color:color }} />
            </div>
            <div className="list-box">
                {
                    features.map((e, i) => (
                        <div className="list-item-box">
                            {
                                e.active ? <FiCheck className='icon c-p' /> : <FiX className='icon c-d' />
                            }
                            <p className="tx">{e.name}</p>

                        </div>
                    ))
                }
            </div>

            <div style={{
                backgroundColor: "#EEEEEE",
                textAlign: "center",
                width: "100%",
                padding: "17px 0px",
                fontSize: " 15px",
                fontWeight: "600",
            }}>
                {/* <p className="ft-tx"> */}
                {footer}
                {/* </p> */}
            </div>
        </div>
    )
}
