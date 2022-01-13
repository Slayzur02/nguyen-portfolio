import React from "react";

export default function ContentWrapper(props){
	return (
		<div className="pt-12 pb-12 w-3/4">
			{props.children}
		</div>
	)
}