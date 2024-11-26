import Cookies from "js-cookie";

export const useGetToken = () => {
	const token = Cookies.get("access_token");
	return !!token;
};

export function setAccessTokenCookie(token: string) {
	Cookies.set("access_token", token, { expires: 14, path: "/" });
}

export function removeTokenCookie() {
	Cookies.remove("access_token");
}
