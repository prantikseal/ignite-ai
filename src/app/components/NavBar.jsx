import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blur bg-opacity-30 backdrop-blur-lg backdrop-filter fixed top-0 w-full z-50">
      <div className="container mx-auto py-4 px-4 md:px-28 flex justify-between items-center">
        <div className="img-logo">
          <Link href="/" aria-label="logo">
            <Image src="/logo.png" alt="" width={126} height={79}/>
          </Link>
        </div>  
        <div className="profile-img">
          <Link href="/profile">
          <Image
            src="/Avatar.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
