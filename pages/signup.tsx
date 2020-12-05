import React, { useContext, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRegisterMutation } from "src/generated/graphql";
import { toErrorMap } from "utils/toErrorMap";
import { useRouter } from "next/router";
import { Context } from "store/globalStore";

interface signupProps {}

export const signup: React.FC<signupProps> = ({}) => {
  const router = useRouter();
  const [register, { loading }] = useRegisterMutation();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="form">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async ({ username, password }, { setErrors }) => {
          const res = await register({ variables: { username, password } });
          if (res.data?.register?.error) {
            setErrors(toErrorMap(res.data?.register?.error));
            return dispatch({
              type: "NOTIFY",
              payload: {
                error: res.data.register.error.message ?? "",
              },
            });
          } else if (res.data?.register?.user) {
            dispatch({
              type: "NOTIFY",
              payload: {
                success: "You've succesefully signed up",
              },
            });
            return router.push("/");
          }
          return;
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-wrapper">
              <Field name="username" />
              <ErrorMessage
                name="username"
                className="error-message"
                component="div"
              />
            </div>
            <div className="input-wrapper">
              <Field name="password" type="password" />
              <ErrorMessage
                name="password"
                className="error-message"
                component="div"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default signup;
