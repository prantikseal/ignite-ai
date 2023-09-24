"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const SocialInputSection = () => {
  const [selected, setSelected] = useState(null);
  const [topicValue, setTopicValue] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRadioChange = (value) => {
    setSelected(value);
  };

  const handleTopicInputChange = (event) => {
    setTopicValue(event.target.value);
  };

  const handleReset = () => {
    setSelected(null);
    setTopicValue("");
    setGeneratedText("");
  };
  const generateText = () => {
    if (!selected || !topicValue){
      setErrorMessage("Please select a social media platform and enter the topic");

    } else{
      setErrorMessage("")
      window.scrollBy({
        top: 130,
        behavior: "smooth",
      });
      const text =  "Generating...";
      setGeneratedText(text);
      contentGenerator();
    }
  };

  const contentGenerator = () => {
    const apiEndpoint = "/api/chat";
    const requestData = {
      prompt: `I need a ${selected} caption on ${topicValue} in the limits of words you know for social media . The plot must be creative and original.Please dont use too much professional or complex words.`,
    };

    console.log(requestData)

    axios
      .post(apiEndpoint, requestData)
      .then((response) => {
        // Handle the response data
        console.log("Response:", response.data);
        setGeneratedText(`${response.data.completionResponse}`)
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  const renderRadio = (id, label, value, svg) => {
    return (
      <label
        htmlFor={id}
        className={`cursor-pointer bg-white p-6 rounded-lg border shadow-md block ${
          selected === value ? "border border-blue-500" : ""
        }`}
      >
        <div className="flex justify-start items-start">
          <div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                selected === value ? "text-blue-500" : ""
              }`}
            >
              {label} {svg}
            </h3>
            <p className="text-gray-600">
              Generate the best content on {label.toLowerCase()} on your
              preferred topic
            </p>
          </div>
          <input
            type="radio"
            id={id}
            name="generatorType"
            value={value}
            className="mt-1"
            checked={selected === value}
            onChange={() => handleRadioChange(value)}
          />
        </div>
      </label>
    );
  };

  return (
    <>
      <div className="container w-full flex justify-start flex-col">
        <h2 className="text-gray-900 font-bold text-2xl mb-4">
          Social Content Generation
        </h2>
        <h3 className="text-gray-600 font-medium text-sm mb-2">
          Select Platform
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Item 1 */}
          {renderRadio("twitter", "Twitter", "twitter")}

          {/* Item 2 */}
          {renderRadio("linkedin", "LinkedIn", "linkedin")}

          {/* Item 3 */}
          {renderRadio("facebook", "Facebook", "facebook")}
          {renderRadio("threads", "Threads", "threads")}
          {renderRadio("instagram", "Instagram", "instagram")}
        </div>

        <div className="w-full mt-6">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Write your topic here"
            value={topicValue}
            onChange={handleTopicInputChange}
          />
        </div>

        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}

        <div className="flex justify-between w-full mt-4">
          <button
            className="bg-rose-100 hover:bg-rose-300 text-rose-600 font-metropolis font-semibold text-lg py-2 px-4 rounded-lg border border-rose-500 flex justify-between items-center gap-2"
            onClick={handleReset}
          >
            Reset{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_60_1878)">
                <path
                  d="M3.26807 12.043C3.70503 13.4661 4.58328 14.7134 5.77583 15.6045C6.96839 16.4956 8.41345 16.9843 9.90207 17C11.624 17.0212 13.2936 16.4081 14.5925 15.2774C15.8914 14.1466 16.7288 12.5775 16.9451 10.869C17.1578 9.16051 16.7335 7.43354 15.7531 6.01821C14.7728 4.60289 13.3053 3.59848 11.6311 3.197C9.95648 2.79194 8.19141 3.01674 6.67182 3.82863C5.15223 4.64052 3.9842 5.9828 3.39007 7.6"
                  stroke="#FF6060"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 4V8H7"
                  stroke="#FF6060"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_1878">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button
            className="text-white text-lg font-extrabold leading-[1.245rem] rounded-[0.5rem] bg-blue-500 py-2 px-4 hover:bg-blue-700"
            onClick={generateText}
          >
            Generate ✨
          </button>
        </div>

        <div className="output-section mt-4">
          {generatedText && (
            <div className="mt-6">
              <div className="bg-white rounded-lg p-4 shadow-md border">
                <h4 className="text-lg font-semibold mb-2">Generated Text</h4>
                <div className="text-gray-700 animate-fade-in">
                {
                generatedText === "Generating..." ? (
                  <Image src="/1476.gif" alt="Loading" width={26} height={26} />
                ) : (
                  ""
                )
              }
                  {generatedText}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialInputSection;
