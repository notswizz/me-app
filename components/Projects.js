export default function Projects() {
  return (
    <div className="projects bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
      <ul className="space-y-6 text-base text-gray-800">
        <li className="flex items-start">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1"></span>
          <div className="flex flex-col">
            <a href="https://praink.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">
              AI Prank Call
            </a>
            <p className="text-sm text-gray-600">Bland AI API</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1"></span>
          <div className="flex flex-col">
            <span className="font-semibold">The Smith Agency</span>
            <p className="text-sm text-gray-600">Wholesale Staffing Service CRM</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1"></span>
          <div className="flex flex-col">
            <span className="font-semibold">AI Song Writer</span>
            <p className="text-sm text-gray-600">GPT-4 API</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1"></span>
          <div className="flex flex-col">
            <span className="font-semibold">Based Slots</span>
            <p className="text-sm text-gray-600">On-chain, provably fair casino</p>
          </div>
        </li>
      </ul>
    </div>
  );
}