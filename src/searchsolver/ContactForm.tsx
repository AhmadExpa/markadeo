import { useState, type FormEvent } from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { services, budgetOptions, waLink, mailLink } from './siteData';

/* ------------------------------------------------------------------
   ContactForm — styled enquiry form. No backend: on submit it composes
   a single message from the fields and opens WhatsApp (primary) or the
   user's mail client (secondary). Reuses waLink()/mailLink().
------------------------------------------------------------------ */

const emptyForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

function composeMessage(f: typeof emptyForm): string {
  const lines = [
    'New enquiry via Markadeo website:',
    '',
    `Name: ${f.name || '—'}`,
    `Company: ${f.company || '—'}`,
    `Email: ${f.email || '—'}`,
    `Phone: ${f.phone || '—'}`,
    `Service required: ${f.service || '—'}`,
    `Project budget: ${f.budget || '—'}`,
    '',
    `Message: ${f.message || '—'}`,
  ];
  return lines.join('\n');
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);

  const update = (field: keyof typeof emptyForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(waLink(composeMessage(form)), '_blank', 'noopener,noreferrer');
  };

  const handleEmail = () => {
    const subject = 'New project enquiry — Markadeo';
    const url = `${mailLink(subject)}&body=${encodeURIComponent(composeMessage(form))}`;
    window.location.href = url;
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition';
  const labelClass = 'block text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 mb-2';

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white border border-line p-8 sm:p-10 shadow-soft-lg">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={labelClass}>Name</label>
          <input id="cf-name" type="text" required value={form.name} onChange={update('name')} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClass}>Company</label>
          <input id="cf-company" type="text" value={form.company} onChange={update('company')} placeholder="Company name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>Email</label>
          <input id="cf-email" type="email" required value={form.email} onChange={update('email')} placeholder="you@email.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>Phone</label>
          <input id="cf-phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+44 …" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-service" className={labelClass}>Services Required</label>
          <select id="cf-service" value={form.service} onChange={update('service')} className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className={labelClass}>Project Budget</label>
          <select id="cf-budget" value={form.budget} onChange={update('budget')} className={inputClass}>
            <option value="">Select a budget</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelClass}>Message</label>
          <textarea id="cf-message" rows={5} value={form.message} onChange={update('message')} placeholder="Tell us about your project…" className={`${inputClass} resize-y`} />
        </div>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer shadow-gold"
        >
          <MessageCircle className="w-4 h-4" />
          Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmail}
          className="inline-flex items-center justify-center gap-2 bg-canvas hover:bg-zinc-100 text-ink font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer border border-line"
        >
          <Mail className="w-4 h-4" />
          Send via Email
        </button>
      </div>
      <p className="mt-4 text-xs text-zinc-400">
        Submitting opens WhatsApp or your email app with your details pre-filled — nothing is sent until you hit send there.
      </p>
    </form>
  );
}
