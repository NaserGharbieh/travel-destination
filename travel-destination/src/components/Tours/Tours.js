function Tours(props) {
    return(
        <div>
            <p> {props.name} </p>
            <img src={props.image} alt={"image of "+props.name} />
            
        </div>
        
    );
    
}
export default Tours;