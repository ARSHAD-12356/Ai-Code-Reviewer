import { React, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const options = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "php", label: "PHP" },
    { value: "ruby", label: "Ruby" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "typescript", label: "TypeScript" },
    { value: "kotlin", label: "Kotlin" },
    { value: "swift", label: "Swift" },
    { value: "dart", label: "Dart" },
    { value: "scala", label: "Scala" },
    { value: "perl", label: "Perl" },
    { value: "haskell", label: "Haskell" },
    { value: "elixir", label: "Elixir" },
    { value: "r", label: "R" },
    { value: "bash", label: "Bash" },
  ];

  const [selectedOptions, setSelectedOptions] = useState(options[0]);

  const customDarkStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1e1e1e",
      borderColor: "#333",
      color: "#fff",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#555",
      },
      width: "100%",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#1e1e1e",
      color: "#fff",
      width: "100%",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "#333"
        : state.isSelected
        ? "#555"
        : "#1e1e1e",
      color: "#fff",
      "&:active": {
        backgroundColor: "#444",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
      width: "100%",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#aaa",
      width: "100%",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
      width: "100%",
    }),
  };

  const [code, setCode] = useState("");
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyBbx020yELA22PFLCk89urNki0K37UGt7w",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function reviewCode() {
    setResponse("");
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `You are an expert-level software developer, skilled in writing efficient, clean, and advanced code.
I’m sharing a piece of code written in ${selectedOptions.value}.
Your job is to deeply review this code and provide the following:

1️⃣ A quality rating: Better, Good, Normal, or Bad.
2️⃣ Detailed suggestions for improvement, including best practices and advanced alternatives.
3️⃣ A clear explanation of what the code does, step by step.
4️⃣ A list of any potential bugs or logical errors, if found.
5️⃣ Identification of syntax errors or runtime errors, if present.
6️⃣ Solutions and recommendations on how to fix each identified issue.

Analyze it like a senior developer reviewing a pull request.

Code: ${code} 
`,
    });
    console.log(response.text);
    setResponse(response.text);
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <div
        className="main flex flex-col md:flex-row justify-between "
        style={{ height: "calc(100vh - 90px)" }} // Fixed spacing issue in the height calculation
      >
        {/* Left Container */}
        <div className="left h-[85%] md:h-[85%] w-[50%] md:w-[50%]">
          <div className="tabs w-full flex items-center gap-[10px] !px-5 !mb-3 !mt-5">
            <Select
              value={selectedOptions}
              options={options}
              onChange={(e) => {
                setSelectedOptions(e);
              }}
              styles={customDarkStyles}
            />
            {/* <button className="btnNormal bg-zinc-900 min-w-[120px] transition-all hover:bg-zinc-800">
              Fix Code
            </button> */}
            <button
              className="btnNormal bg-zinc-900 min-w-[120px] transition-all hover:bg-zinc-800"
              onClick={() => {
                if (code === "") {
                  alert("Please enter the code first");
                } else {
                  reviewCode();
                }
              }}
            >
              Review
            </button>
          </div>

          <Editor
            height="100%"
            className="editor"
            language={selectedOptions.value}
            value={code}
            theme="vs-dark"
            onChange={(e) => {
              setCode(e);
            }}
          />
        </div>

        {/* Right Container */}
        <div className="right !p-[10px] bg-zinc-900 w-[50%] h-[100%] overflow-scroll">
          <div className="toptab flex items-center justify-between h-[60px] border-b-[1px] border-[#27272a] border-t-[1px] ">
            <p className="font-[700] text-[17px] res">Response</p>
          </div>
          <div className="overflow-auto">
            {loading && <RingLoader color="#9333ea" />}
            <Markdown>{response}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

//
