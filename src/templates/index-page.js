import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <section className={'hero'}>
        <h3 className={'mb-0 mt-0 hello-1'}>Witaj</h3>
        <h3 className={'mt-0 hello-2'}>Bliżej Natury</h3>
        <p className={'mb-5'}>
          Przede wszystkim bardzo się cieszę, że tu jesteś i mam nadzieję, że zostaniesz.
        </p>
        <p>
          Znajdziesz tutaj informacje o ziołach, a naszych wielkich przodkach, kulturze słowiańskiej 
          oraz trochę prywaty na blogu (pod kątem uprawy ziół, warzyw itd.) Zapraszam!
        </p>
      </section>
      <section>
        <div className={'container mb-30 mt-30'}>
          <div className={'grid'}>
            <div className={'col-8'}>
              <h3>Co tam u mnie</h3>
              <BlogRoll />
            </div>
            <div className={'col-3'} data-push-left="off-1">
              <div className={'box'}>
                <h3 className={'box__header'}>
                  Z zielnika
                </h3>
                <div className={'box__content'}>
                  W trakcie przygotowania...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
