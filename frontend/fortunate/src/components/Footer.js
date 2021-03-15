import Button from "./Button"
import TopButton from "./TopButton"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const Footer = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <footer className='header'>
            <h1 className='logo'>Fortunate</h1>
            <Link to ="/">
            <Button text ='About'/>
            </Link>
            <Button text ='Virtual Market'/>
            <Button text ='Courses'/>
            <Button text ='Contact'/>
            <Link to="/signup">
            <Button text ='Sign Up'/>
            </Link>
            <Link to="/login">
            <Button text ='Login'/>
            </Link>
            <Button text = 'Top'/>
        </footer>
    )
}

export default Footer
