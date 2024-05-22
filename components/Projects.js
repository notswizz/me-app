export default function Projects() {
  return (
    <div className="projects">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
        <li>
          <a href="https://praink.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            AI Prank Call
          </a>
          <p className="text-sm text-gray-600">Bland AI API</p>
        </li>
        <li>
          The Smith Agency
          <p className="text-sm text-gray-600">Wholesale Staffing Service CRM</p>
        </li>
        <li>
          AI Song Writer
          <p className="text-sm text-gray-600">GPT-4 API</p>
        </li>
        <li>
          Based Slots
          <p className="text-sm text-gray-600">On-Chain, Fair Casino</p>
        </li>
      </ul>
    </div>
  );
}