import Logo from '../assets/Navod logo.png'

const Navbar = () => {
    const handleDownload = () => {
        window.open('/My cv new.pdf', '_blank');
      };
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img src={Logo} alt="logo" className="mx-2 w-40" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href='#home'>Home</a>
        <a href='#education'>Education</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
       
        
      <button onClick={handleDownload}>Download CV</button>
    

      </div>
    </nav>
  );
};

export default Navbar;
