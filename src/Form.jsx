import { useState } from "react";

const Form = ({onSave}) => {
    const [ values, setValues ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const getValues = (e) => {
        e.preventDefault();
        if(values.firstName ==="" || values.lastName ==="" || values.email  ==="" || values.password===""){
            alert("Please populate fields");
            return;
        }
        onSave(values);
        setValues({firstName:"", lastName: "", email:"", password:""})
    }
    
  return (
    <form onSubmit={getValues}>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" className="form-control" value={values.firstName} onChange={(e)=>setValues({...values, firstName: e.target.value})}/>
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" className="form-control" value={values.lastName} onChange={(e)=>setValues({...values, lastName: e.target.value})}/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="form-control" value={values.email} onChange={(e)=>setValues({...values, email: e.target.value})}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className="form-control" value={values.password} onChange={(e)=>setValues({...values, password: e.target.value})}/>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
export default Form;