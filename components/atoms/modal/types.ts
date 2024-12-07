import { ReactNode } from "react";

export interface IModalPropTypes {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
    modalHeader? : ReactNode,
    modalFooter? : ReactNode,
    className?:string;
}
