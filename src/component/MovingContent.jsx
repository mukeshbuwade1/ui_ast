import React, { useState } from 'react';
import first from '../assets/image/first.svg'
import second from "../assets/image/second.svg"; 
import third from "../assets/image/third.svg";
import last from "../assets/image/last.svg";
let arr = [first, second, third, last];

let i = 0;
const Movingcontent = () => {

    const [imagestatus, setImagestatus] = useState("First");
    const [count, setcount] = useState(0);
    const [status, setStatus] = useState({ first: true, second: false, third: false, last: false });
    setTimeout(() => {
        if (count == 4) {
            setcount(0);
            setStatus({ first: true, second: false, third: false, last: false });
            return;
        }
        setcount(count + 1);
        setImagestatus(arr[count]);
        if (count == 1) {
            setStatus({ first: false, second: true, third: false, last: false });
            return
        }
        else if (count == 2) {
            setStatus({ first: false, second: false, third: true, last: false });
            return
        }
        else if (count == 3) {
            setStatus({ first: false, second: false, third: false, last: true });
            return
        }
    }, 2000);
    return (
        <div className="movingConatiner">
            <div className="buttoncontainer">
                <p className='maincontainerheading'>
                    Save time and write with confidence
                </p>
                <button className='upgradebtn'>Upgrade to QuillBolt Premium</button>
            </div>
            <div className="itemscontainer">
                <div className="movecontainer">
                    <img src={imagestatus} />
                </div>
                <div className="writtenco">
                    <p className={status.first ? "darkcontainer2" : "darkcontainer"}>Increase Your productivity</p>

                    <p className="content">Paraphrase more text at once to finish writing faster.</p>
                    <div className='lineparent'><div className='childline'></div></div>
                    <p className={status.second ? "darkcontainer2" : "darkcontainer"}>Access all modes</p>
                    <p className="content">Get maximum control over how you paraphrase.</p>
                    <div className='lineparent'><div className='childline'></div></div>
                    <p className={status.third ? "darkcontainer2" : "darkcontainer"}>Scan for plagiarism</p>
                    <p className="content">Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</p>
                    <div className='lineparent'><div className='childline'></div></div>
                    <p className={status.last ? "darkcontainer2" : "darkcontainer"}>Compare all mode outputs at once</p>
                    <p className="content">Get maximum control over how you paraphrase.</p>
                    <div className='lineparent'><div className='childline'></div></div>
                </div>
            </div>
        </div>
    )
}
export default Movingcontent