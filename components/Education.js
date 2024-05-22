export default function Education() {
  return (
    <div className="education bg-white p-8 rounded-xl shadow-lg">
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          Curious thinker keen to crypto, AI, socialfi and basketball; trying to build a better world
        </p>
      </section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
      <ul className="space-y-4 text-base text-gray-800 list-none">
        <li className="flex items-start">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1"></span>
          <div className="flex flex-col">
            <span className="font-semibold">Auburn University</span>
            <p className="text-sm text-gray-600">Entrepreneurship and Business Development</p>
          </div>
        </li>
      </ul>
    </div>
  );
}