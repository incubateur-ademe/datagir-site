import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'

import Section from 'src/components/layout/Section'
import User from './users/User'

const StyledSlider = styled(Slider)`
  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 1rem 0.5rem;

      opacity: 0.4;
      transition: opacity 200ms;

      &.slick-active {
        opacity: 1;
      }
      button  {
        width: 1rem;
        height: 1rem;
        color: transparent;
        border: none;
        border-radius: none;
        background-color: ${(props) => props.theme.colors.main};
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }
  .slick-arrow {
    position: absolute;
    top: 50%;
    width: 4rem;
    height: 4rem;
    transform: translateY(-50%);
    color: transparent;
    border: none;
    border-radius: none;
    background-color: transparent;
    cursor: pointer;

    &:before {
      content: '❯';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 7rem;
      line-height: 0.7;
      color: ${(props) => props.theme.colors.main};
    }
    &:focus {
      outline: none;
    }
  }
  .slick-prev {
    right: 100%;

    &:before {
      content: '❮';
    }
  }
  .slick-next {
    left: 100%;

    &:before {
      content: '❯';
    }
  }
  .slick-list {
    z-index: 2;
  }
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;

    > div {
      height: 100%;
    }
  }
`
export default function Users(props) {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___order }
        filter: { fileAbsolutePath: { regex: "/users/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              sector
              home
              buttons {
                label
                link
              }
              image {
                childrenImageSharp {
                  fluid(maxWidth: 384, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              quote
              signature
            }
          }
        }
      }
    }
  `)
  return (
    <Section id='users' small>
      <Section.Title>
        Nos Réutilisateurs{' '}
        {props.sector && (
          <>
            liés {props.sector === 'alimentation' ? "à l'" : 'au '}
            <Section.Sector color={props.sector}>
              {props.sector.charAt(0).toUpperCase() + props.sector.slice(1)}
            </Section.Sector>
          </>
        )}
      </Section.Title>
      <StyledSlider
        infinite={true}
        speed={500}
        autoplay={true}
        autoplaySpeed={10000}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              dots: true,
            },
          },
        ]}
      >
        {data.allMdx.edges
          .filter((user) => user.node.frontmatter.home)
          .map((user) => (
            <User key={user.node.slug} user={user.node.frontmatter} />
          ))}
      </StyledSlider>
    </Section>
  )
}
