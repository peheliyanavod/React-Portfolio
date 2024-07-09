const Education = () => {
  const aa =
    "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.";
  return (
    <div id="education" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <h2 className="my-20 font-medium text-2xl">Bachelor of Science (Hons) in Software Engineering</h2>
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{aa}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="my-20 font-medium text-2xl">Bachelor of Science (Hons) in Software Engineering</h2>
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{aa}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
