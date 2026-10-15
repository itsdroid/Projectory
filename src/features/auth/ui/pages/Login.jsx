import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../state/auth/authSlice";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import {
    ArrowRight,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    Check,
    CircleHelp,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

export default function () {
    const count = useSelector(state => state.auth.value)
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // const {
    //     handleSubmit,
    //     onLoginSubmit
    // } = useAuth();


   const {
    register,
    onLoginSubmit,
    handleSubmit,
    onRegisterSubmit,
    password,
    errors
} = useAuth();


    return <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#11120F] px-4 py-8 text-white selection:bg-[#D7FF00] selection:text-black sm:px-6">
        <div className="relative z-10 grid w-full max-w-[1100px] grid-cols-1 overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#191A17]/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:min-h-[620px] lg:grid-cols-[1fr_0.88fr]">
            {/* Left promotional panel */}
            <section className="relative flex min-h-[380px] flex-col overflow-hidden bg-[#11120F] p-5 sm:p-8 lg:m-4 lg:rounded-[22px] lg:p-10">
                {/* Panel glow */}
                <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#D7FF00]/[0.09] blur-[100px]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#D7FF00]/[0.06] blur-[100px]" />

                {/* Brand */}
                <a href="/" className="relative z-10 flex w-fit items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D7FF00] text-[#11120F]">
                        <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path
                                d="M18.5 3.5 5 17h9l-1 11.5L27 14h-9l.5-10.5Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                        Projectory
                    </span>
                </a>

                {/* Promotional copy */}
                <div className="relative z-10 mb-6 mt-12 sm:mt-14 lg:mt-16">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7FF00]/20 bg-[#D7FF00]/[0.07] px-3 py-1.5 text-[11px] font-medium text-[#D7FF00]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D7FF00]" />
                        YOUR TEAM. ONE WORKSPACE.
                    </span>

                    <h2 className="max-w-[440px] text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[42px]">
                        Everything your team needs,
                        <span className="text-[#D7FF00]">
                            {" "}in one place.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-[380px] text-sm leading-6 text-[#92938D] sm:text-[15px]">
                        Plan projects, manage tasks, and keep your team aligned.
                        A focused workspace designed to help you get meaningful
                        work done.
                    </p>
                </div>

                {/* Minimal decorative workspace illustration */}
                <div className="relative mt-auto hidden min-h-[190px] flex-1 items-end sm:flex">
                    <div className="relative w-full max-w-[430px]">
                        {/* Back card */}
                        <div className="absolute -right-1 top-0 w-[68%] rotate-[4deg] rounded-2xl border border-white/[0.09] bg-[#22231F] p-4 opacity-60">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="h-2 w-20 rounded-full bg-white/20" />
                                <div className="h-6 w-6 rounded-lg bg-[#D7FF00]/15" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-8 rounded-lg bg-white/[0.04]" />
                                <div className="h-8 rounded-lg bg-white/[0.04]" />
                            </div>
                        </div>

                        {/* Front card */}
                        <div className="relative w-[78%] rounded-2xl border border-white/[0.1] bg-[#1C1D19] p-4 shadow-2xl">
                            <div className="mb-5 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-white">
                                        Project overview
                                    </p>
                                    <p className="mt-1 text-[10px] text-[#777970]">
                                        Team workspace
                                    </p>
                                </div>

                                <div className="flex -space-x-2">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1C1D19] bg-[#44483A] text-[9px] font-semibold">
                                        A
                                    </div>
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1C1D19] bg-[#74775D] text-[9px] font-semibold">
                                        S
                                    </div>
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1C1D19] bg-[#D7FF00] text-[9px] font-semibold text-[#11120F]">
                                        +3
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-[11px] text-[#92938D]">
                                    Tasks completed
                                </span>
                                <span className="text-xs font-semibold text-[#D7FF00]">
                                    76%
                                </span>
                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                                <div className="h-full w-[76%] rounded-full bg-[#D7FF00]" />
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-[10px] text-[#92938D]">
                                <Check size={13} className="text-[#D7FF00]" />
                                Your team's progress, at a glance.
                            </div>
                        </div>
                    </div>
                </div>

                <p className="relative z-10 mt-8 text-[11px] text-[#62635D]">
                    Less busywork. More meaningful progress.
                </p>
            </section>

            {/* Right login section */}
            <section className="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-12 lg:py-14 xl:px-16">
                {/* Form heading */}
                <div className="mb-8">
                    <div className="mb-7 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D7FF00] text-[#11120F]">
                            <svg
                                viewBox="0 0 32 32"
                                fill="none"
                                className="h-6 w-6"
                                aria-hidden="true"
                            >
                                <path
                                    d="M18.5 3.5 5 17h9l-1 11.5L27 14h-9l.5-10.5Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>

                        <div>
                            <p className="text-sm font-semibold tracking-tight">
                                Projectory
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#777970]">
                                Team workspace
                            </p>
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-[34px]">
                        Welcome back
                    </h1>

                    <p className="mt-2 text-sm text-[#92938D]">
                        Sign in to continue to your workspace.
                    </p>
                </div>

                {/* Login form */}
                <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>
                    {/* Email */}
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="mb-2 block text-xs font-medium text-[#E5E5DF]"
                        >
                            Email address
                        </label>

                        <div
                            className={`flex h-12 items-center gap-3 rounded-xl border bg-[#11120F] px-3.5 transition-colors ${errors.email
                                ? "border-red-500/70"
                                : "border-white/[0.09] focus-within:border-[#D7FF00]/60"
                                }`}
                        >
                            <Mail
                                size={17}
                                strokeWidth={1.7}
                                className="shrink-0 text-[#777970]"
                            />

                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@company.com"
                                aria-invalid={!!errors.email}
                                className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#62635D]"
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
                            <p className="mt-1.5 text-xs text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-xs font-medium text-[#E5E5DF]"
                            >
                                Password
                            </label>

                            <a
                                href="/forgot-password"
                                className="text-xs font-medium text-[#D7FF00] transition-colors hover:text-white"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <div
                            className={`flex h-12 items-center gap-3 rounded-xl border bg-[#11120F] px-3.5 transition-colors ${errors.password
                                ? "border-red-500/70"
                                : "border-white/[0.09] focus-within:border-[#D7FF00]/60"
                                }`}
                        >
                            <LockKeyhole
                                size={17}
                                strokeWidth={1.7}
                                className="shrink-0 text-[#777970]"
                            />

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                aria-invalid={!!errors.password}
                                className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#62635D]"
                                {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters.",
                                    },
                                })}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="shrink-0 text-[#777970] transition-colors hover:text-white"
                                aria-label={
                                    showPassword ? "Hide password" : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff size={17} strokeWidth={1.7} />
                                ) : (
                                    <Eye size={17} strokeWidth={1.7} />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="mt-1.5 text-xs text-red-400">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember me */}
                    <button
                        type="button"
                        onClick={() => setRememberMe((prev) => !prev)}
                        aria-pressed={rememberMe}
                        className="mt-5 flex items-center gap-2.5 text-xs text-[#A1A29B] transition-colors hover:text-white"
                    >
                        <span
                            className={`flex h-4 w-4 items-center justify-center rounded-[4px] border transition-colors ${rememberMe
                                ? "border-[#D7FF00] bg-[#D7FF00] text-[#11120F]"
                                : "border-[#55564F] bg-transparent"
                                }`}
                        >
                            {rememberMe && <Check size={12} strokeWidth={3} />}
                        </span>
                        Remember me
                    </button>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D7FF00] px-4 text-sm font-semibold text-[#11120F] transition-all duration-200 hover:bg-[#E4FF4A] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? (
                            <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#11120F]/30 border-t-[#11120F]" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                Sign in
                                <ArrowRight size={17} strokeWidth={2} />
                            </>
                        )}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/[0.08]" />
                    <span className="shrink-0 text-[11px] text-[#777970]">
                        New to TeamSync?
                    </span>
                    <div className="h-px flex-1 bg-white/[0.08]" />
                </div>

                {/* Registration */}
                <a
                    href="/register"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.1] text-sm font-medium text-[#E5E5DF] transition-colors hover:border-[#D7FF00]/40 hover:bg-white/[0.03]"
                >
                    Create an account
                </a>

                {/* Footer */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[11px] text-[#74756E]">
                    <a href="/privacy" className="transition-colors hover:text-white">
                        Privacy
                    </a>

                    <span className="h-1 w-1 rounded-full bg-[#45463F]" />

                    <a href="/terms" className="transition-colors hover:text-white">
                        Terms
                    </a>

                    <span className="h-1 w-1 rounded-full bg-[#45463F]" />

                    <a
                        href="/support"
                        className="flex items-center gap-1 transition-colors hover:text-white"
                    >
                        <CircleHelp size={13} />
                        Support
                    </a>
                </div>

                <p className="mt-4 text-center text-[10px] text-[#55564F]">
                    © {new Date().getFullYear()} TeamSync. All rights reserved.
                </p>
            </section>
        </div>
    </main>
}