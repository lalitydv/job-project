import Link from 'next/link';
import About from '../about/About';
import AppSection from '../app-section/AppSection';
import Blog from '../blog/Blog';
import CallToAction from '../call-to-action/CallToAction';
import LoginPopup from '../common/form/login/LoginPopup';
import Partner from '../common/partner/Partner';
import FooterDefault from '../footer/common-footer';
import Funfact from '../fun-fact-counter/Funfact';
import DefaulHeader2 from '../header/DefaulHeader2';
import MobileMenu from '../header/MobileMenu';
import Hero1 from '../hero/hero-1';
import JobCategorie1 from '../job-categories/JobCategorie1';
import JobFeatured1 from '../job-featured/JobFeatured1';
import Testimonial from '../testimonial/Testimonial';
import Recruiters from '../Homepages/Recruiters';

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero1 />
      {/* End Hero Section */}

      {/* <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
         
            <JobCategorie1 />
          </div>
        </div>
      </section> */}
      {/* End Job Categorie Section */}

      {/* <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>

          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section> */}
      {/* End Job Featured Section */}

      <section className="testimonial-section">
        <div className="container-fluid">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center">
            <h2>What our clients are saying</h2>
            <div className="text">
              Showing companies based on reviews and recent job openings
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          {/* <!-- Testimonial Carousel --> */}
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <Testimonial />
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      {/* <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
     
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section> */}
      {/* <!-- End Clients Section--> */}

      {/* <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <About />
          </div>

      
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
       
        </div>
      </section> */}
      <Recruiters />

      {/* <!-- End About Section --> */}

      {/* <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
   
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section> */}

      {/* <section className="app-section">
        <div className="auto-container">
          <AppSection />
        </div>
      </section> */}

      {/* <CallToAction /> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
