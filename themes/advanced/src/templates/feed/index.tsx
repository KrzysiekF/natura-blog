import React from "react";
import { Helmet } from "react-helmet";

import useInfiniteFeed from "./useInfiniteFeed";

import { PageContext } from "./types";
import { useConfig } from "../../config";
import FeedListing from "../../components/FeedListing";

export type FeedTemplateProps = {
  pageContext: PageContext;
};

export type FeedTemplateContext = PageContext;

const FeedTemplate = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const { feedListing, feedElementRef } = useInfiniteFeed(pageContext);

  const config = useConfig();

  // Override the title for non-index feeds
  const getTitleOverride = () => {
    if (pageContext.feedId) {
      if (pageContext.feedType === "tag")
        return (
          <Helmet
            title={`Posts tagged as "${pageContext.feedId}" | ${config.website.title}`}
          />
        );

      if (pageContext.feedType === "category")
        return (
          <Helmet
            title={`Posts in category "${pageContext.feedId}" | ${config.website.title}`}
          />
        );
    }
    return null;
  };

  return (
    <div className="feed-wrapper" ref={feedElementRef}>
      {getTitleOverride()}
      <FeedListing listing={feedListing} />
    </div>
  );
};

export default FeedTemplate;
