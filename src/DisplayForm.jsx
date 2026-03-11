const DisplayForm = ({firstName, lastName, email, password, id, handleDelete, handleEdit}) => {
    return (
        <li>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Password:</strong> {password}</p>
            <button onClick={()=> handleEdit(id)} style={{backgroundColor: '#16a34a'}}>Edit</button>
            <button onClick={()=> handleDelete(id)}  style={{backgroundColor: '#dc2525'}}>Delete</button>
        </li>
    )
}
export default DisplayForm;