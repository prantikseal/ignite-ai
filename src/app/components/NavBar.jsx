import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blur bg-opacity-30 backdrop-blur-lg backdrop-filter fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto p-4 md:px-28 flex justify-between items-center">
        <div className="img-logo">
          <Link href="/" aria-label="logo">
            <Image src="/logo.png" alt="" width={126} height={79} />
          </Link>
        </div>
        <div className="profile-img">
          <Link href="/profile">
            {/* <Image
            src="/Avatar.png"
            width={40}
            height={40}
            alt="Picture of the author"
          /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user-circle"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
