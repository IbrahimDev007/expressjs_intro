import React from "react";
import { useLoaderData } from "react-router-dom";

const Phones = () => {
	const phones = useLoaderData();
	return <div>phones {phones.length} </div>;
};

export default Phones;
