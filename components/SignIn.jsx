import { useSession, signIn, signOut } from "next-auth/react";

const SignIn = () => {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            signIn("google", { callbackUrl: process.env.NEXTAUTH_URL });
          }}
          className="outline_btn"
        >
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div>
      <button type="button" onClick={signOut} className="black_btn">
        Sign out
      </button>
    </div>
  );
};

export default SignIn;
