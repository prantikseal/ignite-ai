import Link from "next/link";

export default function Profile() {
    return (
      <>
        <div className="h-screen py-4 px-4 md:px-40 text-center flex flex-col justify-center items-center">
          <h1 className=" font-black text-4xl">Profile</h1><br/>
          <p className="text-bold  text-xl mb-5">Profile Page Coming soon</p>
          <Link href="/" className="px-10 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-extrabold">
          Go Back to Home
          </Link>
        </div>
      </>
    )
  }