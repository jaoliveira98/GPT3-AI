import React from "react";
import Article from "../../components/article/Article.jsx";
import blog001 from "../../assets/blog001.jpg";
import blog002 from "../../assets/blog002.jpg";
import blog003 from "../../assets/blog003.jpg";
import blog004 from "../../assets/blog004.jpg";
import blog005 from "../../assets/blog005.jpg";
import "./blog.css";

const data = [
  {
    imgUrl: blog001,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog002,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog003,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog004,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog005,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_group">
          {data.map((item, index) => (
            <Article
              key={index}
              imgUrl={item.imgUrl}
              date={item.date}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
