"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Avatar } from "@nextui-org/avatar";
import { useState } from "react";

const LanguageSwitch = () => {
	const [lng, setLng] = useState<"ARM" | "RUS" | "ENG">("ARM");
	return (
		<div className="w-[140px]">
			<Select
				value={"ENG"}
				onChange={(e) => console.log(e.target.value)}
				
				// startContent={
				// 	<Avatar
				// 		alt="Argentina"
				// 		className="w-6 h-6"
				// 		src="https://flagcdn.com/am.svg"
				// 	/>
				// }
			>
				<SelectItem
					key="ARM"
					startContent={
						<Avatar
							alt="Argentina"
							className="w-6 h-6"
							src="https://flagcdn.com/am.svg"
						/>
					}
				>
					ARM
				</SelectItem>
				<SelectItem
					key="RUS"
					startContent={
						<Avatar
							alt="Venezuela"
							className="w-6 h-6"
							src="https://flagcdn.com/ru.svg"
						/>
					}
				>
					RUS
				</SelectItem>
				<SelectItem
					key="ENG"
					startContent={
						<Avatar
							alt="Brazil"
							className="w-6 h-6"
							src="https://flagcdn.com/us.svg"
						/>
					}
				>
					ENG
				</SelectItem>
			</Select>
		</div>
	);
};

export default LanguageSwitch;
