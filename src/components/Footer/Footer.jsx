
const Footer = () => {
    return (
        <div className="">

            <div className="bg-black flex justify-center items-center">
                    <img src="https://i.ibb.co.com/HMcgTmX/logo-footer.png" alt="" />
                </div>
            <footer className=" footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                
  <nav>
    <h6 className="footer-title">About Us</h6>
    <a className="link link-hover">We are a passionate team</a>
    <a className="link link-hover">Dedicated to providing the best</a>
    <a className="link link-hover">Services to our customers.</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Subscribe</h6>
    <a className="link link-hover">Subscribe to our newsletters</a>
    <a className="link link-hover"> For the latest updates</a>
    <a className="link link-hover">

        <div>

        <div className="join">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="gray"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" className="text-gray-700" placeholder="Enter your email" required />
    </label>
    <div className=" text-amber-100 validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-warning join-item ">Subscribe</button>
</div>

        </div>

    </a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;