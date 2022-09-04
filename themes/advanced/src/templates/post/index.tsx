import React from "react";

import SEO from "../../components/SEO";

import {
  BlogPostBySlugQuery,
  PostFromJsonList,
  queryIntoPost,
} from "../../types";
import Article from "../../components/Article";
import FeedListing from "../../components/FeedListing";
import { Types } from "../../../index";
import Layout from "../../components/Layout";

type PageContext = {
  relatedPosts: PostFromJsonList;
};

export type PostTemplateProps = {
  data: BlogPostBySlugQuery;
  pageContext: PageContext;
};

const PostTemplate = ({
  data,
  pageContext,
}: PostTemplateProps): JSX.Element => {
  const post = queryIntoPost(data);

  return (
    <Layout>
      <SEO post={post} />
      <main className="post-wrapper">
        <Article post={post} />
        <div className="related-posts-wrapper">
          <h1>Related posts:</h1>
          <FeedListing
            listing={pageContext.relatedPosts.map(Types.jsonPostIntoPost)}
          />
        </div>
      </main>
    </Layout>
  );
};

export default PostTemplate;
