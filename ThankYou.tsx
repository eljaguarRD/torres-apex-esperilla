import React from 'react';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0c1839] text-white">
      <div className="bg-blue-900/80 rounded-2xl shadow-2xl p-10 border-2 border-[#F97316]/50 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-[#F97316] mb-6">¡Gracias!</h1>
        <svg className="w-16 h-16 mx-auto text-green-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p className="text-lg text-gray-200 mb-8">Uno de nuestros asesores le estará contactando lo más pronto posible.</p>
        <a href="/" className="mt-4 bg-[#F97316] text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors inline-block">Volver al inicio</a>
      </div>
    </div>
  );
}
