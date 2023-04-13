import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
	const phone = useLoaderData();
	console.log(phone);

	return (
		<div>
			<div>{phone.name}</div>

			<img src={phone.image} alt="" />
		</div>
	);
};

export default Phone;
