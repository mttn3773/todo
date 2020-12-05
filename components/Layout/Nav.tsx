import React, { useContext } from "react";
import Link from "next/link";
import { useMeQuery, useLogoutMutation } from "src/generated/graphql";
import { useRouter } from "next/router";
import { Context } from "store/globalStore";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  const { state, dispatch } = useContext(Context);
  const { data, loading } = useMeQuery();
  const [logout] = useLogoutMutation();
  const router = useRouter();
  const handleLogout = async () => {
    const logeedOut = await logout();
    router.reload();
  };

  let links = null;
  if (loading) {
    links = <div className="">Loading...</div>;
  }
  if (data?.me?.username) {
    links = (
      <>
        <li>{data.me.username}</li>
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      </>
    );
  }
  if (!data?.me && !loading) {
    links = (
      <>
        <li>
          <Link href="/signin">SignIn</Link>
        </li>
        <li>
          <Link href="/signup">SignUp</Link>
        </li>
      </>
    );
  }
  return (
    <nav>
      <div className="logo">todo</div>
      <ul>{links}</ul>
    </nav>
  );
};

export default Nav;
