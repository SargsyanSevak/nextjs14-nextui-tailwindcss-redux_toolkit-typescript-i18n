"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/dropdown";

import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import ThemeSwitchComponent from "../theme-switcher";
import { Logo } from "@/components/atoms/icons";
import Login from "../login";
import SignUp from "../signUp";
import LanguageSwitch from "../lang-switcher";

const Navbar = () => {
	const hasUser = false;
	return (
		<NextUINavbar
			maxWidth="full"
			position="sticky"
			className="bg-gray-300 dark:bg-[#0E192D] h-16 md:px-4 px-2 flex relative"
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo color="black" className="dark:text:white" />
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex " justify="center">
				<NavbarItem className="hidden sm:flex gap-2">
					<h2 className="text-black dark:text-white text-2xl font-bold">NTL</h2>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex " justify="end">
				<NavbarItem className="hidden sm:flex gap-2 text-black">
					{/* <LanguageSwitch/> */}
					<ThemeSwitchComponent />

					{hasUser ? (
						<Dropdown>
							<DropdownTrigger>
								<div className="w-8 h-8 border-2 border-black flex justify-center items-center rounded-full cursor-pointer text-[10px]">
									SM
								</div>
							</DropdownTrigger>
							<DropdownMenu aria-label="Static Actions">
								<DropdownItem key="new">New file</DropdownItem>
								<DropdownItem key="copy">Copy link</DropdownItem>
								<DropdownItem key="edit">Edit file</DropdownItem>
								<DropdownItem
									key="delete"
									className="text-danger"
									color="danger"
								>
									Delete file
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					) : (
						<div className="flex items-center gap-2">
							<Login />
							<SignUp />
						</div>
					)}
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitchComponent />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};

export default Navbar;
