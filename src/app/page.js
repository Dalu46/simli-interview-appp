"use client";
import React, { useState, useEffect } from "react";
import Interview from "./components/Interview";


const Demo = () => {
  const [jobDescription, setJobDescription] = useState("");

  const avatar = {
    name: "Frank",
    openai_voice: "alloy",
    simli_faceid: "5514e24d-6086-46a3-ace4-6a7264e5cb7c",
    initialPrompt: `Your name is Frank, an interviewer hiring for a specific role. You are looking for a candidate whose expertise aligns closely with the following job description: ${jobDescription}. Please generate three interview questions that assess key qualifications and relevant experience. Begin by introducing yourself and asking the interviewee to share a bit about their background.`,
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <div className="flex flex-col items-center mt-4">
        <label htmlFor="job-description" className="font-bold mb-2">
          Add Job Description
        </label>
        <textarea
          id="job-description"
          placeholder="Enter job description, e.g., Responsibilities, Requirements"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-80 h-24 resize-none mb-4 text-black"
        />
      </div>

      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
        <div>
          <Interview
            openai_voice={avatar.openai_voice}
            simli_faceid={avatar.simli_faceid}
            initialPrompt={avatar.initialPrompt}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
