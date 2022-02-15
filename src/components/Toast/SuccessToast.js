import { toast } from "react-toastify";

const SuccessToast = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 4000,
    style: {
      background: "white",
      color: "#1f2937",
      fontFamily: "Poppins, sans-serif",
      height: "auto",
    },
    hideProgressBar: false,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 25,
  });
};

export default SuccessToast;
