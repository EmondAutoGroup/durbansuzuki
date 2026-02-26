'use client';

import { useState } from 'react';

interface FinanceFormProps {
  vehicleOptions: { label: string; value: string }[];
}

export default function FinanceForm({ vehicleOptions }: FinanceFormProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    vehicle: '',
    deposit: '',
    tradeIn: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/finance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-suzuki-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-suzuki-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Application Submitted!</h3>
        <p className="text-text-muted">Our finance team will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">First Name *</label>
          <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">Last Name *</label>
          <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">Phone *</label>
          <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-muted mb-1.5">Vehicle of Interest</label>
        <select value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal">
          <option value="">Select a vehicle...</option>
          <optgroup label="New Suzuki Models">
            {vehicleOptions.filter((o) => o.value.startsWith('New')).map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </optgroup>
          <optgroup label="Used Vehicles">
            {vehicleOptions.filter((o) => o.value.startsWith('Used')).map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">Cash Deposit (R)</label>
          <input type="text" placeholder="e.g. 50 000" value={form.deposit} onChange={(e) => setForm({ ...form, deposit: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-1.5">Trade-In Vehicle</label>
          <input type="text" placeholder="e.g. 2020 VW Polo" value={form.tradeIn} onChange={(e) => setForm({ ...form, tradeIn: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-muted mb-1.5">Additional Information</label>
        <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-teal/30 focus:border-suzuki-teal resize-none" />
      </div>

      {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-suzuki-red hover:bg-suzuki-red-dark disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-colors text-lg"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Finance Application'}
      </button>
    </form>
  );
}
