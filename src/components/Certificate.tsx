'use client';

import { Button } from '@/components/ui/button';

interface CertificateProps {
  courseName: string;
  onDownload: () => void;
}

export function Certificate({ courseName, onDownload }: CertificateProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg animate-fade-in-up">
      <h2 className="text-3xl font-extrabold mb-4 text-green-400">
        Congratulations!
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        You have successfully completed the{' '}
        <span className="font-bold text-white">{courseName}</span> course.
      </p>
      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 mb-6">
        <p className="text-sm text-gray-500 mb-2">This certifies that</p>
        <h3 className="text-2xl font-bold text-white">Alex Dot</h3>
        <p className="text-sm text-gray-500 mt-2">has completed the</p>
        <p className="text-lg font-semibold text-white mt-1">{courseName}</p>
        <p className="text-xs text-gray-500 mt-4">Issued: {new Date().toLocaleDateString()}</p>
      </div>
      <Button onClick={onDownload} className="w-full">
        Download Certificate
      </Button>
    </div>
  );
}
