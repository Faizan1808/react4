import { Link } from "react-router-dom"
import StudentsDetails from "./StudentsDetaisl"
import './style.css'
const Student = (props) =>{

    return(
        <div className="main-container">
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Student-Details" Name="Faizan">Students</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            <div className="top">
                <h1>Student-Details</h1>
                <button>Add New Student</button>
            </div>
            <div className="student-head">
                <p className="name">Name</p>
                <p>Age</p>
                <p>Course</p>
                <p>Batch</p>
                <p>Change</p>
            </div>         

            
            <StudentsDetails Name="John" Age="24" Course="MERN" Batch="October"  edit="edit"></StudentsDetails>
            <StudentsDetails Name="Deo" Age="25" Course="MERN" Batch="November"  edit="edit"></StudentsDetails>
            <StudentsDetails Name="Biden" Age="26" Course="MERN" Batch="October"  edit="edit"></StudentsDetails>
            <StudentsDetails Name="Barar" Age="22" Course="MERN" Batch="September"  edit="edit"></StudentsDetails>
            <StudentsDetails Name="Christ" Age="23" Course="MERN" Batch="October"  edit="edit"></StudentsDetails>
        </div>
    )
}

export default Student