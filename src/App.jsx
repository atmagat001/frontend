
import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const changeHandler = (e) => {
   
    e.target.name === 'name' ? setName(e.target.value) : setAge(e.target.value)
  }

  const submitPost = (e) => {

    e.preventDefault()
    const data = {name, age}
    axios.post ('http://localhost:8000/register', data)
    .then (res => {
      alert ("success")
      setName('')
      setAge('')
    })
    .catch (err => console.log(err))
   

  }

  return (
    <div className="App">
      <input type="text" name = 'name' placeholder='input name' onChange= {changeHandler} value={name}/>
      <input type="text" name = 'age' placeholder='input age' onChange= {changeHandler} value= {age}/>
      <button onClick={submitPost}>Submit</button>
      
    </div>
  );
}

export default App;
