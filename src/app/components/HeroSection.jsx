import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero-section py-2 px-4 md:px-40 mt-36">
      <h1 className="text-center font-Metropolis text-gray-900 text-5xl font-bold leading-[142.5%] pb-2">
        Introducing{" "}
        <span className="bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text text-5xl font-Metropolis font-bold">
          {" "}
          Ignnite AI
        </span>
      </h1>
      <p className="text-center text-gray-900 text-lg font-semibold leading-160 flex justify-center content-center gap-1">
        Give us a topic, and we will create the best content for your different
        social media platform <Image src="/fire.svg" height="20" width="20" alt="fire emoji" />
      </p>

      <div className="text-center mt-8">
        <Link href="/dashboard" className="px-10 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-extrabold ">Get AI-ing Now!</Link>
      </div>
    </div>
  );
};

export default HeroSection;
