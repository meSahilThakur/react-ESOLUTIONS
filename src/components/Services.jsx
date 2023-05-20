import React from "react";
import "../styles/Services.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";

function Services() {

    const carouselImg1 = "https://burst.shopifycdn.com/photos/teamwork-makes-the-dream-work.jpg?width=925&format=pjpg&exif=1&iptc=1";
    const carouselImg2 = "https://burst.shopifycdn.com/photos/tech-meeting-flatlay.jpg?width=925&format=pjpg&exif=1&iptc=1";

  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay showStatus={false} interval={1000} showThumbs={false}>
        <div>
          <img className="caroImg" src={carouselImg1} alt="item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img className="caroImg" src={carouselImg2} alt="item2" />
          <p className="legend">Peer to Peer support</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
