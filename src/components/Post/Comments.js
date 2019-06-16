import React from "react";
import PropTypes from "prop-types";
import { DiscussionEmbed, CommentCount } from "disqus-react";

import config from "../../../content/meta/config";

const Comments = props => {
  const { slug, theme, title } = props;
  const disqusShortname = "myamtech";
  const disqusConfig = {
    url: `${config.siteUrl}${slug}`,
    identifier: slug,
    title: title
  };

  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        <CommentCount shortname={disqusShortname} config={disqusConfig}>
          Comments
        </CommentCount>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .comments {
          margin: 0 -8px ${theme.space.default};
        }
      `}</style>
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  // disqus: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default Comments;
