import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import restaurant from './data.js'

function BasicExample() {
  return ( 
   <div className="container" style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between' , height:'fit-content',borderRadius:'20px', marginTop:'20px' }}>
        {
          restaurant.map((e)=>(
      <Card style={{ width: '18rem' ,marginBottom:'2vh' }}>
      <Card.Img variant="top" style={{ height:'38vh' }} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+e.info.cloudinaryImageId} />
      <Card.Body>
        <Card.Title style={{ width: '100%' ,height:'8vh' }} >{e.info.name}</Card.Title>
        <Card.Text>
         {e.info.areaName}
        </Card.Text>
        <p>{e.info.avgRating} star</p>
        <Button variant="primary">{e.info.costForTwo}</Button>
      </Card.Body>
    </Card>
    ))
        } 
   </div>
   
  );
}

export default BasicExample;