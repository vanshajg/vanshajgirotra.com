import React from "react";
import { Link } from "gatsby";

export const Postpreview = ({ node }) => {
  const { frontmatter: { slug, tags, description, title }, timeToRead } = node;
  return (
    <div>
      <div><Link to={`/post/${slug}`} className="text-2xl underline text-indigo-500">{title}</Link> <span className="ml-1">~{timeToRead} minute{timeToRead > 1 ? 's' : ''}</span></div>
      <p>{description}</p>
    </div>
  );
};
