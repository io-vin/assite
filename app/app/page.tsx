'use client';

import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AppPage() {
  const { connected, address } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connected) {
      router.push('/migrate');
    }
  }, [connected, router]);

  if (!connected) return null;

  return (
    <main className="pt-24 px-6">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-ethnocentric mb-6 text-center">Ape Sui Society App</h1>
        
        <div className="bg-gray-800 p-4 rounded mb-6">
          <h2 className="text-lg mb-2">Wallet Information</h2>
          <p className="text-gray-300 text-sm truncate">
            <span className="text-gray-400">Connected Address:</span> {address}
          </p>
        </div>
        
        <div className="text-center pt-4">
          <p>Your app is ready!</p>
        </div>
      </div>
    </main>
  );
}
