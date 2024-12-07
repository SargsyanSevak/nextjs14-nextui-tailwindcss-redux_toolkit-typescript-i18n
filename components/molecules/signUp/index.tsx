"use client";
import { ModalComponent } from "@/components/atoms";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import useLogin from "./_services/useLogin";
import { Input } from "@nextui-org/input";
import { Controller } from "react-hook-form";
import { Select, SelectItem } from "@nextui-org/select";
import { userTypes } from "@/mock";
import { colors } from "@/constants";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";

const SignUp = () => {
	const [open, setOpen] = useState<boolean>(false);

	const { control, handleSubmit, errors, handleformSubmit } = useLogin();

	return (
		<>
			<Button
				color="primary"
				className="bg-[#f0ebfa] text-black text-[12px] py-1 dark:bg-slate-200 dark:text-gray-700"
				onClick={() => setOpen(true)}
			>
				Sign Up
			</Button>
			<ModalComponent
				open={open}
				onClose={() => setOpen(false)}
				className="max-w-[800px]"
				modalHeader={
					<div className="mt-8 w-full">
						<h1 className="text-center md:text-[24px] text-[20px] font-bold">
							Create Your Account
						</h1>
						<p className="text-center md:text-[16px] text-[14px] font-normal">
							Enter your details to Sign Up
						</p>
					</div>
				}
			>
				<form
					action=""
					onSubmit={handleSubmit(handleformSubmit)}
					className="mt-4"
				>
					<div className="flex flex-wrap gap-4">
						<figure className="md:w-[calc(50%_-_16px)] w-full">
							<Controller
								control={control}
								render={({ field }) => (
									<Input
										isRequired
										label="Email"
										type="email"
										color={errors?.email?.message ? "danger" : "default"}
										{...field}
									/>
								)}
								name="email"
							/>
							{!!errors?.email?.message && (
								<p className="text-red-500 mt-2 text-sm">
									{errors?.email?.message}
								</p>
							)}
						</figure>
						<figure className="md:w-1/2 w-full">
							<Controller
								control={control}
								render={({ field }) => (
									<Input
										isRequired
										label="Password"
										type="password"
										color={errors.password?.message ? "danger" : "default"}
										{...field}
									/>
								)}
								name="password"
							/>
							{!!errors?.password?.message && (
								<p className="text-red-500 mt-2 text-sm">
									{errors?.password?.message}
								</p>
							)}
						</figure>
						<figure className="md:w-[calc(50%_-_16px)] w-full">
							<Controller
								control={control}
								render={({ field }) => (
									<Select
										isRequired
										label="User Type"
										color={errors.userType?.message ? "danger" : "default"}
										{...field}
									>
										{userTypes.map((type) => (
											<SelectItem key={type?.id}>{type?.label}</SelectItem>
										))}
									</Select>
								)}
								name="userType"
							/>
							{!!errors?.userType?.message && (
								<p className="text-red-500 mt-2 text-sm">
									{errors?.userType?.message}
								</p>
							)}
						</figure>
					</div>
					<div className="flex md:flex-row-reverse flex-col w-full mt-10 gap-4 pb-8">
						<Button
							color="primary"
							type="submit"
							className="py-6 bg-[#7a58d0] text-[16px] w-full"
							isDisabled={!!errors?.email || !!errors?.password}
						>
							Sign Up
						</Button>
						<Button
							type="button"
							color="danger"
							variant="bordered"
							className={`py-6 border-2 border-[${colors.medium_gray}] dark:border-gray-600 text-black dark:text-white text-[16px] w-full`}
							onPress={() => setOpen(false)}
						>
							Cancel
						</Button>
					</div>
				</form>
			</ModalComponent>
		</>
	);
};

export default SignUp;
