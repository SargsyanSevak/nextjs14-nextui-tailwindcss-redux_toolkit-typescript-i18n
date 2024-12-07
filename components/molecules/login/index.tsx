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

const Login = () => {
	const [open, setOpen] = useState<boolean>(false);

	const { control, handleSubmit, errors, handleformSubmit } = useLogin();

	return (
		<>
			<Button
				color="primary"
				className="bg-slate-500 text-[12px] py-1 dark:bg-slate-500"
				onClick={() => setOpen(true)}
			>
				Login
			</Button>
			<ModalComponent
				open={open}
				onClose={() => setOpen(false)}
				modalHeader={
					<div className="mt-8 w-full">
						<h1 className="text-center md:text-[24px] text-[20px] font-bold">
							Welcome Back!
						</h1>
						<p className="text-center md:text-[16px] text-[14px] font-normal">
							Enter your details to login
						</p>
					</div>
				}
			>
				<div>
					<form
						action=""
						onSubmit={handleSubmit(handleformSubmit)}
						className="mt-8"
					>
						<figure>
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
						<figure className="mt-[24px]">
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
						<figure className="mt-[24px]">
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
						<div className="flex py-2 px-1 justify-between mt-4">
							<Checkbox
								classNames={{
									label: "text-small",
								}}
							>
								Remember me
							</Checkbox>
							<Link
								className={`text-[#7a58d0] font-semibold`}
								href="#"
								size="sm"
							>
								Forgot password?
							</Link>
						</div>
						<div className="flex flex-col w-full mt-10 gap-4 pb-8">
							<Button
								color="primary"
								type="submit"
								className="py-6 bg-[#7a58d0] text-[16px]"
								isDisabled={!!errors?.email || !!errors?.password}
							>
								Login
							</Button>
							<Button
								type="button"
								color="danger"
								variant="bordered"
								className={`py-6 border-2 border-[${colors.medium_gray}] dark:border-gray-600 text-black dark:text-white text-[16px]`}
								onPress={() => setOpen(false)}
							>
								Cancel
							</Button>
						</div>
					</form>
				</div>
			</ModalComponent>
		</>
	);
};

export default Login;
