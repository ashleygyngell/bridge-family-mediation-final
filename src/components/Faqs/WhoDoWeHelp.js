import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhoDoWeHelp = () => {
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
          <div className="title is-3 mt-4 mr-6 ml-6">Who do we help?</div>
          <div className="columns pt-5 pr-6 pl-4 ">
            <div className="column pt-5 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile mediator-text  ">
              <bl>
                <li>
                  Separating couples, with or without children &#8212; married
                  or unmarried.
                </li>
                <li>
                  Same-sex couples, whether or not in a marriage or civil
                  partnership.
                </li>
                <li>
                  Children who are struggling to come to terms with their
                  parents&#39; separation and may be finding it hard to get on
                  with their parents.
                </li>
                <li>
                  Members of the extended family, e.g. grandparents, who may
                  have been prevented from seeing their grandchildren.
                </li>
                <li>
                  Families in a range of disputes, e.g. adult siblings looking
                  to resolve the on-going care of an elderly relative; a parent
                  in dispute with a grown-up child.
                </li>
              </bl>
            </div>
            <div className=" column mt-4 pl-6 pr-6 pb-6  is-6-desktop is-12-tablet is-12-mobile">
              <img
                src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
                alt="FMC Child Mediation Logo"
              />
            </div>
          </div>
          <div className="faq-buttons-div columns is-mobile pb-3">
            <button className="faq-button column is-6-mobile ">
              <Link to={'/whatismediation'}>
                <span>
                  <i className="fa-solid fa-arrow-left"></i> Previous
                </span>

                <p className="faq-button-subtitle">What is mediation? </p>
              </Link>
            </button>

            <button className="faq-button column is-6-mobile">
              <Link to={'/whatmaybediscussed'}>
                <span>
                  Next <i className="fa-solid fa-arrow-right"></i>{' '}
                </span>

                <p className="faq-button-subtitle">What may be discussed? </p>
              </Link>
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default WhoDoWeHelp;
