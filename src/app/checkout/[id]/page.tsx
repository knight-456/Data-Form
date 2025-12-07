'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';

export default function CheckoutPage() {
  const { id } = useParams();
  const router = useRouter();
  const course = courses.find((c) => c.id === id);
  const [isLoading, setIsLoading] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto py-12 px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course not found</h1>
            <p className="text-gray-400">The course you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </main>
      </div>
    );
  }

  const handlePurchase = () => {
    setIsLoading(true);
    // Simulate a network request
    setTimeout(() => {
      router.push(`/success/${course.id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-xl font-bold">${course.price}</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <Button onClick={handlePurchase} disabled={isLoading} className="w-full">
              {isLoading ? 'Processing...' : 'Complete Purchase'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
