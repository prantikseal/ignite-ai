import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" py-16 px-4 md:px-40">
      <h1 className="text-center font-Metropolis text-gray-900 text-5xl font-bold leading-[142.5%] pb-2">
        Introducing{" "}
        <span className="bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text text-5xl font-Metropolis font-bold">
          {" "}
          Ignite AI
        </span>
      </h1>
      <p className="text-center text-gray-900 text-lg font-semibold leading-160 flex justify-center content-center gap-1">
        Give us a topic, and we will create the best content for your different
        social media platform <Image src="/fire.svg" height="20" width="20" alt="fire emoji" />
      </p>
    </div>
  );
};

export default HeroSection;
