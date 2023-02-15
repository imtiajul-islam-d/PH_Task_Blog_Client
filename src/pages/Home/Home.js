import { Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";
import { toogleFtL, toogleLtF } from "../../redux/actions/filterAction";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const { FTL, LTF } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);
  console.log(FTL, LTF);
  return (
    <section className="container max-w-7xl mx-auto px-5 lg:px-3 min-h-[85vh]">
      <Space wrap className="my-3 mt-5">
        <button
          onClick={() => dispatch(toogleFtL())}
          className={`px-5 py-2 border hover:border-yellow-500 ${
            LTF && "bg-yellow-500 text-white"
          }`}
        >
          Sort by last upload
        </button>
        <button
          onClick={() => dispatch(toogleLtF())}
          className={`px-5 py-2 border hover:border-yellow-500 ${
            FTL && "bg-yellow-500 text-white"
          }`}
        >
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
            {LTF && (
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {blogs
                  ?.sort(function (a, b) {
                    return b.time - a.time;
                  })
                  .map((blog) => (
                    <BlogCard key={blog._id} blog={blog}></BlogCard>
                  ))}
              </div>
            )}
            {FTL && (
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {blogs
                  ?.sort(function (a, b) {
                    return a.time - b.time;
                  })
                  .map((blog) => (
                    <BlogCard key={blog._id} blog={blog}></BlogCard>
                  ))}
              </div>
            )}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
