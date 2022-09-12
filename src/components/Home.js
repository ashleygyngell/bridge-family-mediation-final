import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';

// import test1 from '../assets/images/test1.png';
// import test2 from '../assets/images/test2.png';
// import test3 from '../assets/images/test3.png';

// Homepage needs new photo background and liscenced.
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="title-hero">
        <p className="fadeInOnLoad">
          <span>Bridge</span> Family Mediation
        </p>
      </section>

      {/* <div id="carousel">
        <Carousel
          autoPlay="true"
          interval="4500"
          transitionTime="1000"
          infiniteLoop="true"
          showArrows="false"
          showThumbs="false"
          showStatus="false"
          showIndicators="false"
          animationHandler="fade"
          swipeable="false"
        >
          <div>
            <img href="" src={test1} alt="" />
          </div>
          <div>
            <img href="" src={test2} alt="" />
          </div>
          <div>
            <img href="" src={test3} alt="" />
          </div>
        </Carousel>
      </div> */}

      <section className="hero hero-background full-height is-tablet">
        <div
          id="has-text-over-photo"
          className="hero-text-over-photo has-text-centered fadeInOnLoad2 "
        >
          <p>Are you going through a divorce or separation? </p>
          <p>Let us help.</p>
        </div>
        <div className="columns has-text-centered">
          <div className="column">
            <Link to={'/whatismediation'}>
              <button id="button" className="button is-warning">
                What is Mediation?
              </button>
            </Link>
          </div>
          <div className="column">
            <Link to={'/howdoesitwork'}>
              <button id="button" className="button is-warning">
                How it works
              </button>
            </Link>
          </div>
          <div className="column">
            <Link to={'/aboutus'}>
              <button id="button" className="button is-warning">
                About us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
