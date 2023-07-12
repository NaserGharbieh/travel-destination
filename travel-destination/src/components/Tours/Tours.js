import './Tours.css';
import Tour from './Tour/Tour';

function Tours(props){

return(
    <Tour dataTours={props.dataTour}/>
)

}

export default Tours;