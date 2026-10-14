
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Check,
  Globe,
  Workflow,
  ArrowRight,
} from "lucide-react";

const inputStyle =
  "w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400";

const labelStyle =
  "mb-2 block text-xs font-medium text-slate-700";

const fieldStyle =
  "flex h-12 items-center gap-3 rounded-xl border border-white/70 bg-white/45 px-3.5 transition focus-within:border-teal-600/50 focus-within:bg-white/70 focus-within:ring-4 focus-within:ring-teal-600/10";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const password = watch("password", "");

  async function onSubmit(data) {
    setNotice("");
    // Connect your registration API here.
    console.log(data);
    setNotice("Form validated. Connect your registration service to continue.");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#dcebe5] px-3 py-6 sm:px-6 sm:py-10">

      {/* Quiet tropical wallpaper */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-emerald-300/50 blur-[100px]" />
        <div className="absolute -right-20 top-[15%] h-[400px] w-[400px] rounded-full bg-cyan-300/45 blur-[110px]" />
        <div className="absolute -bottom-48 left-[35%] h-[450px] w-[450px] rounded-full bg-orange-200/55 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-200/40 blur-[90px]" />
      </div>

      {/* Main window */}
      <div className="relative w-full max-w-[1100px] overflow-hidden rounded-[24px] border border-white/80 bg-white/40 shadow-[0_30px_100px_rgba(35,72,64,0.15)] backdrop-blur-3xl">

        {/* macOS-style window bar */}
        <div className="flex h-12 items-center justify-between border-b border-white/60 bg-white/30 px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border border-black/10 bg-[#ff6058]" />
            <span className="h-3 w-3 rounded-full border border-black/10 bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full border border-black/10 bg-[#28c840]" />
          </div>

          <span className="text-xs font-medium tracking-wide text-slate-600">
            TeamSync
          </span>

          <div className="w-12" />
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr]">

          {/* Brand / information panel */}
          <section className="relative flex min-h-[290px] flex-col justify-between overflow-hidden border-b border-white/60 bg-gradient-to-br from-[#c5e8d9]/80 via-[#d9eee7]/60 to-[#f5e6d4]/65 p-6 sm:p-9 md:min-h-[650px] md:border-b-0 md:border-r md:border-white/70 md:p-10">

            {/* Restrained botanical shapes */}
            <div className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full border border-white/60" />
            <div className="pointer-events-none absolute -right-5 top-32 h-44 w-44 rounded-full border border-white/60" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-teal-300/20 blur-2xl" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/80 bg-white/65 text-teal-800 shadow-sm">
                <Workflow size={19} strokeWidth={1.7} />
              </div>
              <span className="text-sm font-semibold tracking-tight text-slate-800">
                TeamSync
              </span>
            </div>

            <div className="relative mt-10 max-w-md md:mt-0">
              <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.8px] text-teal-800">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                Collaborative intelligence
              </p>

              <h1 className="max-w-sm text-3xl font-semibold leading-[1.15] tracking-[-1.3px] text-slate-800 sm:text-4xl">
                Better insights.
                <br />
                Clearer decisions.
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
                Connect your enterprise data to our specialized AI models
                and unlock unparalleled strategic insights in seconds.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-xl border border-white/80 bg-white/45 px-4 py-3 backdrop-blur-xl">
                  <p className="text-lg font-semibold tracking-tight text-slate-800">
                    99.9%
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Uptime SLA
                  </p>
                </div>

                <div className="rounded-xl border border-white/80 bg-white/45 px-4 py-3 backdrop-blur-xl">
                  <p className="text-lg font-semibold tracking-tight text-slate-800">
                    ISO
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    27001 Certified
                  </p>
                </div>
              </div>
            </div>

            <p className="relative mt-8 text-[11px] text-slate-500">
              Thoughtfully connected. Intelligently designed.
            </p>
          </section>

          {/* Registration */}
          <section className="flex items-center justify-center bg-white/45 px-5 py-9 sm:px-10 sm:py-12 lg:px-14">
            <div className="w-full max-w-[400px]">

              <header className="mb-8">
                <p className="mb-2 text-xs font-medium text-teal-700">
                  GET STARTED
                </p>

                <h2 className="text-[27px] font-semibold tracking-[-0.9px] text-slate-800">
                  Create your account
                </h2>

                <p className="mt-2 text-sm leading-5 text-slate-500">
                  Experience the future of collaborative data intelligence.
                </p>
              </header>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="name" className={labelStyle}>
                    Full Name
                  </label>

                  <div className={fieldStyle}>
                    <UserRound size={17} className="shrink-0 text-slate-400" />
                    <input
                      id="name"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className={inputStyle}
                      aria-invalid={!!errors.name}
                      {...register("name", {
                        required: "Full name is required.",
                        minLength: {
                          value: 2,
                          message: "Enter at least 2 characters.",
                        },
                      })}
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className={labelStyle}>
                    Email Address
                  </label>

                  <div className={fieldStyle}>
                    <Mail size={17} className="shrink-0 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className={inputStyle}
                      aria-invalid={!!errors.email}
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
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="mb-5">
                  <label htmlFor="password" className={labelStyle}>
                    Password
                  </label>

                  <div className={fieldStyle}>
                    <LockKeyhole size={17} className="shrink-0 text-slate-400" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="At least 8 characters"
                      className={inputStyle}
                      aria-invalid={!!errors.password}
                      {...register("password", {
                        required: "Password is required.",
                        minLength: {
                          value: 8,
                          message: "Use at least 8 characters.",
                        },
                      })}
                    />

                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword((value) => !value)}
                      className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-black/5 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>

                  <div className="mt-2 flex gap-1">
                    {[0, 1, 2, 3].map((level) => (
                      <span
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          password.length >= (level + 1) * 3
                            ? password.length >= 8
                              ? "bg-teal-600"
                              : "bg-amber-500"
                            : "bg-slate-300/60"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="mt-1.5 text-[11px] text-slate-500">
                    {!password
                      ? "Use 8 or more characters."
                      : password.length < 8
                      ? "Keep going — at least 8 characters."
                      : password.length < 12
                      ? "Password length looks good."
                      : "Long password."}
                  </p>

                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="mb-6">
                  <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-slate-600">
                    <input
                      type="checkbox"
                      {...register("terms", {
                        required: "Please accept the terms to continue.",
                      })}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded accent-teal-700"
                    />

                    <span>
                      I agree to the{" "}
                      <a href="/terms" className="font-medium text-teal-800 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="font-medium text-teal-800 hover:underline">
                        Privacy Policy
                      </a>.
                    </span>
                  </label>

                  {errors.terms && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.terms.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-800 text-sm font-medium text-white shadow-sm transition hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-700/15 disabled:cursor-wait disabled:opacity-60"
                >
                  {isSubmitting ? "Creating account..." : "Create Account"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>

                {notice && (
                  <p role="status" className="mt-3 text-xs leading-5 text-teal-800">
                    {notice}
                  </p>
                )}
              </form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <span className="h-px flex-1 bg-slate-300/70" />
                <span className="text-[10px] font-medium uppercase tracking-[1.2px] text-slate-400">
                  Or continue with
                </span>
                <span className="h-px flex-1 bg-slate-300/70" />
              </div>

              {/* Social login */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setNotice("Connect Google OAuth to enable sign-in.")}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/90 bg-white/45 text-sm text-slate-700 transition hover:bg-white/80"
                >
                  <Globe size={16} className="text-slate-600" />
                  Google
                </button>

                <button
                  type="button"
                  onClick={() => setNotice("Connect your SSO provider to enable sign-in.")}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/90 bg-white/45 text-sm text-slate-700 transition hover:bg-white/80"
                >
                  <Workflow size={16} className="text-slate-600" />
                  SSO
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-semibold text-teal-800 hover:underline"
                >
                  Log In
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="flex flex-col gap-4 border-t border-white/60 bg-white/25 px-5 py-5 text-xs text-slate-500 sm:px-7 md:flex-row md:items-center md:justify-between">
          <span className="font-semibold text-slate-700">TeamSync</span>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/privacy" className="hover:text-teal-800">Privacy Policy</a>
            <a href="/terms" className="hover:text-teal-800">Terms of Service</a>
            <a href="/security" className="hover:text-teal-800">Security</a>
            <a href="/status" className="hover:text-teal-800">System Status</a>
          </nav>

          <span>© 2024 TeamSync</span>
        </footer>
      </div>
    </main>
  );
}
