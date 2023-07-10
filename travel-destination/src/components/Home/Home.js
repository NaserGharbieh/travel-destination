import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tours from '../Tours/Tours'; 
import db from "../../data/db.json";
function Home(){
  
    
    return( 
    <div>
      
    <Header/>
    {
        db.map((obj, i) => (
          <Tours  name={obj.name} image={obj.image} />
          
        ))
      }
    <Footer/>
    </div>
    );
}

export default Home;