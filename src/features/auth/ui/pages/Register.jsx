import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ArrowRight,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    UserRound,
    Check,
    CircleHelp,
    Pointer,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";


export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        onRegisterSubmit,
        password,
        errors,
    } = useAuth();

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#11120F] px-4 py-8 text-white selection:bg-[#D7FF00] selection:text-black sm:px-6">
            <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#D7FF00]/[0.045] blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D7FF00]/[0.04] blur-[120px]" />


            <div className="relative z-10 grid w-full max-w-[1100px] grid-cols-1 overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#191A17]/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:min-h-[680px] lg:grid-cols-[1fr_0.88fr]">
                <section className="relative flex min-h-[320px] flex-col overflow-hidden bg-[#11120F] p-5 sm:p-8 lg:m-4 lg:rounded-[22px] lg:p-10">
                    <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#D7FF00]/[0.09] blur-[100px]" />
                    <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#D7FF00]/[0.06] blur-[100px]" />


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
                            TeamSync
                        </span>
                    </a>
                    <div className="relative z-10 mb-6 mt-12 sm:mt-14 lg:mt-16">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7FF00]/20 bg-[#D7FF00]/[0.07] px-3 py-1.5 text-[11px] font-medium text-[#D7FF00]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D7FF00]" />
                            BUILT FOR TEAMS THAT BUILD
                        </span>

                        <h2 className="max-w-[440px] text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[42px]">
                            Great work starts with
                            <span className="text-[#D7FF00]">
                                {" "}great teamwork.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-[380px] text-sm leading-6 text-[#92938D] sm:text-[15px]">
                            Bring your projects, tasks, and people together.
                            Create your workspace and start moving your ideas forward.
                        </p>
                    </div>


                    <div className="relative mt-auto hidden min-h-[200px] flex-1 items-end sm:flex">
                        <div className="relative w-full max-w-[430px]">

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


                            <div className="relative w-[80%] rounded-2xl border border-white/[0.1] bg-[#1C1D19] p-4 shadow-2xl">
                                <div className="mb-5 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-white">
                                            Your workspace
                                        </p>
                                        <p className="mt-1 text-[10px] text-[#777970]">
                                            Everything in sync
                                        </p>
                                    </div>

                                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#D7FF00]/10 text-[#D7FF00]">
                                        <UserRound size={16} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        { label: "Design system", width: "w-[85%]" },
                                        { label: "Website launch", width: "w-[65%]" },
                                        { label: "Product planning", width: "w-[75%]" },
                                    ].map((task) => (
                                        <div
                                            key={task.label}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[#D7FF00]/40 text-[#D7FF00]">
                                                <Check size={10} strokeWidth={2.5} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="mb-1.5 text-[10px] text-[#B7B8B0]">
                                                    {task.label}
                                                </p>
                                                <div className="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                                                    <div
                                                        className={`h-full rounded-full bg-[#D7FF00]/70 ${task.width}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="relative z-10 mt-8 text-[11px] text-[#62635D]">
                        One workspace. Your entire team.
                    </p>
                </section>

                <section className="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-12 lg:py-12 xl:px-16">
                    {/* Heading */}
                    <div className="mb-7">
                        <div className="mb-6 flex items-center gap-3">
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
                                    TeamSync
                                </p>
                                <p className="mt-0.5 text-[11px] text-[#777970]">
                                    Team workspace
                                </p>
                            </div>
                        </div>

                        <h1 className="text-3xl font-semibold tracking-tight sm:text-[34px]">
                            Create account
                        </h1>

                        <p className="mt-2 text-sm text-[#92938D]">
                            Get started with your team workspace.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onRegisterSubmit)} noValidate>
                        {/* Full name */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="mb-2 block text-xs font-medium text-[#E5E5DF]"
                            >
                                Full name
                            </label>

                            <div
                                className={`flex h-11 items-center gap-3 rounded-xl border bg-[#11120F] px-3.5 transition-colors ${errors.name
                                    ? "border-red-500/70"
                                    : "border-white/[0.09] focus-within:border-[#D7FF00]/60"
                                    }`}
                            >
                                <UserRound
                                    size={17}
                                    strokeWidth={1.7}
                                    className="shrink-0 text-[#777970]"
                                />

                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                    aria-invalid={!!errors.name}
                                    className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#62635D]"
                                    {...register("name", {
                                        required: "Full name is required.",
                                        minLength: {
                                            value: 2,
                                            message: "Name must contain at least 2 characters.",
                                        },
                                        maxLength: {
                                            value: 80,
                                            message: "Name cannot exceed 80 characters.",
                                        },
                                    })}
                                />
                            </div>

                            {errors.name && (
                                <p className="mt-1.5 text-xs text-red-400">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-xs font-medium text-[#E5E5DF]"
                            >
                                Email address
                            </label>

                            <div
                                className={`flex h-11 items-center gap-3 rounded-xl border bg-[#11120F] px-3.5 transition-colors ${errors.email
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
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="mb-2 block text-xs font-medium text-[#E5E5DF]"
                            >
                                Password
                            </label>

                            <div
                                className={`flex h-11 items-center gap-3 rounded-xl border bg-[#11120F] px-3.5 transition-colors ${errors.password
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
                                    autoComplete="new-password"
                                    placeholder="Create a password"
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


                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-xs font-medium text-[#E5E5DF]"
                            >
                                Confirm password
                            </label>

                            <div
                                className={`flex h-11 items-center gap-3 rounded-xl border bg-[#11120F] px-3.5 transition-colors ${errors.confirmPassword
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
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="Re-enter your password"
                                    aria-invalid={!!errors.confirmPassword}
                                    className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#62635D]"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password.",
                                        validate: (value) =>
                                            value === password || "Passwords do not match.",
                                    })}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword((prev) => !prev)
                                    }
                                    className="shrink-0 text-[#777970] transition-colors hover:text-white"
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide confirm password"
                                            : "Show confirm password"
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={17} strokeWidth={1.7} />
                                    ) : (
                                        <Eye size={17} strokeWidth={1.7} />
                                    )}
                                </button>
                            </div>

                            {errors.confirmPassword && (
                                <p className="mt-1.5 text-xs text-red-400">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Terms acceptance */}
                        <div className="mt-5">
                            <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-[#A1A29B]">
                                <input
                                    type="checkbox"
                                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#D7FF00]"
                                    {...register("acceptTerms", {
                                        required: "You must accept the terms to continue.",
                                    })}
                                />

                                <span>
                                    I agree to the{" "}
                                    <a
                                        href="/terms"
                                        className="text-[#D7FF00] hover:text-white"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="/privacy"
                                        className="text-[#D7FF00] hover:text-white"
                                    >
                                        Privacy Policy
                                    </a>
                                    .
                                </span>
                            </label>

                            {errors.acceptTerms && (
                                <p className="mt-1.5 text-xs text-red-400">
                                    {errors.acceptTerms.message}
                                </p>
                            )}
                        </div>


                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D7FF00] px-4 text-sm font-semibold text-[#11120F] transition-all duration-200 hover:bg-[#E4FF4A] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isLoading ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#11120F]/30 border-t-[#11120F]" />
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    Create account
                                    <ArrowRight size={17} strokeWidth={2} />
                                </>
                            )}
                        </button>
                    </form>


                    <div className="mt-6 text-center text-xs text-[#92938D]">
                        Already have an account?{" "}
                        <a
                            onClick={() => navigate('/login')}
                            className="cursor-pointer font-medium text-[#D7FF00] transition-colors hover:text-white"
                        >
                            Sign in
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[11px] text-[#74756E]">
                        <a
                            href="/privacy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy
                        </a>

                        <span className="h-1 w-1 rounded-full bg-[#45463F]" />

                        <a
                            href="/terms"
                            className="transition-colors hover:text-white"
                        >
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
    );
}