import { Box } from '@mui/system'
import React from 'react'
// THIS IS THE COMPONENT OF THE SECOND QUESTION
import Party from './Question2'
import Password from './components/Password'
import Verification from './components/Verification'


// THIS IS THE FIRST SUBQUESTION IN THIS QUIZ !. 
// PLEASE DO THIS QUESTION FIRST, THE PROBLEM OF SECOND QUESTION WILL NOT SHOW UNTIL YOU PASSED THE FIRST QUESTION.

// HINTS:
// - PLEASE READ AND UNDERSTAND THE Password AND Verification COMPONENTS
// - PLEASE LOOK AT ALL PROPS THAT USED IN Password AND Verification 
const Question = () => {
  const [step, setStep] = React.useState(1)
  const [positionWidth, setPositionWidth] = React.useState(0)
  const [positionHeight, setPositionHeight] = React.useState(0)
// {setStep,positionWidth,setPositionWidth,positionHeight,setPositionHeight}
  return (
    <Box display={"flex"} flexDirection="column" width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      {step === 0 && <Password setStep={setStep} />}
      {step === 1 && <Verification
        setStep={setStep}
        positionWidth={positionWidth}
        setPositionWidth={setPositionWidth}
        positionHeight={positionHeight}
        setPositionHeight={setPositionHeight}
         />}
      {step === 2 && <Party />}
    </Box>
  )
}

export default Question