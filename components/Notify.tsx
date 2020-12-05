import React, { useContext, useEffect } from "react";
import { Context } from "store/globalStore";
import Loading from "./Loading";
import Toast from "./Toast";

interface NotifyProps {}

export const Notify: React.FC<NotifyProps> = ({}) => {
  const { state, dispatch } = useContext(Context);
  const { notify } = state;

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          message={{ title: "Error", body: notify.error }}
          bgColor="rgba(202, 67, 67, 0.8)"
          handleShow={() => {
            dispatch({ type: "NOTIFY", payload: {} });
          }}
        />
      )}
      {notify.success && (
        <Toast
          message={{ title: "Ok", body: notify.success }}
          bgColor="rgba(76, 204, 87, 0.8)"
          handleShow={() => {
            dispatch({ type: "NOTIFY", payload: {} });
          }}
        />
      )}
    </>
  );
};

export default Notify;
