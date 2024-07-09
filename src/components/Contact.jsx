import linkedinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github.png'
import mediumLogo from '../assets/Medium.jpg'


const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20 mx-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter items-center mx-auto">
        <p className="my-4">076-4447198</p>
        <p className="my-4">Jayamini, Dehigahalanda, Ambalantota</p>
        <p className="my-4">hwpeheliya@gmail.com</p>
        <div className='items-center flex flex-wrap w-1/6 text-center mx-auto'>
            <a href="https://www.linkedin.com/in/peheliya-danuka/" className="border-b p-1">
                <img src={linkedinLogo} alt="" className='w-10'/>
            </a>
            <a href="https://github.com/peheliyanavod" className="border-b p-1">
                <img src={githubLogo} alt="" className='w-10' />
            </a>
            <a href="https://medium.com/@hwpeheliya" className="border-b p-1">
                <img src={mediumLogo} alt="" className='w-12' />
            </a>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
