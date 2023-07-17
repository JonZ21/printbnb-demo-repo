"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import SignIn from "./SignIn";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/big.png"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">printbnb</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/about-us" className="black_btn">
              About
            </Link>
            <Link href="/operator" className="black_btn">
              Become an Operator
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile-page" className="outline_btn">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-5">
            <Link href="/about-us" className="outline_btn">
              About
            </Link>
            {/* <SignIn /> */}
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.session ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <div className="flex gap-3 md:gap-5">
                  <Link href="/about-us" className="outline_btn">
                    About
                  </Link>
                  {/* <SignIn /> */}
                </div>
                {/* <Link
                  href="/profile-page"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link> */}
                {/* <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link> */}
                {/* <SignIn /> */}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex gap-3 md:gap-5">
              <Link href="/about-us" className="outline_btn">
                About
              </Link>
              {/* <SignIn /> */}
            </div>
            {/* <Link
                  href="/profile-page"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link> */}
            {/* <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link> */}
            {/* <SignIn /> */}
          </>
        )}
      </div>
    </nav>
  );
};
console.log("bob");
export default Nav;
