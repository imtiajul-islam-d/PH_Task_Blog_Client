import { Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);
  console.log(blogs);
  return (
    <section className="container max-w-7xl mx-auto px-5 lg:px-3 min-h-[85vh]">
      <Space wrap className="my-3 mt-5">
        <button className="px-5 py-2 border hover:border-yellow-500 hover:text-yellow-500">
          Sort by last upload
        </button>
        <button className="px-5 py-2 border hover:border-yellow-500 hover:text-yellow-500">
          Sort by the first upload
        </button>
      </Space>
      {/* content */}
      <section>
        <section className="pb-3 dark:bg-gray-800 dark:text-gray-100">
          <div className="container py-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold">WORLD IS YOURS</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {blogs?.map((blog) => (
                <BlogCard key={blog._id} blog={blog}></BlogCard>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
