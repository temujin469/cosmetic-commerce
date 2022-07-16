import React, { useState } from "react";

interface Props {
  title: string;
  content: string;
}

function Collapse({ title, content }: Props) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-xl font-medium md:text-2xl leading-4 text-gray-800">{title}</p>
        <button
          className="cursor-pointer rounded bg-gray-200 p-2"
          aria-label="show or hide"
        >
          <svg
            className={"transform " + (show ? "rotate-180" : "rotate-0")}
            width="15"
            height="11"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L5 5L1 1"
              stroke="#4B5563"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
          (show ? "block" : "hidden")
        }
        id="sect"
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;
