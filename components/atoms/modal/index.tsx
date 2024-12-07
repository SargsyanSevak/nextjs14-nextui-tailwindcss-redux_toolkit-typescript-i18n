"use client";
import React, { FC } from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { IModalPropTypes } from "./types";

const ModalComponent: FC<IModalPropTypes> = ({
	open,
	onClose,
	children,
	modalHeader,
	modalFooter,
    className
}) => {
	return (
		<div className="flex flex-col gap-2">
			<Modal
				isOpen={open}
				scrollBehavior="inside"
				onOpenChange={onClose}
				backdrop="blur"
                className={className}
			>
				<ModalContent>
					{modalHeader ? <ModalHeader>{modalHeader}</ModalHeader> : null}

					<ModalBody>{children}</ModalBody>
					{modalFooter ? <ModalHeader>{modalFooter}</ModalHeader> : null}
				</ModalContent>
			</Modal>
		</div>
	);
};

export default ModalComponent;
