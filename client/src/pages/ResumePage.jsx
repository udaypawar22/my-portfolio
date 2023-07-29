export default function ResumePage({ className }) {
  function addClassNames() {
    return "bg-blue-100 p-1 rounded-xl text-gray-700";
  }
  return (
    <div className={className}>
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-semibold w-fit">Resume</h1>
        <div className="border h-fit flex-grow ml-8 mr-48"></div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-14">
        <div className="grid gap-y-4">
          <div className="flex gap-2 items-center">
            <svg
              className="w-7 h-full mt-1"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon-park-outline:degree-hat">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M1.15625 10.6821L13.304 5.82812L25.4517 10.6821L13.304 15.5361L1.15625 10.6821Z"
                    stroke="url(#paint0_linear_157_651)"
                    stroke-width="2.31143"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M25.4492 10.7461V16.0757M6.67578 13.2396V20.4293C6.67578 20.4293 9.45528 23.1643 13.3015 23.1643C17.1483 23.1643 19.9278 20.4293 19.9278 20.4293V13.2396"
                    stroke="url(#paint1_linear_157_651)"
                    stroke-width="2.31143"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_157_651"
                  x1="13.304"
                  y1="5.82812"
                  x2="13.304"
                  y2="15.5361"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A81AFF" />
                  <stop offset="1" stop-color="#F14646" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_157_651"
                  x1="16.0625"
                  y1="10.7461"
                  x2="16.0625"
                  y2="23.1643"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A81AFF" />
                  <stop offset="1" stop-color="#F14646" />
                </linearGradient>
              </defs>
            </svg>

            <h1 className="text-2xl font-semibold">Education</h1>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md px-2 py-5">
            <h3 className="text-sm text-gray-500">Jan 2019 - July 2020</h3>
            <h1 className="my-1 font-medium">
              Vidya Pratishthan's Arts, Science & Commerce College, Baramati
            </h1>
            <h1 className="">Savitribai Phule Pune University</h1>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md px-2 py-5">
            <h3 className="text-sm text-gray-500">Jan 2020 - July 2024</h3>
            <h1 className="my-1 font-medium">
              Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and
              Technology, Baramati
            </h1>
            <h1 className="">Savitribai Phule Pune University</h1>
          </div>
        </div>

        <div className="grid gap-y-4">
          <div className="flex gap-2 items-center">
            <svg
              className="w-7 h-7 mt-1"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="humbleicons:briefcase">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M10.2283 9.88068V7.56924C10.2283 6.95621 10.4719 6.36829 10.9053 5.93482C11.3388 5.50134 11.9267 5.25781 12.5398 5.25781H17.1626C17.7757 5.25781 18.3636 5.50134 18.7971 5.93482C19.2305 6.36829 19.4741 6.95621 19.4741 7.56924V9.88068M5.60547 16.815L9.24597 17.7245C12.9262 18.6444 16.7762 18.6444 20.4564 17.7245L24.0969 16.815"
                    stroke="url(#paint0_linear_157_646)"
                    stroke-width="2.31143"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector_2"
                    d="M5.60547 12.1923C5.60547 11.5793 5.84899 10.9913 6.28247 10.5579C6.71595 10.1244 7.30387 9.88086 7.9169 9.88086H21.7855C22.3985 9.88086 22.9864 10.1244 23.4199 10.5579C23.8534 10.9913 24.0969 11.5793 24.0969 12.1923V21.438C24.0969 22.051 23.8534 22.639 23.4199 23.0724C22.9864 23.5059 22.3985 23.7495 21.7855 23.7495H7.9169C7.30387 23.7495 6.71595 23.5059 6.28247 23.0724C5.84899 22.639 5.60547 22.051 5.60547 21.438V12.1923Z"
                    stroke="url(#paint1_linear_157_646)"
                    stroke-width="2.31143"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M14.8471 15.6571C15.4854 15.6571 16.0028 15.1397 16.0028 14.5014C16.0028 13.8631 15.4854 13.3457 14.8471 13.3457C14.2088 13.3457 13.6914 13.8631 13.6914 14.5014C13.6914 15.1397 14.2088 15.6571 14.8471 15.6571Z"
                    fill="url(#paint2_linear_157_646)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_157_646"
                  x1="14.8512"
                  y1="5.25781"
                  x2="14.8512"
                  y2="18.4144"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A81AFF" />
                  <stop offset="1" stop-color="#F14646" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_157_646"
                  x1="14.8512"
                  y1="9.88086"
                  x2="14.8512"
                  y2="23.7495"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A81AFF" />
                  <stop offset="1" stop-color="#F14646" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_157_646"
                  x1="14.8471"
                  y1="13.3457"
                  x2="14.8471"
                  y2="15.6571"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A81AFF" />
                  <stop offset="1" stop-color="#F14646" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-2xl font-semibold">Work Skills</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between mx-3">
              <span className={addClassNames()}>ReaxtJs</span>
              <span className={addClassNames()}>NodeJs</span>
              <span className={addClassNames()}>ExpressJs</span>
            </div>
            <div className="flex justify-between mx-3">
              <span className={addClassNames()}>MongoDb</span>
              <span className={addClassNames()}>Java</span>
              <span className={addClassNames()}>Php</span>
              <span className={addClassNames()}>Flutter</span>
            </div>
            <div className="flex justify-between mx-3">
              <span className={addClassNames()}>JWT</span>
              <span className={addClassNames()}>Tailwindcss</span>
              <span className={addClassNames()}>Python</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>

            <h1 className="text-2xl font-semibold">Soft Skills</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between mx-3">
              <span className={addClassNames()}>Flexibility</span>
              <span className={addClassNames()}>Time management</span>
            </div>
            <div className="flex justify-between mx-3">
              <span className={addClassNames()}>Problem solving</span>
              <span className={addClassNames()}>Adaptive</span>
            </div>
            <div className="flex justify-between mx-3">
              <span className={addClassNames()}>Impeccable communication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
