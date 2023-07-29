import { useContext } from "react";
import Information from "../Informantion";
import img from "../assets/profile-img.jpeg";
import { NavContext } from "../NavContext";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";

export default function HomePage() {
  const { option } = useContext(NavContext);
  return (
    <div className="mx-16 mt-24 pb-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-12">
      <div className="bg-white relative rounded-xl">
        <div className="w-44 h-44 -mt-12 mx-auto rounded-xl overflow-hidden bg-gray-400">
          <img className="object-cover aspect-square" src={img} alt="" />
        </div>
        <div className="my-4 w-fit mx-auto text-center">
          <h1 className="text-2xl my-1 font-bold">Udaysingh Pawar</h1>
          <span className="text-gray-500">Full stack developer</span>
        </div>
        <div className="flex gap-2 w-fit mx-auto">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/udaysingh-pawar/"
            className="p-3 shadow shadow-gray-400 rounded-xl cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M3.8582 1.80688C3.85798 2.24547 3.68354 2.66601 3.37326 2.97599C3.06297 3.28596 2.64226 3.45998 2.20366 3.45976C1.76507 3.45954 1.34453 3.2851 1.03456 2.97482C0.724581 2.66453 0.550562 2.24382 0.550781 1.80523C0.551001 1.36664 0.725441 0.946095 1.03573 0.63612C1.34601 0.326144 1.76673 0.152125 2.20532 0.152344C2.64391 0.152563 3.06445 0.327003 3.37443 0.637289C3.6844 0.947575 3.85842 1.36829 3.8582 1.80688ZM3.90781 4.68434H0.600393V15.0366H3.90781V4.68434ZM9.13354 4.68434H5.84265V15.0366H9.10046V9.60412C9.10046 6.57783 13.0446 6.2967 13.0446 9.60412V15.0366H16.3106V8.4796C16.3106 3.3779 10.473 3.56808 9.10046 6.07345L9.13354 4.68434Z"
                fill="#0077B5"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://github.com/udaypawar22"
            className="p-3 shadow shadow-gray-400 rounded-xl cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M8.37402 0.326172C3.80565 0.326172 0.10547 4.02635 0.10547 8.59472C0.104475 10.3304 0.650036 12.0224 1.66476 13.4305C2.67949 14.8387 4.11186 15.8916 5.75868 16.4399C6.1721 16.5119 6.32755 16.2638 6.32755 16.0463C6.32755 15.8504 6.3168 15.1996 6.3168 14.5067C4.23974 14.8896 3.70229 14.0007 3.53692 13.5352C3.44348 13.297 3.04081 12.5636 2.68939 12.3668C2.39999 12.2122 1.98657 11.8294 2.67864 11.8195C3.3302 11.8087 3.7949 12.4189 3.95035 12.667C4.69451 13.9172 5.88271 13.5658 6.35815 13.3491C6.43091 12.8117 6.64755 12.4503 6.88568 12.2436C5.04593 12.0369 3.12349 11.3233 3.12349 8.16062C3.12349 7.261 3.44348 6.51766 3.97102 5.93804C3.88833 5.73132 3.59893 4.8838 4.0537 3.74687C4.0537 3.74687 4.74578 3.53023 6.32755 4.59522C7.00067 4.4084 7.69614 4.31438 8.39469 4.31575C9.09752 4.31575 9.80034 4.40835 10.4618 4.5944C12.0436 3.51949 12.7357 3.7477 12.7357 3.7477C13.1904 4.88462 12.901 5.73215 12.8184 5.93886C13.3451 6.51766 13.6659 7.25108 13.6659 8.16062C13.6659 11.3341 11.7335 12.0369 9.89295 12.2436C10.1931 12.5016 10.4519 12.9977 10.4519 13.7733C10.4519 14.8788 10.4412 15.7677 10.4412 16.0472C10.4412 16.2638 10.5966 16.5218 11.01 16.4391C12.6512 15.8848 14.0773 14.8298 15.0875 13.4227C16.0978 12.0155 16.6413 10.327 16.6417 8.59472C16.6417 4.02635 12.9416 0.326172 8.37319 0.326172H8.37402Z"
                fill="#0B0909"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/uday_Pawar22"
            className="p-3 shadow shadow-gray-400 rounded-xl cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-6 h-6"
            >
              <path
                fill="#03A9F4"
                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
              />
            </svg>
          </a>
        </div>
        <div className="grid mx-8 mt-4 mb-8 bg-gray-100 shadow shadow-gray-400 rounded-xl">
          <div className="flex mx-8 py-3 gap-2 border-b">
            <div className="p-4">
              <svg
                className="w-6 h-6"
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M10 0.5H2C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V18.5C0 19.0304 0.210714 19.5391 0.585786 19.9142C0.960859 20.2893 1.46957 20.5 2 20.5H10C10.5304 20.5 11.0391 20.2893 11.4142 19.9142C11.7893 19.5391 12 19.0304 12 18.5V2.5C12 1.96957 11.7893 1.46086 11.4142 1.08579C11.0391 0.710714 10.5304 0.5 10 0.5ZM7 19.5H5V18.5H7V19.5ZM10 17.5H2V3.5H10V17.5Z"
                  fill="url(#paint0_linear_307_7)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_307_7"
                    x1="6"
                    y1="0.5"
                    x2="6"
                    y2="20.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E00FF" />
                    <stop offset="1" stop-color="#00F0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xs text-gray-500">Phone</h1>
              <span className="font-semibold">+91 9175636959</span>
            </div>
          </div>
          <div className="flex mx-8 py-3 gap-2 border-b">
            <div className="p-4">
              <svg
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M0.969999 5.65L10 0L19.03 5.65C19.61 6 20 6.63 20 7.36V17.36C20 18.46 19.1 19.36 18 19.36H2C0.9 19.36 0 18.46 0 17.36V7.36C0 6.63 0.389999 6 0.969999 5.65ZM2 17.36H18V9.36L10 14.36L2 9.36V17.36ZM10 12.36L18 7.36L10 2.36L2 7.36L10 12.36Z"
                  fill="url(#paint0_linear_307_10)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_307_10"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="19.36"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9E00FF" />
                    <stop offset="1" stop-color="#00F0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xs text-gray-500">Email</h1>
              <span className="font-semibold">
                udaysinghpawar0302@gmail.com
              </span>
            </div>
          </div>
          <div className="flex mx-8 py-3 gap-2">
            <div className="p-4">
              <svg
                className="w-6 h-6"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M8.25 1C11.9766 1 15 3.87766 15 7.42188C15 11.5 10.5 17.9627 8.84766 20.1948C8.77907 20.2891 8.68917 20.3657 8.58531 20.4186C8.48144 20.4715 8.36655 20.499 8.25 20.499C8.13345 20.499 8.01856 20.4715 7.91469 20.4186C7.81083 20.3657 7.72093 20.2891 7.65234 20.1948C6 17.9636 1.5 11.5033 1.5 7.42188C1.5 3.87766 4.52344 1 8.25 1Z"
                  stroke="url(#paint0_linear_307_13)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_307_13"
                    x1="8.25"
                    y1="1"
                    x2="8.25"
                    y2="20.499"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A108FF" />
                    <stop offset="1" stop-color="#00F0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xs text-gray-500">Location</h1>
              <span className="font-semibold">Baramati, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
      {option === "home" && (
        <Information
          className={"bg-white rounded-xl shadow px-16 pt-6 pb-12"}
        />
      )}
      {option === "resume" && (
        <ResumePage className={"bg-white rounded-xl shadow px-16 pt-6 pb-12"} />
      )}
      {option === "contact" && (
        <ContactPage
          className={"bg-white rounded-xl shadow px-16 pt-6 pb-12"}
        />
      )}
    </div>
  );
}
