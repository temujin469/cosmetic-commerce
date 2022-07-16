import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import { Category } from "../typings";

type Prop = {
  category: Category;
};

function SubMenu({ category }: Prop) {
  const [subnav, setSubnav] = useState<boolean>(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      <div className="flex items-center justify-between text-lg font-medium cursor-pointer border-l-4 hover:border-primary p-4 border-transparent">
        <Link href={`categoryegory/${category.id}`}>
          <a>{category.name}</a>
        </Link>
        <div onClick={category.subCategories && showSubnav}>
          {category.subCategories && subnav ? (
            <ChevronUpIcon className="w-6 h-6" />
          ) : category.subCategories ? (
            <ChevronDownIcon className="w-6 h-6" />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col bg-gray-100">
        {subnav &&
          category.subCategories.map((subcat) => (
            <Link href={`#`} key={subcat.id}>
              <a className="px-8 py-4 text-lg">{subcat.name}</a>
            </Link>
          ))}
      </div>
    </div>
  );
}
export default SubMenu;
