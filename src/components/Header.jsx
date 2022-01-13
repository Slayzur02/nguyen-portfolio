import { NavLink } from "react-router-dom";
import React from "react";

function HeadLink({path, header}){
	return (
		<NavLink to = {path} className = {({isActive}) => isActive ? "ml-4 mr-4 font-bold	" : "ml-4 mr-4"}>
			{header}
		</NavLink>
	)
}

export default function Header() {
  return (
    <div className="w-2/5 border-t border-b border-double border-gray-200 pt-0.5 pb-0.5">
      <div className="flex justify-center border-t border-b border-double border-gray-200 align-middle w-full pt-4 pb-4">
        <HeadLink path = "about-me" header = "About Me"/>
        <HeadLink path = "projects" header = "Projects"/>
        <HeadLink path = "resume" header = "Resume"/>
        <HeadLink path = "miscellaneous" header = "Miscellaneous"/>
      </div>
    </div>
  );
}
