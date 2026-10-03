"use client";

import { useActionState, useEffect } from "react";
import { signUpAction, SignUpState } from "@/actions/auth";

interface SignUpFormProps {
  onSuccess: () => void;
}

const initialState: SignUpState = {};

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      onSuccess();
    }
  }, [state.success, onSuccess]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state.error && (
        <div className="rounded bg-red-500/10 p-3 text-sm text-red-500">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Name</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          required
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white outline-none focus:border-white/30"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          placeholder="user@example.com"
          required
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white outline-none focus:border-white/30"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Password</label>
        <input
          name="password"
          type="password"
          placeholder="••••••••"
          required
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white outline-none focus:border-white/30"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary mt-2 w-full py-2 disabled:opacity-50"
      >
        {isPending ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
