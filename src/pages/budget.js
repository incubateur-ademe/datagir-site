import React from "react";
import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";

import Web from "src/components/layout/Web";
import Section from "src/components/layout/Section";

export default function Index(props) {
  return (
    <Web title={"Budget"}>
      <Section
        css={`
          blockquote {
            border-left: 4px solid ${(props) => props.theme.colors.main};
            padding: 0.5rem;
            background: ${(props) => props.theme.colors.tile};
          }
        `}
      >
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  );
}
export const pageQuery = graphql`
  query budget {
    mdx(slug: { eq: "budget" }) {
      body
    }
  }
`;
