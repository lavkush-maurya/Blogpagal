import { useEffect, useState } from "react";
import { BlogAxios } from "../../axios/BlogAxios";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const SingleBlog = () => {
  const [blog, setBlog] = useState("");

  const { Id } = useParams();

  console.log("param", Id);

  const getBlog = () => {
    BlogAxios.get(`/posts/${Id}`)
      .then((response) => {
        // console.log("response", response);
        setBlog(response.data);
      })
      .catch((error) => {
        setBlog(error.message);
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  const myBlog =
    typeof blog === "string" ? (
      blog
    ) : (
      <>
      <Card style={{ width: "22rem",margin:"20px"}}>
          <Card.Body>
            <Card.Title ><h2>{blog.id}. {blog.title}</h2></Card.Title>
            <Card.Text>
            {blog.body}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );

  return <>{myBlog}</>;
};

export default SingleBlog;
