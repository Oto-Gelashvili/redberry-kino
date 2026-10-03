"use client";

import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { Modal } from "@/components/ui/Modal";

export function AuthButtons() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-[1.2rem]">
        <button onClick={() => setIsSignUpOpen(true)} className="btn-primary">
          Sign up
        </button>
        <button className="btn-secondary">Log in</button>
      </div>

      <Modal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        title="Sign up"
        desc="Welcome to Kino XII"
      >
        <SignUpForm onSuccess={() => setIsSignUpOpen(false)} />
      </Modal>
    </>
  );
}
