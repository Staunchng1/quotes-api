import axios from 'axios'
import { useEffect, useState } from 'react'
import Content from './content'


function App() {
const [quotes,setQuotes]=useState([])
  const [loading, setLoading] = useState(false)
  const [clicked,setClicked] = useState()
 
  useEffect(() => {
        const controller = new AbortController();
     const getQuotes = async () => {
    try {
      axios.defaults.baseURL ='https://cryptic-meadow-29818.herokuapp.com' ;
      await axios.get('/quotes',{signal: controller.signal}).then((res) => {setQuotes(res.data)})
    } catch (error) {
      console.log(error)
    };
  }
    getQuotes()
        return()=>controller.abort()
  },[])

  

  const clickHandle = (e) => {
    window.location.reload();
  }


  const { content: content, originator: originator } = quotes
  return (
    
    <div className="App">
      {quotes ? <>
        
        <q>{content}</q>
        <p>{name}</p>
         <button className='btn' onClick={clickHandle}> Regenerate</button>
      </>
        :
        <div className='danger'>Server down, try again shortly</div>}
   
    </div>
  )
}

export default App
