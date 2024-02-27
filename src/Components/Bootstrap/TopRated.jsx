import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "./data.js";

export default function App() {
 const[rate , setrate] = useState("")


function clickHandler(){
     setrate(4.4)

 
}



  return (
    <>
     <div style={{ display: "block", width:'68vw', padding: 40 ,marginLeft:'15%'}}>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
       
       {
          data.map((datas)=>(
            <Carousel.Item interval={1500}>
          <img
            className="d-block w-100" style={{ height:'48vh'  }}
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+datas.info.cloudinaryImageId}
            alt="Image One"
          />
          <h2>{datas.info.name}</h2>
         
        </Carousel.Item>
          ))

       }
       
      </Carousel>
    </div>

    <br />
    
    <button onClick={clickHandler}>Submit</button>
    <div className="container" style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between' , height:'fit-content',borderRadius:'20px', marginTop:'20px' }}>
       {/* {
          data.map((e)=>(
            e.info.avgRating >= rate ?   <Card style={{ width: '18rem' ,marginBottom:'2vh' }}>
      <Card.Img variant="top" style={{ height:'38vh' }} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+e.info.cloudinaryImageId} />
      <Card.Body>
        <Card.Title style={{ width: '100%' ,height:'8vh' }} >{e.info.name}</Card.Title>
        <Card.Text>
         {e.info.areaName}
        </Card.Text>
        <p>{e.info.avgRating} star</p>
        <Button variant="primary">{e.info.costForTwo}</Button>
      </Card.Body>
    </Card> : null
          ))

       } */}

       {
         data.filter((e)=>(
              e.info.avgRating >= rate
         )).map((e)=>(
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

    </>
   
  );
}
