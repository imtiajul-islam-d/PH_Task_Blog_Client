import { addContent } from "../../actions/blogAction";

const addBlogData = (blog, navigate) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/postBlog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        addContent({
          _id: data?.insertedId,
          ...blog,
        })
      );
      navigate("/admin")
    }else{
        window.alert("Sorry something went wrong")
    }
  };
};
export default addBlogData;
