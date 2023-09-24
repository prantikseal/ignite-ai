import Link from "next/link";
import InputSection from "../components/InputSection";

const name = "prantik";

export default function Dashboard({ name }) {
  return (
    <>
    
    <div className="w-full flex justify-start flex-col">

     {/* Imaginative Dashboard Content */}
     <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-3xl font-semibold mb-4">Hello User</h3>
        <p className="text-gray-600 mb-6">
          Welcome to Ignite AI, your creative partner in the digital world.
          Tell us your topic, and we&apos;ll craft engaging content for your
          favorite social media platforms.
        </p>


        <div className="bg-blue-100 rounded-lg p-4">
  <h4 className="text-lg font-semibold mb-2">What&apos;s In It For You</h4>
  <ul className="list-disc list-inside text-gray-700">
    <li>High-quality content for social media platforms</li>
    <li>Increased engagement and followers</li>
    <li>Save time and effort on content creation</li>
  </ul>
  <div className="mt-4">
    <p className="text-gray-700">
      Ready to get started? Explore our services:
    </p>
    <div className="flex justify-between mt-2 flex-col lg:flex-row">
      <div className="w-full p-2 lg:w-1/2">
        <Link
          href="/dashboard/vid"
          className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center"
        >
          Video Content
        </Link>
      </div>
      <div className="w-full p-2 lg:w-1/2">
        <Link
          href="/dashboard/smm"
          className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center"
        >
          Social Media Content
        </Link>
      </div>
    </div>
  </div>
</div>

      </div>

    </div>
    </>
  );
}
