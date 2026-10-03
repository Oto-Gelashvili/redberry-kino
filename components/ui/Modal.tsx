"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CloseIcon } from "../icons/close";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  desc?: string;
}

export function Modal({ isOpen, onClose, title, children, desc }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[rgba(36,36,36,0.3)] backdrop-blur-[10px] transition duration-300 ease-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative z-10 w-[475px] rounded-[28px] border border-(--bg-raised) bg-(--bg) p-[3.2rem] shadow-[0px_20px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease-out data-closed:opacity-0 data-closed:scale-95 data-closed:translate-y-2"
          >
            <div className="flex justify-between pb-[2.4rem]">
              <div className="flex flex-col gap-[8px]">
                {title && <DialogTitle as="h3">{title}</DialogTitle>}
                {desc && (
                  <p className="BodyS text-(--text-secondary)">{desc}</p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="btn-icon self-baseline rounded-sm p-1 text-(--text-primary) hover:text-(--error) focus-visible:text-(--error) focus-visible:outline-offset-2 focus-visible:outline-(--error) transition-colors duration-400 cursor-pointer bg-transparent border-0"
              >
                <CloseIcon className="w-[24px] h-[24px] pointer-events-none" />
              </button>{" "}
            </div>

            <div>{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
