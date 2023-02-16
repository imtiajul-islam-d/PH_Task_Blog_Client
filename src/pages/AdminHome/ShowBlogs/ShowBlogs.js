import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import loadBlogData from "../../../redux/thunk/blogs/fetchBlogs";

const ShowBlogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);
  const blogs = useSelector((state) => state.blogs.blogs);
  let content;
  content = blogs
    ?.sort(function (a, b) {
      return b.time - a.time;
    })
    .map((blog, idx) => {
      return (
        <tr
          key={idx}
          className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
        >
          <td className="p-3">
            <p>{blog?.title}</p>
          </td>
          <td className="p-3">
            <img alt="" className="w-14 h-14 " src={blog?.image} />
          </td>
          <td className="p-3">
            <button className="bg-yellow-500 border border-yellow-500 text-black hover:bg-white hover:text-yellow-500 px-2 py-2 hover:border hover:border-yellow-500">
              Update
            </button>
          </td>
          <td className="p-3 text-right">
            <button>Delete</button>
          </td>
        </tr>
      );
    });
  console.log(blogs);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <div className="flex justify-end items-center">
        <Link className="bg-yellow-500 border border-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-3 py-2 hover:border hover:border-yellow-500">
          Add a blog
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="dark:bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Title</th>
              <th className="p-3">Image</th>
              <th className="p-3"></th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBlogs;
