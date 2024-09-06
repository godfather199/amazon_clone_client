import {category_Filter_List} from '@/utils/categoryFilterList'
import { useState } from 'react';



type CategoryFilterType = {
    currentCategory: string;
    handle_Current_Category: (value: string) => void;
}


function CategoryFilter({
  currentCategory,
  handle_Current_Category,
}: CategoryFilterType) {
  return (
    <div
      //   style={{ border: "3px solid red" }}
      className="flex items-center justify-around w-[60%] "
    >
      {category_Filter_List.map((item) => (
        <div
          //   style={{ border: "3px solid white" }}
          key = {item.title}
          className={`${
            currentCategory === item.title ? "bg-blue-200" : "bg-blue-500"
          }  p-3 rounded-md shadow-lg hover:bg-blue-400`}
          onClick={() => handle_Current_Category(item.title)}
        >
          <span
            // style={{ border: "3px solid purple" }}
            className="text-white text-sm font-bold min-w-[4rem] flex items-center justify-center "
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CategoryFilter