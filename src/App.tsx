import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [loading ,setLoading] = useState<boolean>(true)
  const [data , setData] = useState<Array<any>>([])
  useEffect(() => { 
    fetch('http://localhost:3000/logs',{
      method: 'GET',
    }).then((res)=> res.json()).then((res)=>{
        console.log("log response",res)
        setData(res.data)
        setLoading(false)
    }).catch((error)=>{
      console.error("Failed to get data ",error);
    })
  }, [])
  
  if(loading){
    return <>loading</>
  }
  return (
    <table border={1}>
      
    <thead>
      <tr>
      <th>Checkout Id</th>
      <th>Message</th>
      <th>Reminder Id </th>
      <th>Reminder Description</th>
      <th>Reminder Time </th>
      </tr>
    </thead>
    <tbody>
    {
      data.map((single)=>{
        return(
          <tr key={single.reminderTime}>
            <td>{single.checkoutId}</td>
            <td>{single.message}</td>
            <td>{single.reminderId}</td>
            <td>{single.reminderDescription}</td>
            <td>{single.reminderTime}</td>
        </tr>
        )
      })
    }
    </tbody>
   
    {/* <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr> */}
  </table>
  )
}

export default App
