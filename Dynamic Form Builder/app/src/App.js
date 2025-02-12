import React from 'react';
import FormBuilder from './components/form-builder/FormBuilder';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Dynamic Form Builder
        </h1>
        <FormBuilder />
      </div>
    </div>
  );
}

export default App;