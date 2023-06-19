
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
import DonorDashboard from "./DonorDashboard";

import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


import Card from 'react-bootstrap/Card';
import './DonorCampaign.css'


const DonorCampaign = () => {
  return (
    <div>
      <div className="container">
        <div>
          <DonorDashboard></DonorDashboard>
        </div>
        <div className="content">

          <h2>Campaigns</h2>

          <div className='pagecontent'>

            <div className='cards'>
              <br></br><br></br>
              <div>
                <Card style={{ width: '18rem' }}>
                  
                  <Card.Body>
                    <Card.Title>Food donation Campaign</Card.Title>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text> */}
                    <Link to={"/FoodDonation"}><Button style={{ width: '10rem' }} variant="primary">Donate</Button></Link>
                  </Card.Body>
                </Card>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <Card style={{ width: '18rem' }}>
                  
                  <Card.Body>
                    <Card.Title>Campaign - 2</Card.Title>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text> */}
                    <Link to={"/ClothDonation"}><Button style={{ width: '10rem' }} variant="primary">Donate </Button></Link>
                  </Card.Body>
                </Card>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <Card style={{ width: '18rem' }}>
                  
                  <Card.Body>
                    <Card.Title>Campaign - 3</Card.Title>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text> */}
                    <Link to={"/FurnitureDonation"}><Button style={{ width: '10rem' }} variant="primary">Donate </Button></Link>
                  </Card.Body>
                </Card>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <Card style={{ width: '18rem' }}>
                  
                  <Card.Body>
                    <Card.Title>Campaign - 4</Card.Title>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text> */}
                    <Link to={"/ToyDonation"}><Button style={{ width: '10rem' }} variant="primary">Donate</Button></Link>
                  </Card.Body>
                </Card>
              </div>


            </div>


          </div>
        </div>

   </div>
      </div>



      );
};

      export default DonorCampaign;
