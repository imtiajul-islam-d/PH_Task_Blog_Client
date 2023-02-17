import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToHistory } from "../../redux/actions/blogAction";
import { toggleTag } from "../../redux/actions/filterAction";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.tags);
  const showDetails = blog?.blog?.details.substring(0, 100);
  const activeClass = "border-yellow-500 text-yellow-500";

  return (
    <>
      <article className="flex flex-col shadow-md hover:shadow-sm cursor-pointer">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52"
            src={blog?.blog?.image}
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
            className="text-xs tracking-wider uppercase hover:underline"
          >
            {blog?.blog?.title}
          </Link>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {blog?.blog?.details ? showDetails + " ..." : ""}
          </h3>
          <div className="flex flex-wrap justify-between mb-2 pt-3 text-xs">
            <Link
              onClick={() => dispatch(addToHistory(blog))}
              to={`/details/${blog?._id}`}
              className="px-3 py-2 border border-gray-100 hover:border-yellow-500"
            >
              Details
            </Link>
          </div>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-auto">
            {blog?.blog?.tags?.map((tag, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => dispatch(toggleTag(tag))}
                  className={`px-3 py-2 border ${
                    filter.includes(tag) ? activeClass : "border-white"
                  } hover:border-yellow-500`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
