import { getAllContent } from "../../actions/blogAction";

const loadBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://ph-task-blog-server.vercel.app/getBlog");
    const blogs = await res.json();
    if (blogs.length) {
      dispatch(getAllContent(blogs));
    }
  };
};
export default loadBlogData;
