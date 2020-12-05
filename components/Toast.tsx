import React, { useContext, useEffect, useState } from "react";
import { Context } from "store/globalStore";

interface Message {
  title: string;
  body: string;
}

interface ToastProps {
  message: Message;
  bgColor: string;
  handleShow: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  bgColor,
  handleShow,
}) => {
  const { state, dispatch } = useContext(Context);
  const [autoHide, setAutoHide] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (autoHide) {
      clearTimeout(autoHide);
    }
    if (state.notify.error || state.notify.success) {
      setAutoHide(
        setTimeout(() => dispatch({ type: "NOTIFY", payload: {} }), 5000)
      );
    }
  }, [state]);
  return (
    <div className="toast" style={{ backgroundColor: bgColor }}>
      <div className="toast-header">
        <strong>{message.title}</strong>
        <button type="button" data-dismiss="toast" onClick={handleShow}>
          X
        </button>
      </div>
      <div className="toast-body">{message.body}</div>
    </div>
  );
};
export default Toast;
