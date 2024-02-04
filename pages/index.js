// pages/index.js
import Head from 'next/head'
import WorkExp from '../components/WorkExp';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Ask from '../components/Ask';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <Head>
        <title>Jack Smith's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 lg:px-20 text-center bg-white shadow-lg rounded-lg max-w-4xl m-6">
        <h1 className="text-6xl font-bold">
          Jack Smith
        </h1>
  
        <p className="mt-3 text-2xl">
          EY - Emerging Technology Application
        </p>
  
        <div className="mt-8 text-left space-y-8">
          <section>
            <h2 className="text-4xl font-semibold">About Me</h2>
            <p className="mt-2">
             curious thinker keen to crypto, AI, socialfi and basketball; trying to build a better world
            </p>
          </section>
          
          <WorkExp />
          <Education />
          <Skills />
          <Ask />
        </div>
      </main>
    </div>
  )
  
}
