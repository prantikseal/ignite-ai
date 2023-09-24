import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="px-10 bg-white shadow-md bg-blur bg-opacity-30 backdrop-blur-lg backdrop-filter hidden lg:block border-r-[#E1E1E1]">
      <div className="h-full">
      <Link className="block ml-24 mr-2 py-3" href="/dashboard">
        <span className="flex items-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-google-home mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.072 21h-14.144a1.928 1.928 0 0 1 -1.928 -1.928v-6.857c0 -.512 .203 -1 .566 -1.365l7.07 -7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363 .362 .566 .853 .566 1.365v6.857a1.928 1.928 0 0 1 -1.928 1.928z" />
            <path d="M7 13v4h10v-4l-5 -5" />
            <path d="M14.8 5.2l-11.8 11.8" />
            <path d="M7 17v4" />
            <path d="M17 17v4" />
          </svg>{" "}
          Home
        </span>
      </Link>
      <Link className="block ml-24 mr-2 py-3" href="/dashboard/vid">
        <span className="flex items-center whitespace-nowrap ">
          <Image
            src="/vid.png"
            alt="video"
            height={26}
            width={26}
            className="mr-2"
          />{" "}
          For Video Content
        </span>
      </Link>
      <Link className="block ml-24 mr-2 py-3" href="/dashboard/smm">
        <span className="flex items-center whitespace-nowrap">
          <Image
            src="/sm-content.png"
            alt="social media"
            height={26}
            width={26}
            className="mr-2"
          />{" "}
          For SM Content
        </span>
      </Link>
      </div>
    </aside>
  );
};

export default SideBar;
