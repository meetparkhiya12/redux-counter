import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { dscCounter, incCounter } from "./Services/ActionType/counterAction"


function App() {

  const {count} = useSelector(state => state.counterReducer)
  const dispatch = useDispatch();


const handleINC = () => {
  dispatch(incCounter())
}

const handleDSC = () => {
dispatch(dscCounter());
}




  return (
    <>
     <div>
      <h1>
        {
          count
        }
      </h1>


      <button className="btn btn-info" onClick={handleINC}>+</button>
      <button className="btn btn-info" onClick={handleDSC}>-</button>


     </div>
    </>
  )
}

export default App
