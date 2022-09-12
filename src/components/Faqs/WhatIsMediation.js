import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhatIsMediation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <button className="back-button pl-4 pt-1">
        <Link to={'/faqs'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> FAQs
          </span>
        </Link>
      </button>
      <body className="columns is-mobile is-tablet pl-6 pr-6 ">
        <div className="content  ">
          <div className="title is-3 mt-4 mr-6 ml-6">What is mediation?</div>
          <div className="columns pt-5 pr-6 pl-4 ">
            <div className="column pt-5 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile mediator-text ">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                eos autem ducimus vitae sunt, quaerat rem ipsum soluta dolores.
                Dolore libero excepturi cupiditate totam. Autem incidunt
                voluptate numquam, vitae perferendis alias deserunt laboriosam
                similique ducimus laudantium temporibus corporis voluptatibus
                distinctio sequi quas!{' '}
              </p>
              <p>
                Omnis perspiciatis nemo optio laboriosam. Nulla unde nostrum
                assumenda sequi eligendi debitis? Sequi voluptatibus accusamus
                laudantium sed voluptatem deleniti voluptatum quae porro, iure
                laboriosam, illum nostrum, ducimus hic dolore minima
                perferendis! Deleniti repellat nostrum ratione dolores ea
                corporis.
              </p>{' '}
            </div>
            <div className=" column  mt-4 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile">
              <img
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
                alt="FMC Child Mediation Logo"
              />
            </div>
          </div>

          <div className="faq-buttons-div columns is-mobile pb-3">
            <button className="faq-button column is-6-mobile ">
              <Link to={'/howdoesitwork'}>
                <span>
                  <i className="fa-solid fa-arrow-left  "></i> Previous
                </span>

                <p className="faq-button-subtitle">How does it work? </p>
              </Link>
            </button>

            <button className="faq-button column is-6-mobile ">
              <Link to={'/whodowehelp'}>
                <span>
                  Next <i className="fa-solid fa-arrow-right "></i>{' '}
                </span>

                <p className="faq-button-subtitle">Who do we help? </p>
              </Link>
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default WhatIsMediation;
