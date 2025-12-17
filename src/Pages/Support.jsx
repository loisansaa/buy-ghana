import React, { useState } from 'react';

function Support() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }

    // NOTE: Replace this with a real API call or email service in production
    setStatus({ type: 'success', message: 'Message sent — we will reply within 1-2 business days.' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Support</h1>
        <p className="mt-2 text-gray-600">
          Need help? Fill the form below or email us at{' '}
          <a href="mailto:support@buyghana.com" className="text-indigo-600 hover:underline">support@buyghana.com</a>.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Contact us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                aria-label="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                aria-label="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                aria-label="message"
              />
            </div>

            {status && (
              <div className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>
            )}

            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send message
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-gray-500">We use your message only to respond. For production, connect this form to an API or an email service (e.g., SendGrid, Formspree).</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Support hours</h3>
            <p className="text-gray-700">Mon — Fri: 9:00 — 17:00 GMT</p>
            <p className="text-gray-700">Sat: 10:00 — 14:00 GMT</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">FAQ</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>How long until I receive a reply?</strong>
                <div>We aim to reply within 1-2 business days.</div>
              </li>
              <li>
                <strong>Do you accept returns?</strong>
                <div>Please include your order number and we’ll advise on the return policy.</div>
              </li>
              <li>
                <strong>Can I order custom pieces?</strong>
                <div>Yes — include details in your message and we will connect you with an artisan.</div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Other ways to reach us</h3>
            <p className="text-gray-700">Phone: +233 24-XXXXXXX</p>
            <p className="text-gray-700">Address: Accra, Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
