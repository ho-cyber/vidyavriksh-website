const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-2">
      <div className="flex gap-2">
        <a href="https://www.youtube.com/watch?v=pM0Vnmvk0Qk&t=134s">
          <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.youtube.com/watch?v=pM0Vnmvk0Qk&t=134s">
          <img src="../../icons8-medium-30.png" alt="Medium" className="w-1/2 h-1/3" />
        </a>
        {/* <a href="https://www.youtube.com/watch?v=pM0Vnmvk0Qk&t=134s">
          <img src="/assets/github.svg" alt="GitHub" className="w-1/3 h-1/3" />
        </a> */}
      </div>
      <p className="text-white-500">© 2024 Vidyavriksh. All rights reserved.</p>
    </footer>
  );
};



export default Footer;
