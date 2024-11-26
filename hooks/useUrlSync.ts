"use client";

import { useEffect, useState } from "react";

export interface DynamicQueryOptions {
	[key: string]: string | undefined;
}

const useDynamicQuery = (initialOptions: DynamicQueryOptions = {}) => {
	const [options, setOptions] = useState<DynamicQueryOptions>(initialOptions);

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const newOptions: DynamicQueryOptions = {};

		for (const [key, value] of urlSearchParams.entries()) {
			newOptions[key] = value;
		}

		setOptions(newOptions);
	}, []);

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);

		Object.entries(options).forEach(([key, value]) => {
			if (value && value.trim() !== "" && value !== "null" && value !== "[]" && value !== "{}") {
				urlSearchParams.set(key, value);
			} else {
				urlSearchParams.delete(key);
			}
		});

		const queryString = urlSearchParams.toString();
		const newUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ""}`;

		if (newUrl !== window.location.href) {
			window.history.replaceState({}, "", newUrl);
		}
	}, [options]);

	return { options, setOptions };
};

export default useDynamicQuery;