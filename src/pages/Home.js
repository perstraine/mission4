import Carousel, { CarouselItem } from "./components/Carousel";

export default function Home() {
  return (
    <>
    <Carousel>
      <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/campaign-banners--artwork/2021/tina/tina_webbanner_junef.jpg"alt="" /></CarouselItem>
      <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/campaign-banners--artwork/2022/readersdigest_webbannernew.jpg"alt="" /></CarouselItem>
      <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/campaign-banners--artwork/2022/nelson_webbannerf-1.jpg"alt="" /></CarouselItem>
      <CarouselItem><img className="carousel-item" src="https://content.tgstatic.co.nz/webassets/globalassets/search-wizard/tina-web-banner-3-new-2022.png"alt="" /></CarouselItem>
    </Carousel>
    <div className="home-content">
      <h1>Welcome to Turners Cars!</h1>
      <h2>Thousands of Quality Cars for Sale!</h2>
      <p>Turners Cars is the largest used car network in New Zealand with 20 car dealer locations nationwide. With a huge range of around 3,000 cars for sale (and 1,500 being made ready for sale at any one time) there is truly something for everyone. We’ve been helping Kiwis buy and sell used cars for over 50 years. And if you want car finance or car insurance, we can sort that out for you as well.</p>
    </div>
    </>
  );
}