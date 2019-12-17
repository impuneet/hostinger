import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, author, slug, facebook } = props;
  const frontmatter = (post || {}).frontmatter;
  const title = ((post || {}).frontmatter || {}).title;
  const subTitle = ((post || {}).frontmatter || {}).subTitle;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;
  const htmlAst = (post || {}).htmlAst;

  //console.log(htmlAst);

  return (
    <Article>
      <PostHeader title={title} subTitle={subTitle} date={date} />
        <a href="https://www.a2hosting.com?aid=kajalsharma6123&amp;bid=ed1c4a67" target="_top"><img src="//affiliates.a2hosting.com/accounts/default1/banners/ed1c4a67.jpg" alt="" title="" width="728" height="90" /></a><img style="border:0" src="https://affiliates.a2hosting.com/scripts/imp.php?aid=kajalsharma6123&amp;bid=ed1c4a67" width="1" height="1" alt="" />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} facebook={facebook} />
      <a href="https://www.a2hosting.com?aid=kajalsharma6123&amp;bid=ed1c4a67" target="_top"><img src="//affiliates.a2hosting.com/accounts/default1/banners/ed1c4a67.jpg" alt="" title="" width="728" height="90" /></a><img style="border:0" src="https://affiliates.a2hosting.com/scripts/imp.php?aid=kajalsharma6123&amp;bid=ed1c4a67" width="1" height="1" alt="" />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Post;
