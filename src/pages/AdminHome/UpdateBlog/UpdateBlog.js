import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import loadBlogData from "../../../redux/thunk/blogs/fetchBlogs";
import updateBlogData from "../../../redux/thunk/blogs/updateBlogData";

const UpdateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);
  const blogs = useSelector((state) => state.blogs.blogs);
  const updateableBlog = blogs?.find((blog) => blog._id === id);

  const tagData = updateableBlog?.blog?.tags?.toString().replaceAll(",", " ");
  //   console.log(updateableBlog?.blog.image);
  const centerClass = "text-center mt-5";
  const input = "w-full px-3 py-2 ";
  const inputDiv = "my-3";

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const d = new Date();

    const tags = form.tags.value.trim().split(" ");
    const newTags = tags.filter((n) => n);

    const time = d.getTime();
    const data = {
      image: form.image.value,
      title: form.title.value,
      details: form.details.value,
      tags: newTags,
      time
    };
    dispatch(updateBlogData(id, data, navigate));
  };
  return (
    <section>
      <div className="flex items-center justify-center my-2">
        <Link
          className="py-3 px-3 border hover:bg-yellow-500 hover:text-white"
          to="/admin"
        >
          Manage Blogs
        </Link>
      </div>
      <section className="min-h-[85vh] flex justify-center">
        <div className="w-full md:w-3/4 py-3 bg-gray-100">
          <h3 className={centerClass}>Update blog</h3>
          <form className="p-6" onSubmit={submitHandler}>
            <div className={inputDiv}>
              <label className={centerClass} htmlFor="image">
                Image Link:
              </label>
              <br />
              <input
                className={input}
                type="text"
                name="image"
                id="image"
                placeholder="Enter image link"
                maxLength={100}
                defaultValue={updateableBlog?.blog.image}
                required
              />
            </div>
            <div className={inputDiv}>
              <label className={centerClass} htmlFor="title">
                Title:
              </label>
              <br />
              <input
                className={input}
                type="text"
                name="title"
                id="title"
                placeholder="Enter blog Title"
                maxLength={100}
                defaultValue={updateableBlog?.blog.title}
                required
              />
            </div>
            <div className={inputDiv}>
              <label htmlFor="details">Blog:</label>
              <br />
              <textarea
                style={{ resize: "none" }}
                className={input}
                type="text"
                name="details"
                id="details"
                placeholder="Write the blog here"
                maxLength={2000}
                rows="10"
                defaultValue={updateableBlog?.blog.details}
                required
              />
            </div>
            <div className={inputDiv}>
              <label className={centerClass} htmlFor="tags">
                Tags:
              </label>
              <br />
              <input
                className={input}
                type="text"
                name="tags"
                id="tags"
                placeholder="tag1 tag2"
                maxLength={100}
                defaultValue={tagData}
                required
              />
            </div>
            <input
              className="py-2 px-3 border hover:border-black cursor-pointer"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </section>
    </section>
  );
};

export default UpdateBlog;
