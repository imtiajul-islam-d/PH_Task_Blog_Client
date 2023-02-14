import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const showDetails = blog?.details.substring(0, 100);
  return (
    <>
      <article className="flex flex-col dark:bg-gray-900 shadow-md cursor-pointer">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={blog?.image}
          />
        </Link>
        <div className="flex flex-col flex-1 p-6">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></Link>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
          >
            {blog?.title}
          </Link>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {blog?.details ? showDetails + " ..." : ""}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <button className="px-3 py-2 border border-gray-100 hover:border-yellow-500">
              Details
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
