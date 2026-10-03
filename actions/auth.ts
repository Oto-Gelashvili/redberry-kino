"use server";

export interface SignUpState {
  success?: boolean;
  error?: string;
}

export async function signUpAction(
  prevState: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  try {
    const response = await fetch(`${process.env.BACKEND_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message || "Failed to sign up." };
    }

    return { success: true };
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }
}
