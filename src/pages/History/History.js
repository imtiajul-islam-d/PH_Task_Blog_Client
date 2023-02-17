import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";

const History = () => {
  const { tags } = useSelector((state) => state.filter);
  const history = useSelector((state) => state.blogs.history);
  let content;
  console.log(history);
  if (tags.length) {
    // find similarity between two arrays
    const arr = tags.map((tag) =>
      history.filter((blog) => blog.blog.tags.includes(tag))
    );
    // convert multidimensional arrays into single array
    const result = arr.reduce((r, a) => r.concat(a), []);
    // remove common items
    const uniqueBlog = [...new Set(result)];

    content = uniqueBlog
      ?.sort(function (a, b) {
        return b.readedTime - a.readedTime;
      })
      .map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>);
  } else {
    content = history
      ?.sort(function (a, b) {
        return b.readedTime - a.readedTime;
      })
      .map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>);
  }
  console.log(content.length);
  return (
    <>
      <section>
        <section className="pb-3">
          <div className="container py-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold">
                LATEST READING BLOGS
              </h2>
            </div>
            <div className="min-h-[80vh] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {
                content?.length === 0 && <p className="px-2">Opps!! You did not read any blog yet!!</p>
              }
              {content}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default History;
