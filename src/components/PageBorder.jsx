import React from "react";

export default function PageBorder(props) {
	return (
		<div className="w-full pt-8 pb-8 pl-24 pr-24">
			<div className="h-full pb-24 border border-gray-300 pl-8 pr-8 flex flex-col items-center shadow-lg">
					{props.children}
			</div>
			
		</div>
	)
}