import React from "react";
import Article from "./Article";
//import blogData from "../data/blog";

function ArticleList({ posts }) {
  console.log("data: ", posts);
  //console.log("data.posts: ", data.posts);
  const articles = posts.map((article) => {
    return (
      <Article
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
      />
    );
  });
  return <main>{articles}</main>;
}

export default ArticleList;
