import { LoginScreen } from "@/screens";
import { Metadata } from "next";

export const metadata:Metadata ={
    title:"Login"
}
const LoginPage = () => {
	return <LoginScreen />;
};

export default LoginPage;
