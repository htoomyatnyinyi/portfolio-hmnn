const Footer = () => {
  return (
    <footer className="p-4  backdrop-blur-3xl shadow-2xl">
      <div className="max-w-6xl mx-auto text-center">
        {/* <h3
          className={`text-2xl font-semibold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Connect with Me
        </h3>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div> */}
        <p className="">
          &copy;_{new Date().getFullYear()}_DEVELOP_BY_HTOO_MYAT_NYI_NYI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
