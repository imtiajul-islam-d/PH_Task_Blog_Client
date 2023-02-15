import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import loadBlogData from "../../../redux/thunk/blogs/fetchBlogs";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogs.blogs);
  const detailsBlog = blogs?.find((blog) => blog._id === id);

  return (
    <section>
      <div className="p-5 mx-auto sm:p-10 md:p-16">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={detailsBlog?.image}
            alt=""
            className="w-full h-60 sm:h-96"
          />
          <div className="p-6 pb-12 m-4 mx-auto md:-mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-yellow-100">
            <div className="space-y-2 inline-block text-2xl font-semibold sm:text-3xl">
              {detailsBlog?.title}
            </div>
            <div className="justify-center">
              <p>{detailsBlog?.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
