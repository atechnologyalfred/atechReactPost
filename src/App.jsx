import { useState } from "react";
import Form from "./Form";
import DisplayForm from "./DisplayForm";
function App (){
  const [values, setValues ] = useState([]);
  const getData = (data) =>  {
    data.id = new Date()
    setValues([...values, data]);
    console.log(values);
  }
  return (
    <>
    <div className="container">
  <Form  onSave = {getData}/>
  <ul >
    {values.map((value, idx)=> <DisplayForm  key={idx} {...value} />)}
  </ul>
  </div>
    </>
  )
}
export default App;



