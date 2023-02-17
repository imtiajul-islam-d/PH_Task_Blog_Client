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
  console.log(blogs);
  let content;
  content = blogs
    ?.sort(function (a, b) {
      return b.blog.time - a.blog.time;
    })
    .map((blog, idx) => {
      return (
        <tr
          key={idx}
          className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
        >
          <td className="p-3">
            <p>{blog?.blog?.title}</p>
          </td>
          <td className="p-3">
            <img alt="" className="w-14 h-14 " src={blog?.blog?.image} />
          </td>
          <td className="p-3">
            <Link to="/admin/update" className="bg-yellow-500 border border-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-2 py-2 hover:border hover:border-yellow-500">
              Update
            </Link>
          </td>
          <td className="p-3 text-right">
            <button className="bg-red-500 px-2 py-2 text-white hover:text-red-500 hover:bg-white border border-red-500 ">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  console.log(blogs);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <div className="flex justify-end items-center">
        <Link to="/admin/add" className="bg-yellow-500 border border-yellow-500 text-white hover:bg-white hover:text-yellow-500 px-3 py-2 hover:border hover:border-yellow-500">
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
