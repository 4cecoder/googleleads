import { useState } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., check if the user gave a Google My Business review
    console.log(`Phone number: ${phoneNumber}`);
    console.log(`Email: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Check if you gave us a Google My Business review</h1>
      <form onSubmit={handleSubmit} className="w-64">
        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="w-full px-3 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
      </form>
    </div>
  );
}

export default App;