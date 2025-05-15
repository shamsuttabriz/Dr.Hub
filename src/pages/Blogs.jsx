import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCalendarPlus } from "react-icons/fa";
import { useLoaderData } from "react-router";

function Blogs() {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="my-10 mx-4">
      <Helmet>
        <title>Dr.Hub | Blogs</title>
      </Helmet>
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-2">Blogs</h2>
        <p className="text-gray-500">
          A quick and clear guide to essential React concepts like useState,
          useEffect, hooks, and form handling for every developer.
        </p>
      </div>
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white mb-6 p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-3">
            <span className="mr-2">{blog.id})</span>
            <span>{blog.question}</span>
          </h2>
          <p className="text-gray-600 py-3 border border-dashed border-gray-400 border-s-0 border-e-0">
            <p className="text-blue-500 font-semibold">Answer: </p>
            {blog.ans}
          </p>
          <div className="flex items-center mt-3 gap-2 text-green-600">
            <p>
              <FaCalendarPlus />
            </p>
            <p>Added at {blog.addTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
