import React from 'react';
import './article.css';

const Article = ({ img }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={img} alt="article image" />
      </div>
      <div className="gpt3__article-content">
        <p>Sep 26, 2022</p>
        <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
