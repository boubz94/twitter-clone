import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function SideBarRow({ Icon, title }: Props) {
  return (
    <div className="flex cursor-pointer max-w-fit items-center  space-x-2 px-4 py-3 rounded-full transition-all durantion-200 hover:bg-gray-100 group">
      <Icon className="h-6 w-6" />
      <p className=" hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
}

export default SideBarRow;
