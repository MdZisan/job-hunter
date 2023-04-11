import React, { useEffect, useState } from "react";
import TitleHeader from "../Header/TitleHeader";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("/blogsPost.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
//   console.log(blogs);
  return (
    <>
        <TitleHeader>Blogs</TitleHeader>
    <div className="p-6 md:px-16">
      {blogs &&
        blogs.map((blog) => (
          <div key={blog.id}>
            <div className="p-4 rounded-lg text-xl btn-bg-color mt-3" >
              <div className="font-bold">Q: {blog.question}</div>
              <div>A: {blog.answer}</div>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Blogs;
