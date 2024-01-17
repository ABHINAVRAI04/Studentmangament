import {useSelector ,useDispatch} from 'react-redux'
import {  useEffect } from 'react'
import { getusers } from './Redux/ReduxSlices'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state)

useEffect(()=>{
  dispatch(getusers())
},[])
  
  console.log(data)
  return (
    <>
<h1>Hello world</h1>
      
    </>
  )
}

export default App