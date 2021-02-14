/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, navigate } from 'gatsby';

import Hero from '../PageComponents/Hero/Hero';

import Layout from '../components/layout';
import SEO from '../components/seo';

import img_01_1x from './images/section_img_01_1x.jpg';
import img_01_2x from './images/section_img_01_2x.jpg';

import img_01_mobile_1x from './images/section_img_01_mobile_1x.jpg';
import img_01_mobile_2x from './images/section_img_01_mobile_2x.jpg';

import img_02_1x from './images/section_img_02_1x.jpg';
import img_02_2x from './images/section_img_02_2x.jpg';

import img_02_mobile_1x from './images/section_img_02_mobile_1x.jpg';
import img_02_mobile_2x from './images/section_img_02_mobile_2x.jpg';

import img_03_1x from './images/section_img_03_1x.jpg';
import img_03_2x from './images/section_img_03_2x.jpg';

import img_03_mobile_1x from './images/section_img_03_mobile_1x.jpg';
import img_03_mobile_2x from './images/section_img_03_mobile_2x.jpg';

import quote from './images/quote.svg';

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />

      <section className="section">
        <div className="container">
          <h3>What makes us awesome</h3>
          <div className="container grids col-1 sm-2 lg-3">
            <div>
              <picture className="regulation-intro__bg-image">
                <source srcSet={`${img_01_1x} , ${img_01_2x} 2x`} media="(min-width: 960px)" />
                <source srcSet={`${img_01_mobile_1x} , ${img_01_mobile_2x} 2x`} media="(min-width: 320px)" />
                <img srcSet={`${img_01_1x} , ${img_01_2x} 2x`} alt="image" />
              </picture>
            </div>
            <div className="section-content">
              <p>Add remote-based sales coordinators to your team to generate more leads and close more sales!</p>
              <p>Costs are typically 50% less than hiring someone locally!</p>
              <p>
                Complete resource control. Your ITT developers work exclusively for you, as virtual employees. We can
                deliver the technical talent you need, when you need it, for as long as you need it.
              </p>
            </div>
            <div className="section-content">
              <p>Our off-shore resources are provided on a full-time basis and are fully dedicated to you. </p>
              <p>100% U.S. owned and operated.</p>
              <p>
                We respect our clients’ privacy. As a U.S. company, ITT complies with all U.S. intellectual property and
                data protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_gray">
        <div className="container">
          <h3>Our Talent = More Sales!</h3>
          <div className="container grids col-1 sm-2">
            <div>
              <p>
                Successful sales organizations need resources beyond just salespeople. There are leads to be generated,
                data to be entered into your CRM, meetings to be scheduled and reports to be compiled.
              </p>
              <p>
                Remote Sales Solutions is the go-to source for sales organizations that are looking to scale. We provide
                our clients with Sales Coordinators / Sales Development Resources (SDR) and CRM administrators using a
                proven staff augmentation model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_orange">
        <div className="container">
          <h3>What makes us awesome</h3>
          <div className="container grids col-1 sm-2 lg-3">
            <div>
              <picture className="regulation-intro__bg-image">
                <source srcSet={`${img_02_1x} , ${img_02_2x} 2x`} media="(min-width: 960px)" />
                <source srcSet={`${img_02_mobile_1x} , ${img_02_mobile_2x} 2x`} media="(min-width: 320px)" />
                <img srcSet={`${img_02_1x} , ${img_02_2x} 2x`} alt="image" />
              </picture>
            </div>
            <div className="section-content">
              <p>
                <b>Your Requirements</b> – Provide RSS with your job requirements. What is the role going to entail and
                what specific skillset or experience are you looking for? This is no different than what you would do to
                make a local hire.
              </p>
              <p>
                <b>Hire</b> (well sort of…) – Once you choose the best candidate for your role, RSS will have you sign a
                contract to engage that person on a on a full-time / fully dedicated basis.
              </p>
            </div>
            <div className="section-content">
              <p>
                <b>Interview</b> – RSS will use our vast network to match your needs with one of our fully vetted
                resources. We provide you with resumes and schedule interviews. You are welcome to interview as many
                candidates as you would like.
              </p>

              <p>
                <b>Success</b> – The resource you choose joins your team. They are fully managed by you, but work from
                one of our offices. You simply pay us monthly to retain this resource.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>We Speak Sales!</h3>
          <div className="container grids col-1 sm-2">
            <div>
              <p>
                Our founders and management have a history of leading successful sales organizations. We understand the
                importance of being able to leverage resources beyond just salespeople to drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_gray">
        <div className="container">
          <h3>About us</h3>
          <div className="container grids col-1 sm-2 lg-3">
            <div>
              <p>
                Founded in 2020, RSS has its corporate headquarters in Southern California and four development centers
                in Europe. This enables Murano to provide our clients with a comprehensive suite of highly affordable
                software development and IT team staffing services while unequivocally guaranteeing security for
                software and intellectual property, as governed by U.S. laws.
              </p>
              <p>
                Our services: Architecting, designing, developing, testing and documenting software applications;
                providing support and ongoing maintenance.
              </p>
            </div>
            <div className="section-content">
              <p>
                Murano specializes in assembling and managing dedicated development teams of highly skilled technology
                professionals that augment a company’s in-house IT resources. We provide and manage a dedicated
                full-time team of hand-picked technical resources that augment and operate as an extension of your
                company’s internal IT team. This ensures you continuity, and the peace of mind that comes with knowing
                that we take full responsibility for the end result.{' '}
              </p>
            </div>
            <div className="section-content">
              <p>
                Our team of senior software professionals is comprised of skilled, experienced problem solvers, not just
                coders and technicians. Our managers and software architects have the business acumen to understand your
                demanding working standards and produce the high-quality software products you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_green">
        <div className="container">
          <h3>Testimonial</h3>
          <div className="container grids col-1 sm-2 lg-3">
            <div>
              <picture className="regulation-intro__bg-image">
                <source srcSet={`${img_03_1x} , ${img_03_2x} 2x`} media="(min-width: 960px)" />
                <source srcSet={`${img_03_mobile_1x} , ${img_03_mobile_2x} 2x`} media="(min-width: 320px)" />
                <img className="image-shadow" srcSet={`${img_03_1x} , ${img_03_2x} 2x`} alt="image" />
              </picture>
            </div>
            <div>
              <img className="quote" src={quote} alt="quote" />
              <p>
                Our 2 remote SDRs far exceeded our expectations and generated more than $1.5M in new opportunities this
                year. We once again surpassed our annual sales goal and wanted to thank RSS for being such a valuable
                partner.
              </p>
              <p>
                Vanessa Camara
                <span className="sign">VP Operations at Appulate</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>Contact us</h3>
          <div className="container grids col-1 sm-2">
            <div className="contact-form-box">
              <form
                className="contact-form"
                action="/thanks"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(event) => {
                  event.preventDefault();
                  navigate(`/thanks`);
                }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label>
                    Name
                    <input type="text" name="name" required />
                  </label>
                </p>
                <p>
                  <label>
                    Email
                    <input type="email" name="email" required />
                  </label>
                </p>
                <p>
                  <label>
                    Subject
                    <input type="text" name="subject" required />
                  </label>
                </p>
                <p>
                  <label>
                    Message
                    <textarea
                      placeholder="Please let us know how we can be of service?"
                      name="message"
                      required
                    ></textarea>
                  </label>
                </p>
                <p className="text-align-right">
                  <button className="button" type="submit">
                    Submit
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
