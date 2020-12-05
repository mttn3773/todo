import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useContext } from "react";
import { register } from "src/resolvers/User/UserResolvers";
import { toErrorMap } from "utils/toErrorMap";
import { useRouter } from "next/router";
import { MeDocument, MeQuery, useLoginMutation } from "src/generated/graphql";
import { Context } from "store/globalStore";

interface signinProps {}

export const signin: React.FC<signinProps> = ({}) => {
  const router = useRouter();
  const [login, { data, loading }] = useLoginMutation();
  const { dispatch, state } = useContext(Context);
  return (
    <div className="form">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async ({ username, password }, { setErrors }) => {
          const res = await login({
            variables: { username, password },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  me: data?.login?.user,
                },
              });
            },
          });
          if (res.data?.login?.error) {
            setErrors(toErrorMap(res.data?.login?.error));
            return dispatch({
              type: "NOTIFY",
              payload: {
                error: res.data?.login?.error.message ?? "",
              },
            });
          } else if (res.data?.login?.user) {
            dispatch({
              type: "NOTIFY",
              payload: {
                success: "You've succesefully signed in",
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

export default signin;
