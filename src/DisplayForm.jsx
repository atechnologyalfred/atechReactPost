const DisplayForm = ({firstName, lastName, email, password }) => {
    return (
        <li>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </li>
    )
}
export default DisplayForm;