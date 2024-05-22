export default function Skills() {
  return (
    <div className="skills bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
      <ul className="grid grid-cols-2 gap-6 text-base text-gray-800">
        {[
          "Web Development",
          "Next.js",
          "next-auth",
          "Tailwind CSS",
          "Git",
          "Postman",
          "Excel",
          "Google Ads",
          "Google Console",
          "AWS S3",
          "MongoDB",
          "Bubble.io"
        ].map(skill => (
          <li key={skill} className="flex items-center">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}