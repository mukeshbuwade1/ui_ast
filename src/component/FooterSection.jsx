import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, Container } from '@mui/material'
import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import CheckIcon from '@mui/icons-material/Check';



const Crad = () => {
    const[progressOne, setProgressOne] = useState(0);
    const[progressTwo, setProgressTwo] = useState(0);
    const[progressThree, setProgressThree] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      if(progressOne < 75){
        setProgressOne(progressOne+2)
      }
    },50)
    setTimeout(()=>{
        if(progressTwo < 100){
          setProgressTwo(progressTwo+5)
        }
      },50)
      setTimeout(()=>{
        if(progressThree < 85){
          setProgressThree(progressThree+3)
        }
      },50)
  },[progressOne,progressTwo,progressThree])
  return (
    <div>
      <Container className='container'>
        <Typography className='headerTxt' variant='h3' align='center'>
            Write better, faster, and clearer instantly
        </Typography>
       
        <Typography className='paragraphTxt'  variant='primarytext' textAlign='center' paragraph>
                QuillBot is trusted by students, professional writers, and  <br />business people who want to write more effectively.
        </Typography>
      </Container>
      <div className="row justify-content-center">
        <div className="col-2"></div>
      <div className="col-3 ">
      <div>
           <CircularProgressbar 
            className='circle-bar'
            value={progressOne}
            text={`${progressOne}%`}
            />
      </div>
      <div className="row text1">
        <div className="col-7 ">
        <label>Average time saved per 
        writing project.</label>
        </div>
      </div>
    
      </div>
      <div className="col-3 ">
      <div>
           <CircularProgressbar 
            className='circle-bar'
            value={progressTwo}
            text={`${progressTwo}%`}
            />
      </div>
      <label className="text2">Trusted by millions worldwide.</label>
      </div>
      <div className="col-3">
      <div>
           <CircularProgressbar 
            className='circle-bar'
            value={progressThree}
            text={`${progressThree}%`}
            />
          <div className="row text3">
        <div className="col-7 ">
        <label>Who reported their grades improved after using QuillBot</label>
        </div>
      </div>
      </div>
      {/* <label>Who reported their grades improved after using QuillBot</label> */}
      </div>
      <div className="col-2"></div>
    </div>

        {/* <h1> <CheckIcon/> Hiiiiiiiiiiii</h1> */}
    </div>
  )
}

export default Crad;