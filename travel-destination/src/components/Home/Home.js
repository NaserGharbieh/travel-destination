import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tours from '../Tours/Tours'; 
import db from "../../data/db.json";
function Home(props){
  
    
    return( 
    <div>
      
    <Header/>
    
       
          <Tours  dataTour={props.data} />
          
        
      
    <Footer/>
    </div>
    );
}

export default Home;