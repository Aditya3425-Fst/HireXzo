import React from 'react';

const CandidateStatusPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-purple-800 text-white flex flex-col">
        <div className="flex items-center justify-center py-4">
          <h1 className="text-2xl font-bold">Employia</h1>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="py-2 px-4 hover:bg-purple-700">
              <a href="#" className="flex items-center">
                <span className="ml-2">Candidate Tracking</span>
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-purple-700">
              <a href="#" className="flex items-center">
                <span className="ml-2">History</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto p-4">
          <button className="bg-white text-purple-800 py-2 px-4 rounded-full w-full">
            Support
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Track candidate status</h2>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <img src="https://via.placeholder.com/32" alt="User" className="rounded-full" />
                <span className="ml-2">Credits 100</span>
              </div>
              <input
                type="text"
                placeholder="Enter your Email or Mobile Number"
                className="border p-2 rounded-l-md"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md">Check status</button>
            </div>
          </header>
          <div className="grid grid-cols-2 gap-4 ">
            <StatusCard company="INFOSYS" status="Final Round" color="green" />
            <StatusCard company="Google" status="Waiting for Final Round result" color="yellow" />
            <StatusCard company="Microsoft" status="Screening Round" color="red" />
            <StatusCard company="Adobe" status="Final Round" color="green" />
          </div>
        </div>
      </main>
      
    </div>
  );
};

const StatusCard = ({ company, status, color }) => {
  const colorClasses = {
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
  };

  return (
    <div className=" h-40 p-6 border rounded-lg flex items-center justify-between">
      <h3 className="text-xl font-semibold">{company}</h3>
      <span className={`text-lg ${colorClasses[color]}`}>{status}</span>
    </div>
  );
};

export default CandidateStatusPage;
