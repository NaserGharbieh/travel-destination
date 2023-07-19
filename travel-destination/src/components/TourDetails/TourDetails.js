import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './TourDetails.css'; 
import Navbar from '../Navbar/Navbar'; 
import Header from '../Header/Header';
import Footer
 from '../Footer/Footer';
import { useState } from 'react';

function TourDetails(props) {
  let param = useParams();
  console.log(param);
  const [showMore, setShowMore] = useState(false);
      
  return (
    <div id='Details'>
    <Header/>
    <div >
      {props.data
        .filter((item) => item.id === param.id)
        .map((item) => (
          <div id="Detail">
              <img src={item.image} alt={"image of "+item.name} />
         
            {showMore ? item.info : item.info.substring(0, 250)}
            <Button onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        ))}
    </div> 
    <Footer/>
    </div>
  );
}

export default TourDetails;
