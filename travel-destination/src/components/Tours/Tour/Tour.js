import './Tour.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Tour(props){

return(
    
    <>  
    <div id="my-Tour"> 

        {props.dataTours.map((item)=>{
         
            return (<Link to={`city/${item.id}`}>
                {/* <h1>{item.name}</h1>
            <img src={item.image} alt={item.name}/>
             */}
           
            <Card  id='Tours' key={item.id}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        </Card.Text>
        
      </Card.Body>
    </Card>
 </Link>)
        }
        )}
         </div>
    </>
)

}

export default Tour;