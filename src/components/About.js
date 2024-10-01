import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <div className="text-lg text-gray-700 space-y-4">
        <p>
          Hi, I'm Bishworup Mollik, a Web developer and Computer Science and Engineering student from Sylhet, Bangladesh. 
          I have completed my studies at Bangabandhu Sheikh Mujibur Rahman Science and Technology University
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Programming Languages: C/C++, Java, JavaScript, TypeScript, Python</li>
          <li>Frameworks: React, Tailwind CSS, Redux, Adonis Js , Node js</li>
          <li>Databases: MySQL, Postgres</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Competitive Programming</h2>
        <p>
          I'm deeply involved in competitive programming, having solved over 1500 problems across platforms like Codeforces, LeetCode, and GeeksforGeeks.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Achievements</h2>
        <ul className="list-disc list-inside">
          <li>Nationalist ICPC 202 & ICPC 2023</li>
          <li>Participated in the National Collegiate Programming Contest (NCPC)</li>
          <li>Secured a top 30 position in the Inter-University Hackathon (Code Samurai ) 2024</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Interests</h2>
        <p>
          Beyond academics, I enjoy learning new technologies, fishing, and watching movies.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Goals</h2>
        <p>
          My goal is to continually grow as a developer, embracing new challenges and technologies to expand my skill set.
        </p>
      </div>
    </div>
  );
};

export default About;