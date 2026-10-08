import {useState} from 'react';

function App() {
  const [text,setText]=useState("");
  const [status,setStatus]=useState("");
  const [tasks,setTasks]=useState([])
  const addTasks = ()=>{
    if(text === "")return;
    const newTask={id:Date.now(),title:text,status:status}
    setTasks([...tasks,newTask]); 
    setText("");
    setStatus("")
  };
const deleteTask =(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id));
};
const markDone =(id)=>{
  setTasks(tasks.map((task)=>
    task.id===id?{...task,status:"Done"}:task)
  );
};

  return(
    <div>
      <h1>Task Management</h1>
      <label >Title: </label>
      <input value={text} type="text" onChange={(e)=> setText(e.target.value)}/>
      <label >Status: </label>
      <input value={status} type="text" onChange={(f)=> setStatus(f.target.value)}/>
      <p>What you wrote For title: <h1>{text}</h1> <br />What You wrote For Status: <h2>{status}</h2> </p>
      <button onClick={addTasks}>Add Tasks</button>
      
      {
        tasks.map((task)=>(
          <div key={task.id}>
            <h1 style={{color:task.status==="Done"?'green':'red'}}>{task.title}</h1>
            <p>{task.status}</p>
            <button onClick={()=>deleteTask(task.id)}>Delete</button>
            <button onClick={()=>markDone(task.id)}>mark as done</button>
          </div>
        )
        )
      }
    </div>
  )
}

export default App