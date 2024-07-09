const Education = () => {
  
  return (
    <div id="education" className="border-b border-neutral-900 pb-4 mx-20">
      <h2 className="my-20 text-center text-5xl">Education</h2>
      <div className="flex flex-wrap mb-40" >

        <div className="w-full lg:w-1/3 mx-auto bg-gray-300">
          <h2 className="my-4 font-medium text-2xl text-center">Bachelor of Science (Hons)<br/> in Software Engineering</h2>
          <div className="text-center">
            <p className="my-2 max-w-xl ">University of Kelaniya</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">2022 - present</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Current GPA - 3.76</p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 mx-auto bg-gray-300">
          <h2 className="my-4 font-medium text-2xl text-center">G.C.E. A/L (2020) - 2180558</h2>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Chemistry - A</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Combined Mathematics - B</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Physics - B</p>
          </div>
          <div className=" text-center">
            <p className="my-2 max-w-xl ">General English - A (2019)</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Education;
