import React from "react";

interface Props {
  Icon:(props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  name:string
}

function NavLink({Icon,name}:Props) {
  return (
      <div className="flex flex-col items-center hover:bg-gray-100/80 active:bg-gray-100/80 group rounded-md py-1 px-2">
        <Icon className="w-7 h-7 group-hover:text-primary text-gray-800" />
        <p className="hidden md:inline-block text-gray-700 font-medium">
          {name}
        </p>
      </div>
  );
}

export default NavLink;
