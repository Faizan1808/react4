import "./style.css"
const StudentsDetails = (props) =>{
    return(
        <div>
            
            <div className="student-detail">
                <p className="name">{props.Name}</p>
                <p>{props.Age}</p>
                <p>{props.Course}</p>
                <p>{props.Batch}</p>
                <p>{props.edit}</p>
            </div>
    
        </div>
    )
}

export default StudentsDetails