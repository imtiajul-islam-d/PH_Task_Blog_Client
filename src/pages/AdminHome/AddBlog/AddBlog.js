import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import addBlogData from "../../../redux/thunk/blogs/addBlog";

const AddBlog = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const centerClass = "text-center mt-5";
  const input = "w-full px-3 py-2 ";
  const inputDiv = "my-3";

  const submitHandler = (e) => {
    e.preventDefault()
    const form = e.target;
    const d = new Date()
    
    const tags = form.tags.value.trim().split(" ");
    const newTags = tags.filter(n => n)

    const time = d.getTime()
    const data = {
        blog: {
            image: form.image.value,
            title: form.title.value,
            details: form.details.value,
            tags: newTags,
            time
        }
    }
    dispatch(addBlogData(data, navigate))
  }
  return (
    <section>
      <div className="flex items-center justify-center my-2">
        <Link className="py-3 px-3 border hover:bg-yellow-500 hover:text-white" to="/admin">Manage Blogs</Link>
      </div>
      <section className="min-h-[85vh] flex justify-center">
        <div className="w-full md:w-3/4 py-3 bg-gray-100">
          <h3 className={centerClass}>Add a blog</h3>
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
                required
              />
            </div>
            <input
              className="py-2 px-3 border hover:border-black cursor-pointer"
              type="submit"
              value="Publish"
            />
          </form>
        </div>
      </section>
    </section>
  );
};

export default AddBlog;
