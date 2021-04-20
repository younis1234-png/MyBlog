import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import TagRow from "./TagRow";

export default function PostGrid({ posts }) {
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize]);

  useEffect(() => {
    window.scroll({
      top: 1100,
      left: 0,
      behavior: "smooth",
    });
  }, [current, pageSize]);

  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">
        {paginatedPosts.map((post, index) => (
          <div className="post-container">
            <figure>
              <Link to={`/post/${post?.id}`}>
                <img
                  // src={require(`../../assets/images/${post.image}`)}
                  src="https://images.unsplash.com/photo-1618858017121-6a4cb09a0154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt={post.image}
                />
              </Link>
            </figure>
            <TagRow tags={post.categories} />
            <h2>{post.title}</h2>
            <p className="author-text">
              <span className="author-text">
                By:
                <Link to={`/authors/${post.author}`}> {post.author}</Link>
              </span>
              <span> - {post.date}</span>
            </p>
            <p className="description-text">{post.description}</p>
            <Link to={post.link}>Read More...</Link>
          </div>
        ))}
      </section>
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  );
}
