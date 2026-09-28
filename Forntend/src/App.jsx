import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [todos,setTodos] = useState([]);
  const [title,setTitle] = useState("");
  const fetchTodos = async ()=>{
    try {
      const response =  await axios.get("http://localhost:5000/api/todos");
      setTodos(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    fetchTodos
  },[])
  }
    const addTodo = async (e) =>{
    e.preventDefault();
    if(!title.trim()) return;
    try {
      const response =  await axios.get("http://localhost:5000/api/todos",{
        title
      });
      setTitle("");
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add Your Todo" value={title} onChange={(e)=>SVGTextPositioningElement} />
        <button >Add Todo</button>
       </form>
    </div>
  )
}

export default App
