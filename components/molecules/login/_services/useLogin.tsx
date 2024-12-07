import { loginSchema } from "@/schemas/login.schema";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TLoginType = z.infer<typeof loginSchema>;

const useLogin = () => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TLoginType>({
		mode: "onSubmit",
		resolver: zodResolver(loginSchema),
	});
	const handleformSubmit = async (data: TLoginType) => {
		console.log(data);
	};
	return {
		control,
		handleSubmit,
		errors,
        handleformSubmit
	};
};

export default useLogin;
