import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function SearchInput() {
  const [input, setInput] = useState<string>("");
  return (
    <div className="sm:bg-gray-100 bg-white w-full border rounded-md items-center px-4 py-3 flex">
      <input
        placeholder="Та юу хайж байна вэ?"
        className="outline-none bg-transparent w-full"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <SearchIcon className="w-7 h-7 cursor-pointer text-gray-600" />
    </div>
  );
}

export default SearchInput;
