import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlogAxios } from "../../axios/BlogAxios";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const allBlog = () => {
    BlogAxios.get("/posts/")
      .then((responce) => setBlog(responce.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allBlog();
  }, []);
  let list = blog.map(({ id, title, body }, index) => {
    return (
      <Fragment key={index}>
        <Card style={{ width: "25rem", margin: "20px" }}>
          <Card.Body>
            <Card.Title>
              <Link to={`/blog/${id}`}>
                <h3>
                  {" "}
                  {index + 1}. {title}
                </h3>
              </Link>
            </Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
        </Card>
      </Fragment>
    );
  });

  return (
    <>
      <div style={{marginTop:"2rem"}}>
        <marquee direction="left" height="50px">
          <b className="blognote" style={{ color: "red" }}>
            Note: This blogs are fetching with <u>Axios-Get Method</u> you can
            check this fake API data on{" "}
            <a href="https://jsonplaceholder.typicode.com/posts">
              FAKE JSON API
            </a>{" "}
            <pre> : ) click fake json API </pre>
          </b>
        </marquee>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {list}
        </div>
      </div>
    </>
  );
};

export default Blog;
