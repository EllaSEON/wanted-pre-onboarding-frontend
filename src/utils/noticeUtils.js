import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const notice = (status, text) => {
  if (status === "success") {
    return toast.success(text);
  } else if (status === "error") {
    return toast.error(text);
  }
};

export default notice;
