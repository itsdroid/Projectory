import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../state/auth/authSlice";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import {
  Workflow,
  Cloud,
  SquareTerminal,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
export default function () {
    const count = useSelector(state => state.auth.value)
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [notice, setNotice] = useState("");

   
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      staySignedIn: false,
    },
  });

  async function onSubmit(data) {
    setNotice("");
    // Replace this with your login API request.
    console.log("Login:", data);
    setNotice("Connect your authentication API to continue.");
  }

  const inputClass =
    "w-full bg-transparent text-sm text-white/90 outline-none placeholder:text-white/30";

  const fieldClass =
    "flex h-12 items-center gap-3 rounded-xl border border-white/[0.10] bg-black/20 px-3.5 transition focus-within:border-teal-300/50 focus-within:bg-black/30 focus-within:ring-2 focus-within:ring-teal-300/10";


    return   <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111619] px-4 py-8 font-sans text-white">

      {/* Soft, tropical Tahoe-inspired atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-teal-500/[0.15] blur-[120px]" />
        <div className="absolute -right-40 top-[10%] h-[480px] w-[480px] rounded-full bg-indigo-500/[0.13] blur-[130px]" />
        <div className="absolute -bottom-48 left-[25%] h-[430px] w-[430px] rounded-full bg-emerald-400/[0.09] blur-[120px]" />
        <div className="absolute bottom-10 right-[12%] h-64 w-64 rounded-full bg-orange-300/[0.06] blur-[100px]" />
      </div>

      {/* Login window */}
      <section className="relative w-full max-w-[420px] overflow-hidden rounded-[24px] border border-white/[0.13] bg-[#1c2025]/75 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-3xl sm:p-9">

        {/* Subtle glass highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Brand */}
        <header className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/15 bg-gradient-to-br from-teal-200/25 to-indigo-300/20 text-teal-100 shadow-inner shadow-white/5">
            <Workflow size={25} strokeWidth={1.7} />
          </div>

          <h1 className="text-[25px] font-semibold tracking-[-0.8px] text-white/95">
            Synthetix AI
          </h1>

          <p className="mt-1.5 text-sm text-slate-300/75">
            Sign in to your workspace
          </p>
        </header>

        {/* Social sign-in */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setNotice("Connect Google OAuth to enable sign-in.")}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10"
          >
            <Cloud size={18} strokeWidth={1.8} />
            Google
          </button>

          <button
            type="button"
            onClick={() => setNotice("Connect GitHub OAuth to enable sign-in.")}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10"
          >
            <SquareTerminal size={18} strokeWidth={1.8} />
            GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-white/[0.09]" />
          <span className="whitespace-nowrap text-xs text-slate-400">
            or continue with email
          </span>
          <span className="h-px flex-1 bg-white/[0.09]" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.8px] text-slate-300"
            >
              Email address
            </label>

            <div className={fieldClass}>
              <Mail size={17} className="shrink-0 text-slate-400/80" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                aria-invalid={!!errors.email}
                className={inputClass}
                {...register("email", {
                  required: "Email address is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
            </div>

            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-300">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[11px] font-medium uppercase tracking-[0.8px] text-slate-300"
              >
                Password
              </label>

              <button
                type="button"
                onClick={() => setNotice("Connect your password reset flow.")}
                className="text-xs text-teal-200/90 transition hover:text-teal-100"
              >
                Forgot password?
              </button>
            </div>

            <div className={fieldClass}>
              <LockKeyhole size={17} className="shrink-0 text-slate-400/80" />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                aria-invalid={!!errors.password}
                className={inputClass}
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must contain at least 8 characters.",
                  },
                })}
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((visible) => !visible)}
                className="shrink-0 text-slate-400 transition hover:text-white"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1.5 text-xs text-rose-300">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Stay signed in */}
          <label className="mb-6 flex w-fit cursor-pointer items-center gap-2.5 text-xs text-slate-300/85">
            <input
              type="checkbox"
              {...register("staySignedIn")}
              className="h-4 w-4 rounded accent-teal-400"
            />
            Stay signed in
          </label>

          {/* Primary action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-teal-700 to-teal-600 text-sm font-medium text-white shadow-lg shadow-teal-950/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-teal-300/40 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
            <LogIn size={17} strokeWidth={1.8} />
          </button>

          {notice && (
            <p role="status" className="mt-3 text-xs leading-5 text-teal-200">
              {notice}
            </p>
          )}
        </form>

        {/* Footer */}
        <footer className="mt-7 border-t border-white/[0.09] pt-6 text-center text-xs text-slate-400">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-teal-200 transition hover:text-teal-100"
          >
            Sign Up
          </a>
        </footer>
      </section>
    </main>
}