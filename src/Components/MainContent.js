import React from "react";

export default function MainContent() {
  // main contect function
  return (
    <main
      className="font-inter text-white tracking-tight
                 bg-[#282D35] bg-reactlogo bg-no-repeat
                 bg-[right_-16rem_center] 
                 h-screen"
    >
      <h1 className="text-5xl font-bold ml-2 pt-20 px-4">
        Fun facts about React:
      </h1>
      <ol
        className="list-disc list-outside marker:text-[#61DAFB] 
                   marker:text-2xl text-xl ml-20 mt-8 max-w-[400px]"
      >
        <li className="p-2">Was first released in 2013.</li>
        <li className="p-2">Was originally created by Jordan Walke.</li>
        <li className="p-2">Has well over 100k stars on GitHub.</li>
        <li className="p-2">Is maintained by Facebook.</li>
        <li className="p-2">
          Powers thousands of enterprise apps, including mobile apps.
        </li>
      </ol>
    </main>
  );
}
