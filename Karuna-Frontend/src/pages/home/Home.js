import Carousel from 'react-bootstrap/Carousel';


const Home=()=>{
    return  <div>
      
    <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://r4.wallpaperflare.com/wallpaper/389/437/235/bank-beggar-charity-city-wallpaper-239fc7b7eec2c74476ca6ab4940d9f4a.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Donation</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://c0.wallpaperflare.com/path/824/930/463/children-girl-man-homeless-1774aae05f96732bc9ee4cddfab8d50a.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://c0.wallpaperflare.com/path/154/988/1003/old-man-indian-people-poor-man-17b772949f469201f548701905eabcbb.jpg"
        alt="Fourth slide"
      />

      <Carousel.Caption>
        <h3>Fourth slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
 
  </div>
}
export default Home;

