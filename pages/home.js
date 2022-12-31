import Slider from "react-slick";
import Layout from "../src/layout/Layout";
import { feedbackActive } from "../src/sliderProps";

import dynamic from "next/dynamic";
import Link from "next/link";
import Counter from "../src/components/Counter";

const PreMadeTemplateIsotope = dynamic(
  () => import("../src/components/Isotope/PreMadeTemplateIsotope"),
  {
    ssr: false,
  }
);

const index3 = () => {
  return (
    <Layout>
      <section className="hero-area-three pt-210 rpt-150 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="hero-content-three text-center pt-10 mb-40 wow fadeInUp delay-0-2s">
                <h1>
                  We Build Modern <span>IT Solution</span> for your Business
                </h1>
                <h3>
                We Build Modern <span style={{ color: "#04c9f5", fontWeight: "600"}}>Digital Marketing</span> for your Business
                </h3>
                <div className="hero-btns pt-5 wow fadeInUp delay-0-4s">
                  <Link href="/about">
                    <a className="theme-btn mt-15">
                      Create Your Website{" "}
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="theme-btn mt-15">
                      Schedule Meeting{" "}
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-three-image wow fadeInUp delay-0-6s">
            <img src="assets/images/hero/hero-three.png" alt="Hero" />
          </div>
        </div>
        <div className="hero-three-shapes">
          <div className="angle wow slideInDown delay-0-2s" />
          <div
            className="circle wow zoomInLeft delay-0-2s"
            data-wow-duration="2s"
          />
          <img
            className="shape-one"
            src="assets/images/shapes/hero-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/hero-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      <section className="features-area-two pt-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item-two mt-60 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fas fa-check" />
                </div>
                <h4>
                  249+ UI <br />
                  Components
                </h4>
                <p>
                  Sit amet conse adipiscin elitec eiusmod tempors incidide sesy
                  labore dolore another
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item-two color-two wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fas fa-check" />
                </div>
                <h4>
                  5630+ <br />
                  Web Templates
                </h4>
                <p>
                  Sit amet conse adipiscin elitec eiusmod tempors incidide sesy
                  labore dolore another
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item-two color-three mt-60 wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="fas fa-check" />
                </div>
                <h4>
                  9562+ <br />
                  Digital Assets
                </h4>
                <p>
                  Sit amet conse adipiscin elitec eiusmod tempors incidide sesy
                  labore dolore another
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item-two color-four wow fadeInUp delay-0-8s">
                <div className="icon">
                  <i className="fas fa-check" />
                </div>
                <h4>
                  4563+ <br />
                  Custome Addon
                </h4>
                <p>
                  Sit amet conse adipiscin elitec eiusmod tempors incidide sesy
                  labore dolore another
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
              <h1>About Us</h1>
              <h2>We are providing IT and Digital Marketing Solutions for more than 5 years</h2>
              <h3>Proactive & Effective Marketing Solutions</h3>
              <h4>For Small-To-Medium Sized Businesses</h4>
              <p>NetCom Business Solutions Private Limited is recognised as the Top Digital Marketing Company in Pune. 
                We focus on fostering the areas like Web Design &amp; Development, SEO, SMM, Digital Marketing Services, 
                Web Advertisements, and Developing Creative Content resulting in Fully Managed and Highly Successful 
                Online Marketing Campaigns. We aim to provide the best possible Strategic Outcome for our valuable 
                clients through our Affordable Digital Marketing Services under one roof. At Netcom Business Solutions, 
                we have onboard Dynamic Professionals and the Best Digital Marketers, helping us to create Powerful 
                Brand Experiences for our Clients. Business Owners belonging to different Industries, in need of 
                Business Growth and Marketing needs, resort to us for the best Business Plans. From
                <a href="/website-development">Web Design and development</a>, 
                <a href="/digital-marketing">Search Engine Optimization</a>, 
                <a href="/digital-marketing">Social Media Optimization</a>, and
                 <a href="/digital-marketing">Social Media Marketing</a>, 
                 we, as Among the Top digital marketing companies in pune, leave no stone unturned to let your 
                 business be armed with a distinctive tag.</p>
                <a href="/about">Read More</a>
              </div>
            </div>
          </div>
      </section>
      <section className="ww-do-area pt-100 pb-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="ww-do-content rmb-65">
                <div className="section-title mb-40 wow fadeInRight delay-0-2s">
                  <span className="sub-title style-two mb-15">WORKING PROCESS</span>
                  <h2>How Do We Work</h2>
                </div>
                <div className="feature-three-wrap">
                  <div className="feature-item-three wow fadeInRight delay-0-3s">
                    <i className="flaticon-technical-support" />
                    <div className="content">
                      <h4>Select Project</h4>
                      <p>
                      We are an expert Design, Media, and Digital Marketing agency handing out a full range of 
                      creative services designed to help our clients stand out from the crowd.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item-three color-two wow fadeInRight delay-0-4s">
                    <i className="flaticon-settings" />
                    <div className="content">
                      <h4>Project Analysis</h4>
                      <p>
                      Our team will work with you to drive your business ahead by creating websites that are built to 
                      last, memorable branding, clever SEO techniques, and paid ad campaigns that work best.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item-three color-three wow fadeInRight delay-0-5s">
                    <i className="flaticon-app-development" />
                    <div className="content">
                      <h4>Finished Project</h4>
                      <p>
                      We can deliver the results your company needs by providing innovative digital experiences for 
                      your target audience, improving customer interactions, and offering authentic engagement through market-leading campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ww-do-images">
                <img
                  className="image-one wow fadeInDown delay-0-2s"
                  src="assets/images/about/ww-do1.png"
                  alt="What We Do"
                />
                <img
                  className="image-two wow fadeInUp delay-0-4s"
                  src="assets/images/about/ww-do2.png"
                  alt="What We Do"
                />
                <img
                  className="image-three wow fadeInRight delay-0-6s"
                  src="assets/images/about/ww-do3.png"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-with-image-area bgc-black text-white py-130 rel z-1">
        <div className="container">
          <div className="feature-with-image">
            <div className="feature-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/features/feature1.png" alt="Feature" />
            </div>
            <div className="feature-content wow fadeInRight delay-0-2s">
              <h3>Advanced design features.</h3>
              <p>
                Sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliquaes suspendisse
                ultrices gravida commodo viverra mae cenas accumsan lacus vel
                facilisis.
              </p>
              <Link href="/service-details">
                <a className="read-more">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="feature-shape">
              <img src="assets/images/shapes/feature-shape.png" alt="Shape" />
            </div>
          </div>
          <div className="feature-with-image">
            <div className="feature-shape">
              <img src="assets/images/shapes/feature-shape.png" alt="Shape" />
            </div>
            <div className="feature-content wow fadeInRight delay-0-2s">
              <h3>We’ll instantly create a perfect design</h3>
              <p>
                Labore et do magna aliquaes suspendisse ultrices gravida commodo
                maeenas accumsan
              </p>
              <ul className="list-style-three">
                <li>Is it easy to create a website</li>
                <li>Build creative website easily</li>
              </ul>
              <Link href="/service-details">
                <a className="read-more">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="feature-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/features/feature2.png" alt="Feature" />
            </div>
          </div>
          <div className="feature-with-image">
            <div className="feature-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/features/feature3.png" alt="Feature" />
            </div>
            <div className="feature-content wow fadeInRight delay-0-2s">
              <h3>Share your ideas. Grow your brand</h3>
              <p>
                Sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliquaes suspendisse
                ultrices gravida commodo viverra mae cenas accumsan lacus vel
                facilisis.
              </p>
              <Link href="/service-details">
                <a className="read-more">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="feature-shape">
              <img src="assets/images/shapes/feature-shape.png" alt="Shape" />
            </div>
          </div>
        </div>
      </section>
      <section className="project-area-two pt-130 pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-15">
                  Pre-made Template
                </span>
                <h2>Let’s See Our Popular Website Template</h2>
              </div>
            </div>
          </div>
          <PreMadeTemplateIsotope />
        </div>
      </section>
      <section className="feature-area-four pb-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title style-two mb-15">OUR SERVICES</span>
            <h2>We providing exclusive services for your business</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-3s">
                <h4>
                  <i className="flaticon-drag-and-drop" />
                  <Link href="/service-details">
                    <a>Web Development</a>
                  </Link>
                </h4>
                <Link href='/'>
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-5s">
                <h4>
                  <i className="flaticon-responsive-1" />
                  <Link href="/service-details">Edit by Device</Link>
                </h4>
                <p>
                  Discover the ultimate creation experien eams. Work the same
                  site at the same time feedback assign custom roles {`&amp;`}
                  permissions
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-7s">
                <h4>
                  <i className="flaticon-email" />
                  <Link href="/service-details">Email Campaign</Link>
                </h4>
                <p>
                  Discover the ultimate creation experien eams. Work the same
                  site at the same time feedback assign custom roles {`&amp;`}
                  permissions
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-3s">
                <h4>
                  <i className="flaticon-monitor" />
                  <Link href="/service-details">Simple to use</Link>
                </h4>
                <p>
                  Discover the ultimate creation experien eams. Work the same
                  site at the same time feedback assign custom roles {`&amp;`}
                  permissions
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-5s">
                <h4>
                  <i className="flaticon-user-experience" />
                  <Link href="/service-details">Increase Leads</Link>
                </h4>
                <p>
                  Discover the ultimate creation experien eams. Work the same
                  site at the same time feedback assign custom roles {`&amp;`}
                  permissions
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-7s">
                <h4>
                  <i className="flaticon-coding-1" />
                  <Link href="/service-details">Developer Mode</Link>
                </h4>
                <p>
                  Discover the ultimate creation experien eams. Work the same
                  site at the same time feedback assign custom roles {`&amp;`}
                  permissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="statistics-area-two bgc-lighter bgs-cover pt-130 pb-100 rel z-1"
        style={{
          backgroundImage:
            "url(assets/images/features/support-features-bg.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="statistics-two-content mb-30 rmb-35 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Company Statistics
                  </span>
                  <h2>
                    {`We're`} the best web development agency more achievement
                  </h2>
                </div>
                <p>
                  Start building your first prototype in no time. Ogency
                  intuitive, drag {`&amp;`} drop interface gives you all the
                  building blocks that you need to get started! No skills
                  required.
                </p>
                <Link href="/about">
                  <a className="theme-btn mt-15">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="statistics-two-counters mt-30">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                    <div className="counter-item counter-text-wrap wow fadeInLeft delay-0-2s">
                      <i className="flaticon-startup" />

                      <Counter end={2365} />
                      <span className="counter-title">Projects complete</span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                    <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s">
                      <i className="flaticon-global" />
                      <Counter end={9632} />
                      <span className="counter-title">
                        Trusted Global Clients
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6 offset-xl-1">
                    <div className="counter-item counter-text-wrap wow fadeInLeft delay-0-2s">
                      <i className="flaticon-rating" />
                      <Counter end={8504} />
                      <span className="counter-title">Expert Team Member</span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                    <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s">
                      <i className="flaticon-trophy" />
                      <Counter end={6763} />
                      <span className="counter-title">Projects complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-two-area py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-two-image rmb-65 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/about/why-choose-us-two.png"
                  alt="why choose us"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="why-choose-two-content wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title style-two mb-15">
                    Why Choose Us
                  </span>
                  <h2>Great Web solutions that you can trust</h2>
                </div>
                <ul className="list-style-one">
                  <li>
                    <div className="content">
                      <h5>Easy Customize</h5>
                      <p>
                        We use strategic marketing tactics have been ese proven
                        programming complex functions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h5>{`Chat &amp; Messaging`}</h5>
                      <p>
                        We use strategic marketing tactics have been eses proven
                        programming complex functions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Payment Gatway</h5>
                      <p>
                        We use strategic marketing tactics have been eses proven
                        programming complex functions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback-area pb-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20">
                  Clents Feedback
                </span>
                <h2>3,000+ Positive reviews by our satisfied clients</h2>
              </div>
            </div>
          </div>
          <Slider {...feedbackActive} className="feedback-active">
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo1.png" alt="Logo" />
              </div>
              <h4>On the other hand denounes with indignwy</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Jonathan B. Bohnert</h5>
                  <span>CEO {`&amp;`} Founder</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-4s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo2.png" alt="Logo" />
              </div>
              <h4>Custom programming fores most complex functions</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author2.jpg" alt="Author" />
                <div className="content">
                  <h5>Nicholas R. Gomez</h5>
                  <span>Medical Officers</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-6s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo3.png" alt="Logo" />
              </div>
              <h4>We use strategic marketing tactics be proven work.</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author3.jpg" alt="Author" />
                <div className="content">
                  <h5>James R. Lawrence</h5>
                  <span>Junior Manager</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo1.png" alt="Logo" />
              </div>
              <h4>On the other hand denounes with indignwy</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Jonathan B. Bohnert</h5>
                  <span>CEO {`&amp;`} Founder</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo2.png" alt="Logo" />
              </div>
              <h4>Custom programming fores most complex functions</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author2.jpg" alt="Author" />
                <div className="content">
                  <h5>Nicholas R. Gomez</h5>
                  <span>Medical Officers</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo3.png" alt="Logo" />
              </div>
              <h4>We use strategic marketing tactics be proven work.</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author3.jpg" alt="Author" />
                <div className="content">
                  <h5>James R. Lawrence</h5>
                  <span>Junior Manager</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="feedback-shape one">
          <img src="assets/images/feedback/man1.jpg" alt="Man Shape" />
        </div>
        <div className="feedback-shape two">
          <img src="assets/images/feedback/man2.jpg" alt="Man Shape" />
        </div>
      </section>
    </Layout>
  );
};
export default index3;
