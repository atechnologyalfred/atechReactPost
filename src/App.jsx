import { useState } from "react";
import Form from "./Form";
import DisplayForm from "./DisplayForm";
function App (){
  const [values, setValues ] = useState([]);
  const getData = (data) =>  {
    data.id = Date.now();
    setValues([...values, data]);
  }

const handleEdit = (id)=> {

}
const handleDelete = (id)=> {
  console.log(id)
  const newValues = values.filter(value=> value.id !== id);
  setValues(newValues)
}

  return (
    <>
    <div className="container">
  <Form  onSave = {getData}/>
  <ul >
    {values.map((value, idx)=> <DisplayForm  key={idx} {...value}  handleDelete={handleDelete} handleEdit={handleEdit} />)}
  </ul>
  </div>
    </>
  )
}
export default App;



