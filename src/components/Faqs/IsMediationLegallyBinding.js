import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const IsMediationLegallyBinding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <button className="back-button pl-4 pt-1 ">
        <Link to={'/faqs'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> FAQs
          </span>
        </Link>
      </button>
      <body className="columns is-mobile is-tablet pl-6 pr-6 ">
        <div className="content  ">
          <div className="title is-3 mt-4 mr-6 ml-6">
            Is Mediation Legally Binding?
          </div>
          <div className="columns pt-5 pr-6 pl-4 ">
            <div className="column pt-5 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile mediator-text  ">
              <p>
                The mediation agreement is not legally binding. At the end of
                the mediation process, the mediator will prepare a Memorandum of
                Understanding &#8212; and in finance cases also an Open
                Financial Statement &#8212; detailing the proposals you have
                agreed. You would then take these documents to your solicitor,
                who will draft a legally-binding order, to be approved by the
                courts without you having to attend.
              </p>
            </div>
            <div className=" column mt-4 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile">
              <img
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
                alt="FMC Child Mediation Logo"
              />
            </div>
          </div>
          <div className="faq-buttons-div columns is-mobile pb-3">
            <button className="faq-button column is-6-mobile ">
              <Link to={'/whatmaybediscussed'}>
                <span>
                  <i className="fa-solid fa-arrow-left"></i> Previous
                </span>

                <p className="faq-button-subtitle">What may be discussed? </p>
              </Link>
            </button>

            <button className="faq-button column is-6-mobile">
              <Link to={'/whychooseus'}>
                <span>
                  Next <i className="fa-solid fa-arrow-right"></i>{' '}
                </span>

                <p className="faq-button-subtitle">Why choose us? </p>
              </Link>
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default IsMediationLegallyBinding;
