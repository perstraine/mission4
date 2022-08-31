import Carousel, { CarouselItem } from "./components/Carousel";

export default function Home() {
  return (
    <>
      <div className="home-content">
        <Carousel>
          <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/campaign-banners--artwork/2021/tina/tina_webbanner_junef.jpg" alt="" /></CarouselItem>
          <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/campaign-banners--artwork/2022/readersdigest_webbannernew.jpg" alt="" /></CarouselItem>
          <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/campaign-banners--artwork/2022/nelson_webbannerf-1.jpg" alt="" /></CarouselItem>
          <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/search-wizard/tina-web-banner-3-new-2022.png" alt="" /></CarouselItem>
        </Carousel>

        <h1>Welcome to Turners Cars!</h1>
        <h2>Thousands of Quality Cars for Sale!</h2>
        <p>Turners Cars is the largest used car network in New Zealand with 20 car dealer locations nationwide. With a huge range of around 3,000 cars for sale (and 1,500 being made ready for sale at any one time) there is truly something for everyone. We’ve been helping Kiwis buy and sell used cars for over 50 years. And if you want car finance or car insurance, we can sort that out for you as well.</p>
        <div className="carousel-titles">
          <h1>Just arrived stock</h1>
          <h1>Upcoming Auctions</h1>
        </div>
        <div className="two-carousels">

          <Carousel className="carousel-2">
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2011-mercedes-benz-cls-22266950_14722394_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2016-holden-commodore-22222041_14674219_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2012-volkswagen-golf-22460614_15179479_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2013-toyota-corolla-22622175_15240653_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2017-toyota-aqua-22389482_15113235_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2012-hyundai-santa-fe-22236285_14751872_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2007-ford-ranger-22426039_15128691_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2013-mazda-axela-22415839_15116034_gallery.jpg" alt="" /></CarouselItem>
          </Carousel>

          <Carousel className="carousel-2">
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2019-audi-a3-21169194_15466101_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2002-audi-tt-22762284_15545614_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2018-bmw-x5-21427992_15155402_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2005-bmw-3-series-22747707_15491547_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2010-mercedes-benz-e-class-22760986_15540861_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2006-mercedes-benz-c180-22632404_15449582_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2005-porsche-cayenne-22625756_15236368_gallery.jpg" alt="" /></CarouselItem>
            <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/photos/good/2011-mini-mini-22738285_15461115_gallery.jpg" alt="" /></CarouselItem>
          </Carousel>
        </div>
      </div>

    </>
  );
}