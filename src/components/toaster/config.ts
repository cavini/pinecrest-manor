import { ToasterProps } from "react-hot-toast";

export const toasterConfig: ToasterProps = {
  toastOptions: {
    success: {
      duration: 3000,
    },
    error: {
      duration: 5000,
    },
    style: {
      fontSize: "16px",
      maxWidth: "500px",
      padding: "16px 24px",
      backgroundColor: "var(--color-grey-0)",
      color: "var(--color-grey-700)",
    },
  },
  containerStyle: {
    margin: "8px",
  },
  gutter: 12,
  position: "top-center",
};
