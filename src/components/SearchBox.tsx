"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays, MapPin, Search, UsersRound } from "lucide-react";

export default function SearchBox() {
  const [message, setMessage] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const destination = String(formData.get("destination") || "your next destination");
    setMessage(`${destination} search is ready. Live availability needs a booking integration.`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="rounded-[1.5rem] border border-white/70 bg-white p-4 shadow-[0_22px_70px_rgba(13,39,33,0.22)] sm:p-5 lg:-mb-12 lg:px-6 lg:py-5"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_auto] lg:items-end lg:gap-5">
        <label className="min-w-0">
          <span className="mb-2 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#728078]">
            <MapPin size={14} className="text-[#c27b4b]" aria-hidden="true" /> Where to?
          </span>
          <input
            type="text"
            name="destination"
            placeholder="Try Bali, Greece..."
            required
            className="focus-ring h-11 w-full rounded-xl border border-[#e6e9e2] bg-[#fcfcfa] px-3 text-sm text-[#173d36] placeholder:text-[#9ba59f]"
          />
        </label>
        <label className="min-w-0">
          <span className="mb-2 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#728078]">
            <CalendarDays size={14} className="text-[#c27b4b]" aria-hidden="true" /> Check in
          </span>
          <input
            type="date"
            name="check-in"
            required
            aria-label="Check-in date"
            className="focus-ring h-11 w-full min-w-0 rounded-xl border border-[#e6e9e2] bg-[#fcfcfa] px-3 text-sm text-[#52645c]"
          />
        </label>
        <label className="min-w-0">
          <span className="mb-2 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#728078]">
            <CalendarDays size={14} className="text-[#c27b4b]" aria-hidden="true" /> Check out
          </span>
          <input
            type="date"
            name="check-out"
            required
            aria-label="Check-out date"
            className="focus-ring h-11 w-full min-w-0 rounded-xl border border-[#e6e9e2] bg-[#fcfcfa] px-3 text-sm text-[#52645c]"
          />
        </label>
        <label className="min-w-0">
          <span className="mb-2 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#728078]">
            <UsersRound size={14} className="text-[#c27b4b]" aria-hidden="true" /> Travelers
          </span>
          <select
            name="travelers"
            defaultValue="2"
            className="focus-ring h-11 w-full rounded-xl border border-[#e6e9e2] bg-[#fcfcfa] px-3 text-sm text-[#52645c]"
          >
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "traveler" : "travelers"}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#174c3e] px-6 text-sm font-bold text-white transition hover:bg-[#10392f] sm:col-span-2 lg:col-span-1"
        >
          <Search size={16} aria-hidden="true" /> Search
        </button>
      </div>
      {message && (
        <p className="mt-3 text-sm font-medium text-[#174c3e]" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
