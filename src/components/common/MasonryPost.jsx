import React from "react";
import TagRow from "./TagRow";

export default function MasonryPost({ post, tagsOnTop }) {
  const windowWidth = window.innerWidth;
  const imageBackground = {
    // backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`,
    backgroundImage: `url("https://images.unsplash.com/photo-1618858017121-6a4cb09a0154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")`,
  };
  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div
        className="image-text"
        style={{ justifyContent: tagsOnTop ? "space-between" : "flex-end" }}
      >
        <TagRow tags={post.categories} />
        <div>
          <h2 className="image-title"> {post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}
