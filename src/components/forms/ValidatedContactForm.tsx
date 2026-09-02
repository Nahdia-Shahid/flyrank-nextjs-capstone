"use client";

import { FormEvent, useState } from "react";

type FormValues = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function ValidatedContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormValues): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);

    const formData = new FormData(event.currentTarget);
    const values: FormValues = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
        <input id="name" name="name" type="text" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400/60" />
        {errors.name && <p id="name-error" role="alert" className="mt-1 text-sm text-red-300">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400/60" />
        {errors.email && <p id="email-error" role="alert" className="mt-1 text-sm text-red-300">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400/60" />
        {errors.message && <p id="message-error" role="alert" className="mt-1 text-sm text-red-300">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white">Send Message</button>
      {submitted && <p role="status" className="text-sm text-emerald-300">Message validated successfully.</p>}
    </form>
  );
}
