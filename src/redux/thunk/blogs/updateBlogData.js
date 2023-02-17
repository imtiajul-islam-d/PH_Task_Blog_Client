import { updateContent } from "../../actions/blogAction";

const updateBlogData = (id, blog, navigate) => {
    return async (dispatch, getState) => {
      const res = await fetch(`https://ph-task-blog-server.vercel.app/updateBlog/${id}`, {
        method: "PUT",
        body: JSON.stringify(blog),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.acknowledged && data.modifiedCount > 0) {
        dispatch(
          updateContent({
            _id: id,
            ...blog,
          })
        );
        navigate("/admin")
      }else{
          window.alert("Sorry something went wrong")
      }
    };
  };
  export default updateBlogData;