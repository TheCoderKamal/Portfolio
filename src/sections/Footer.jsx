const Footer = () => {
  return (
    <footer className="c-space pt-3 mt-10 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/TheCoderKamal" className="w-full h-full flex justify-center items-center"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" /></a>
        </div>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/kamal-sagpariya-00461226b/" className="w-full h-full flex justify-center items-center"><img src="/assets/LinkedIn.png" alt="LinkedIn" className="w-1/2 h-1/2" /></a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Kamal Sagpariya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
