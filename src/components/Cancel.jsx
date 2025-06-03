// src/Cancel.jsx
import React from "react";

export default function Cancel() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        ❌ Payment Canceled
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md text-center">
        Your payment was canceled. You can try registering again.
      </p>
      <a
        href="/"
        className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </section>
  );
}
