import myPhoto from '../assets/profile-pic.png'

const Profile = () => {
    const aboutMe = "Hello, I’m Dhanuka Navod, a 3rd software engineering undergraduate student at University of Kelaniya. My academic journey has equipped me with a solid foundation in software development, emphasizing coursework in OOP concepts, Data structures, Databases and Web application development. Beyond the technical skills, I bring strong communication, time management and attention to details. Looking forward, I aspire to be a Full-stack Developer."
  return (
    <div className="border-b border-nuetral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >
              Dhanuka Navod
            </h1>
            <span className="bg-gradient-to-r from-blue-600 via-slate-800 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent" >
              Software Engineering (UG)
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {aboutMe}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={myPhoto} alt="Photo of me" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;