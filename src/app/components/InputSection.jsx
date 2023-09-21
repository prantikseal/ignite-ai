"use client";

import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown'

const InputSection = () => {
  const [platform, setPlatform] = useState("Others");
  const [tone, setTone] = useState("casual");
  const [customWord, setCustomWord] = useState("");
  const [idea, setIdea] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseText, setResponseText] = useState("Generating ...")

  const handlePlatformChange = (e) => {
    const selectedPlatform = e.target.value;
    setPlatform(selectedPlatform);
    const platformToWordCount = {
      twitter: 280,
      linkedin: 1300,
      instagram: 2200,
      youtube: 5000,
      threads: 500,
    };
    setCustomWord(platformToWordCount[selectedPlatform] || "");
  };

  const handleToneChange = (e) => {
    setTone(e.target.value);
  };

  const handleCustomWordChange = (e) => {
    setCustomWord(e.target.value);
  };

  const handleIdeaChange = (e) => {
    setIdea(e.target.value);
    const inputValue = e.target.value;
    // Calculate the word count
    const wordCounter = inputValue
      .split(/\s+/)
      .filter((word) => word !== "").length;

    setWordCount(wordCounter);
  };

  const handleCheckboxChange = () => {
    // Toggle the isChecked state when the checkbox is clicked
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your validation logic here
    if (wordCount < 10) {
      setErrorMessage("Word count must be at least 10.");
    } else if (!isChecked) {
      setErrorMessage("Please accept terms and conditions");
    } else {
      setErrorMessage("");
      setIsSubmit(!isSubmit); // Toggle isSubmit
      contentGenerator();
    }
  };

  const contentGenerator = () => {
    const apiEndpoint = "/api/chat";
    const requestData = {
      prompt: `I need a ${platform} caption on ${idea} in ${customWord} words in ${tone} tone. The plot must be creative and original.Please dont use too much professional or complex words.`,
    };

    axios
      .post(apiEndpoint, requestData)
      .then((response) => {
        // Handle the response data
        console.log("Response:", response.data);
        setResponseText(`${response.data.completionResponse}`)
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  return (
    <div className="mx-4 md:mx-52 mb-5">
      <form className="input-section">
        <div className="py-4 bg-black border-0 rounded-2xl">
          <div className="flex items-start lg:items-center flex-col lg:flex-row gap-4 border-b border-white pb-4 mb-4 px-4">
            {/* Platform Dropdown */}
            <div className="flex items-center space-x-2">
              <label htmlFor="platform" className="text-white font-semibold">
                Platform:
              </label>
              <select
                id="platform"
                name="platform"
                className="px-2 py-1 border rounded-full outline-none placeholder-grey-800 bg-black text-white"
                onChange={handlePlatformChange}
                value={platform}
                aria-label="Select Platform"
              >
                <option value="other">Others</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
                <option value="threads">Threads</option>
              </select>
            </div>

            {/* Tone Dropdown */}
            <div className="flex items-center space-x-2">
              <label htmlFor="tone" className="text-white font-semibold">
                Tone:
              </label>
              <select
                id="tone"
                name="tone"
                className="px-2 py-1 border rounded-full outline-none placeholder-grey-800 bg-black text-white"
                onChange={handleToneChange}
                value={tone}
                aria-label="Select Tone"
              >
                <option value="casual">Casual</option>
                <option value="professional">Professional</option>
              </select>
            </div>

            {/* Custom Word Input */}
            <div className="flex items-center space-x-2">
              <label htmlFor="customWord" className="text-white font-semibold">
                Word:
              </label>
              <input
                type="number"
                id="customWord"
                name="customWord"
                className="px-2 py-1 border rounded-full outline-none placeholder-grey-800 bg-black text-white appearance-none"
                value={customWord}
                onChange={handleCustomWordChange}
                placeholder="Enter the number of words"
                aria-label="Word Count Input"
                min="0"
              />
            </div>
          </div>

          {/* Input Box */}
          {isSubmit ? (
            <div className="text-white mb-4 px-4">
              <ReactMarkdown>
              {
                responseText
              }
              </ReactMarkdown>
            </div>
          ) : (
            <>
            <div className="mb-4 px-4">
            <label htmlFor="idea" className="sr-only">
              Describe your topic in details:
            </label>
            <textarea
              id="idea"
              name="idea"
              className="w-full border rounded placeholder-grey-600 text-white font-medium bg-black outline-none resize-none border-none h-24"
              placeholder="Describe your topic in details..."
              value={idea}
              onChange={handleIdeaChange}
              aria-label="Topic Description"
              required
              minLength="10"
            />
          </div>

          <div className="text-white text-xs font-medium text-end px-4">
            Minimum 10 words
          </div>
          </>
          )}
          
        </div>

        {errorMessage && (
          <div className="text-red-500 text-sm px-4 mb-2">{errorMessage}</div>
        )}

        {isSubmit ? (
          <button
            className="px-10 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-extrabold mt-12 w-100 text-end"
            onClick={() => {
              setIsSubmit(false);
              setResponseText("Generating...")
            }}
          >
            Back
          </button>
        ) : (
          <div className="submit-section flex justify-between pt-14">
            <div className="terms-and-conditions flex justify-center items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
                onChange={handleCheckboxChange}
                checked={isChecked}
                aria-label="Accept Terms and Conditions"
              />
              <label htmlFor="terms" className="text-black font-medium">
                I accept the Terms and Conditions
              </label>
            </div>
            <button
              className="px-10 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-extrabold"
              onClick={handleSubmit}
              aria-label="Generate"
            >
              Generate
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default InputSection;
