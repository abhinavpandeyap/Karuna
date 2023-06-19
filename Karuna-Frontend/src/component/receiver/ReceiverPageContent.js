// import React, { useState, useEffect } from 'react';
import ReceiverDashboard from './ReceiverDashboard';
import ReceiverService from '../../services/ReceiverService';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './ReceiverPageContent.css';
import { useState, useEffect } from 'react';

const ReceiverPageContent = () => {

    const don = JSON.parse(localStorage.getItem("user")).data
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await ReceiverService.viewItems();
                setItems(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchItems();
    }, []);

    const acceptItem = (itemId) => {
        ReceiverService.receive(itemId, don.id)
            .then((response) => {
                console.log(response);
                toast.success('Item accepted Successfully!!');
                setItems(items.filter((item) => item.id !== itemId));
            })
            .catch((error) => {
                console.log(error);
                toast.error(error);
            });
    };


    return (
        <div>
            <div className="container">
                <ReceiverDashboard />
                <div className="content">
                    <h2>Items</h2>
                    <div className="pagecontent">
                        <div className="cards">
                            {items.map((item) => (
                                <div key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{item.category}</Card.Title>
                                            <Card.Text>
                                                <b>Description - </b>
                                                {item.description}
                                            </Card.Text>
                                            <Card.Text>
                                                <b>Quantity - </b>
                                                {item.quantity}
                                            </Card.Text>
                                            <Card.Text>
                                                <b>Date - </b>
                                                {item.listedDateTime}
                                            </Card.Text>
                                            <Button
                                                style={{ width: '10rem' }}
                                                variant="primary"
                                                onClick={() => acceptItem(item.id)}
                                            >
                                                Accept
                                            </Button>
                                        </Card.Body>
                                    </Card>

                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiverPageContent;
