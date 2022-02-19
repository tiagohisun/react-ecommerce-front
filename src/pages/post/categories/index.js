import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "antd";

import { getPostsByCount } from "../../../functions/post";

const PostCard = ({ post }) => {
  return (
    <div
      className="col-md-4 wow slideInUp mb-4"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "slideInUp",
      }}
    >
      <div className="blog-item bg-light rounded overflow-hidden">
        <div
          className="blog-img position-relative img-thumbnail overflow-hidden"
          style={{ height: "150px" }}
        >
          <img
            classname="img-fluid img-thumbnail"
            src={
              post.images.length > 0
                ? post.images[0].url
                : "https://www.themepush.com/demo-moschino/wp-content/uploads/sites/15/2015/09/p1.jpg"
            }
            alt=""
          />
          <Link
            to={`/posts/category/${post.postcategory.slug}`}
            key={post.postcategory.slug}
            className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
          >
            {post.postcategory.name}
          </Link>
        </div>
        <div className="px-2">
          <Link to={`/posts/${post.slug}`} key={post.slug}>
            <h5 className="my-3">{post.title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PostBanner = ({ post }) => {
  return (
    <div
      className="bg-no-overlay mb-5"
      style={{
        background: `url(${
          post.images.length > 0
            ? post.images[0].url
            : "https://www.themepush.com/demo-moschino/wp-content/uploads/sites/15/2015/09/p1.jpg"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "#fff",
        height: "100%",
        paddingTop: "50px",
      }}
    >
      <div className="row text-center">
        <Link to={`/posts/${post.slug}`} key={post.slug}>
          <h1 className="text-white">{post.title}</h1>
        </Link>
      </div>
    </div>
  );
};

function CategoryPost() {
  const { slug } = useParams();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);
  const [totalResult, setTotalResult] = useState(0);

  const [recentposts, setRecentPosts] = useState([]);
  const [bannerposts, setBannerPosts] = useState([]);

  useEffect(() => {
    getPostsByCount(10).then((p) => {
      setRecentPosts(p.data.reverse());
    });
  }, []);

  useEffect(() => {
    getPostsByCount(1).then((p) => {
      setBannerPosts(p.data.reverse());
    });
  }, []);

  const handleChange = (page, limit) => {
    setCurrentPage(page);
    setCurrentLimit(limit);
  };

  const handleSearch = (value) => {
    if (value) {
      setCurrentPage(1);
      setCurrentLimit(10);
      setSearch(value);
    } else {
      setSearch("");
    }
  };

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API}/posts/getAll`, {
        page: currentPage,
        limit: currentLimit,
        categorySlug: slug,
        searchTerm: search,
      })
      .then((res) => {
        setPosts(res.data.result);
        setTotalResult(res.data.totalResult);
      });
  }, [slug, currentPage, currentLimit, search]);

  return (
    <div className="container">
      <nav className="my-5 navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/posts" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/posts/category/dental-news" className="nav-link">
                Dental News
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/posts/category/technology" className="nav-link">
                Technology
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/posts/category/education" className="nav-link">
                Education
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="carousel slide" style={{ height: "250px" }}>
        {bannerposts.map((post) => {
          return <PostBanner post={post} />;
        })}
      </div>

      <div className="row mt-5">
        <div className="col-lg-8">
          <div className="row">
            {posts.map((post) => {
              return <PostCard post={post} />;
            })}
          </div>
          <div className="row">
            <Pagination
              showSizeChanger
              pageSize={currentLimit}
              onChange={handleChange}
              defaultCurrent={1}
              current={currentPage}
              total={totalResult}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="mb-5 wow slideInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "slideInUp",
            }}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>

          <div
            className="mb-5 wow slideInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "slideInUp",
            }}
          >
            <div
              className="section-title section-title-sm position-relative mb-4"
              style={{ borderBottom: "3px solid #d8dcdf", fontSize: "20px" }}
            >
              <h3 className="mb-0 badge badge-dark">Recent Post</h3>
            </div>
            {recentposts.map((post) => {
              return (
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src={
                      post.images.length > 0
                        ? post.images[0].url
                        : "https://www.themepush.com/demo-moschino/wp-content/uploads/sites/15/2015/09/p1.jpg"
                    }
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <Link
                    to={`/posts/${post.slug}`}
                    key={post.slug}
                    className="h5 w-100 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    {post.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPost;
