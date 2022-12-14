import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhatMayBeDiscussed = () => {
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
      <body className="columns  is-mobile is-tablet pl-6 pr-6">
        <div className="content  ">
          <div className="title is-3 mt-4 mr-6 ml-6 ">
            What may be discussed?
          </div>
          <div className="columns pt-5 pr-6 pl-4 ">
            <div className="column pt-5 pl-6 pr-6 pb-6  is-6-desktop is-12-tablet is-12-mobile mediator-text">
              <bl>
                <li>
                  How property, pensions, other financial assets and debts are
                  to be divided up and where both parties will live following
                  divorce
                </li>
                <li>Where the children will live when parents separate.</li>
                <li>
                  How the children will share their time between their parents,
                  including holidays.
                </li>
                <li>
                  How much children will see of members of their extended family
                  &#8212; grandparents, cousins etc.
                </li>
                <li>
                  How parents will communicate with one another in the future
                  about their children.
                </li>
                <li>
                  How to formalise any agreements in a Separation Deed or a
                  Consent Order.
                </li>
              </bl>
            </div>

            <div className=" column mt-4 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile">
              <img
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
                alt="FMC Child Mediation Logo"
              />
            </div>
          </div>
        </div>

        <div className="faq-buttons-div columns is-mobile is-hidden-mobile pb-3">
          <button className="faq-button column is-6-mobile ">
            <Link to={'/whodowehelp'}>
              <span>
                <i className="fa-solid fa-arrow-left  "></i> Previous
              </span>

              <p className="faq-button-subtitle">Who do we help? </p>
            </Link>
          </button>

          <button className="faq-button column is-6-mobile ">
            <Link to={'/ismediationlegallybinding'}>
              <span>
                Next <i className="fa-solid fa-arrow-right "></i>{' '}
              </span>

              <p className="faq-button-subtitle">
                Is mediation legally binding?{' '}
              </p>
            </Link>
          </button>
        </div>
      </body>
    </>
  );
};

export default WhatMayBeDiscussed;

{
  /* <div className=" column is-3 has-text-right pt-6 has-text-centered-mobile has-text-left-desktop ">
            <ul className="pt-2">
              <Link to={'/whatismediation'}>
                <li>What is mediation?</li>
              </Link>
              <Link to={'/howmediationworks'}>
                <li>How mediation works?</li>
              </Link>
              <Link to={'/whodowehelp'}>
                <li>Who do we help?</li>
              </Link>
              <Link to={'/whatmaybediscussed'}>
                <li>What may be discussed?</li>
              </Link>
              <Link to={'/ismediationlegallybinding'}>
                <li> Is mediation legally binding?</li>
              </Link>
              <Link to={'/whychooseus'}>
                <li> Why choose us?</li>
              </Link>
              <Link to={'/whatdoesitcost'}>
                <li> What does it cost?</li>
              </Link>
            </ul>
          </div> */
}
{
  /* </div> */
}
