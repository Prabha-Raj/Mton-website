import React from 'react';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#07080a] text-gray-100 selection:bg-amber-500 selection:text-black font-sans">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Glass Navbar */}
      <Navbar />

      {/* Main Content View */}
      <main className="flex-1 w-full">{children}</main>

      {/* Master Butchery Footer */}
      <Footer />
    </div>
  );
}
