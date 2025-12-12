

const Newsletter = () => {
  return (
    <div className="">
    <div className="flex justify-center rounded-2xl">
      <div
        className="hero w-2/3 flex justify-center rounded-sm"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/sdwHHvsP/bg-shadow.png)",
        }}
      >
        <div className="my-8">

        <h1 className="text-2xl font-bold text-center"> Subscribe to our Newsletter</h1>
        <p className="text-center">Get the latest updates and news right in your inbox!</p>
        <div className="pt-2 text-center flex gap-2">

            <div>
            <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Enter your email" required />
</label>
<div className="validator-hint hidden">Enter your email</div>

            </div>


            <div>

        <button className="btn btn-warning">Subscribe</button>
            </div>

        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;
