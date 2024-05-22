import Carousel from 'react-bootstrap/Carousel';
import './carouselpage.css'

function CarouselPage() {
  return (
    <Carousel className='carousel-container' data-bs-theme="dark">
      <Carousel.Item className='carousel-item'>
        <img
          
          src="https://cdn.sstatic.net/Img/product/teams/logos/overstock-alt.svg?v=ed38ea932870"
          alt="First slide"
        />
        

       <img
          
          src="https://cdn.sstatic.net/Img/product/teams/logos/verizon-media-alt.svg?v=f335b20096b2"
          alt="First slide"
        />

       <img
         
          src="https://cdn.sstatic.net/Img/product/teams/logos/wisetech-global-alt.svg?v=3b6b11e76536"
          alt="First slide"
        />
        

        <img
          
          src="https://cdn.sstatic.net/Img/product/teams/logos/box-alt.svg?v=eb76fd9d884f"
          alt="First slide"
        />

        
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/expensify-alt.svg?v=375099b85ce5"
          alt="Second slide"
        />

        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/instacart-alt.svg?v=15bd0b39b197"
          alt="Second slide"
        />

       <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/dialpad-alt.svg?v=4e63facf7f79"
          alt="Second slide"
        />

        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/overstock-alt.svg?v=ed38ea932870"
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/barkbox-alt.svg?v=419890745024"
          alt="Third slide"
        />

        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/logitech-alt.svg?v=a99c74b88566"
          alt="Third slide"
        />

        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/microsoft-alt.svg?v=e57319450314"
          alt="Third slide"
        />

        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/philips-alt.svg?v=7fc60c993103"
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          src="https://cdn.sstatic.net/Img/product/teams/logos/intercom-alt.svg?v=3eda71aed47c"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
