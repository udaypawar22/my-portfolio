import { useContext } from "react";
import { NavContext } from "./NavContext";

export default function Header() {
  const primaryFill = "#F24C3D";
  const { option, setOption } = useContext(NavContext);
  return (
    <header className="py-4 mx-24">
      <div className="flex justify-between">
        <div className="text-3xl my-auto font-serif">Udaysingh Pawar</div>
        <nav className="flex mx-2 gap-2 text-xs bg-white shadow-lg rounded-xl">
          <button
            onClick={() => {
              setOption("home");
            }}
            className={
              "flex w-20 flex-col items-center p-3 m-2 rounded-xl " +
              (option === "home"
                ? "bg-gradient-to-r from-purplegradient to-bluegradient text-white"
                : "bg-gray-100 text-gray-500 font-semibold")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>Home</span>
          </button>
          <button
            onClick={() => {
              setOption("resume");
            }}
            className={
              "flex w-20 flex-col items-center p-3 m-2 rounded-xl " +
              (option === "resume"
                ? "bg-gradient-to-r from-purplegradient to-bluegradient text-white"
                : "bg-gray-100 text-gray-500 font-semibold")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>

            <span>Resume</span>
          </button>
          <button
            onClick={() => {
              setOption("contact");
            }}
            className={
              "flex w-20 flex-col items-center p-3 m-2 rounded-xl " +
              (option === "contact"
                ? "bg-gradient-to-r from-purplegradient to-bluegradient text-white"
                : "bg-gray-100 text-gray-500 font-semibold")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <span>Contact</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
