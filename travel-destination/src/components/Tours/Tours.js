import './Tours.css';
import Tour from './Tour/Tour';

function Tours(props){

return(
   
        <div>
             <Tour dataTours={props.dataTour}/>
            
        </div>
        
    );
    

}

export default Tours;