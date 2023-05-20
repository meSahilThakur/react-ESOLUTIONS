import React from "react";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

function Home() {

    const vectorGraphic = "https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png";

  return (
    <>
      <div id="home" className="home">
        <main>
          <h1>eSolutions</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vectorGraphic} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to 
                increase the problem solving ability in children.
            </p>
        </div>
      </div>

      <div id="about" className="home3">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam eveniet itaque culpa saepe porro maxime veritatis voluptate quis! Nobis maxime unde tempora praesentium accusamus perspiciatis earum, possimus iusto repellat quaerat deserunt ipsam expedita eos fugiat dolores repudiandae dicta tenetur autem esse quos aliquid? Harum eum rerum distinctio nam. Quas!</p>
        </div>
      </div>

      <div id="brands" className="home4">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
                <div style={{
                    animationDelay:"1s"
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
}

export default Home;
