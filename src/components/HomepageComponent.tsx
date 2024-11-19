"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveRight, Target } from "lucide-react";

import { navigationMenu } from "@/constants/constants";

const HomepageComponent = () => {
  const [navigationMenuItems, setNavigationMenuItems] = useState({
    ...navigationMenu,
    menu1: {
      ...navigationMenu.menu1,
      current: true,
    },
  });

  return (
    <div
      className="bg-hero bg-no-repeat bg-cover rounded-3xl h-[90vh] m-4 p-6  text-white"
      style={{
        clipPath:
          "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 50% 85%, 37% 100%, 15% 100%, 0 100%, 0% 85%)",
      }}
    >
      <div className="flex justify-between items-start m-2">
        <div className="flex justify-center items-center gap-3">
          <Target size={44} />
          <h1 className="text-3xl font-medium">Sunergy</h1>
        </div>

        <div className="flex flex-col gap-2 mr-10 w-[90px]">
          {Object.entries(navigationMenuItems)?.map((menuItem) => (
            <div
              key={menuItem[1]?.id}
              className="w-[calc(100% + 40px)] flex justify-start gap-3 items-center"
            >
              <span className="w-[30%]">
                {menuItem[1]?.current && <MoveRight size={20} />}
              </span>
              <Link
                href={menuItem[1]?.href}
                className="w-[70%] font-normal hover:italic hover:font-bold hover:text-slate-200 duration-400 font-medium"
                onMouseEnter={() => {
                  setNavigationMenuItems({
                    ...navigationMenu,
                    [menuItem[0]]: {
                      ...navigationMenu[menuItem[0]],
                      current: true,
                    },
                  });
                }}
                onMouseLeave={() => {
                  setNavigationMenuItems({
                    ...navigationMenu,
                    [menuItem[0]]: {
                      ...navigationMenu[menuItem[0]],
                      current: false,
                    },
                  });
                }}
              >
                {menuItem[1]?.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageComponent;
