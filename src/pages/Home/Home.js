import { Space } from "antd";
import React from "react";

const Home = () => {
  return (
    <section className="container max-w-7xl mx-auto px-5 lg:px-3">
      <Space wrap className="my-3">
        <button className="px-5 py-2 border hover:border-yellow-500 hover:text-yellow-500">
          Sort by last upload
        </button>
        <button className="px-5 py-2 border hover:border-yellow-500 hover:text-yellow-500">
          Sort by the first upload
        </button>
      </Space>
      {/* content */}
      <section></section>
    </section>
  );
};

export default Home;
