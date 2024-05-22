import Head from 'next/head'
import WorkExp from '../components/WorkExp';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gradient-to-r from-blue-500 to-purple-600">
      <Head>
        <title>Jack Smith's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-10 lg:px-20 text-center bg-white shadow-2xl rounded-3xl max-w-4xl mx-6 my-6 relative pb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-6">
          Jack Smith
        </h1>
        <a href="https://www.linkedin.com/in/jack-smith-wde/" className="text-blue-500 mt-2 lg:mt-0 lg:absolute lg:top-4 lg:right-4 hover:underline">LinkedIn</a>
  
        <div className="mt-8 text-left space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
          
          <WorkExp />
          <Projects />
          <Skills />
          <Education className="col-span-1 lg:col-span-2" />
        </div>
      </main>
    </div>
  )
}