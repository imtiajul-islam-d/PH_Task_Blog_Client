import { deleteContent } from "../../actions/filterAction";

const deleteBlog = (id) => {
  const confirm = window.confirm();
  if (!confirm) {
    return;
  }
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/deleteBlog/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.acknowledged && data.deletedCount > 0) {
      dispatch(deleteContent(id));
    }
  };
};
export default deleteBlog;
