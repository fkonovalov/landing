/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql, Link } from 'gatsby';

import Hero from '../PageComponents/Hero/Hero';

import Layout from '../components/layout';
import SEO from '../components/seo';

import img_01_1x from './images/section_img_01_1x.jpg';
import img_01_2x from './images/section_img_01_2x.jpg';

import img_01_mobile_1x from './images/section_img_01_mobile_1x.jpg';
import img_01_mobile_2x from './images/section_img_01_mobile_2x.jpg';

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

const HomePage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : '';
  return (
    <>
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
                  We respect our clients’ privacy. As a U.S. company, ITT complies with all U.S. intellectual property
                  and data protection laws.
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
                  Successful sales organizations need resources beyond just salespeople. There are leads to be
                  generated, data to be entered into your CRM, meetings to be scheduled and reports to be compiled.
                </p>
                <p>
                  Remote Sales Solutions is the go-to source for sales organizations that are looking to scale. We
                  provide our clients with Sales Coordinators / Sales Development Resources (SDR) and CRM administrators
                  using a proven staff augmentation model.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
