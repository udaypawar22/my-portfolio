//service_9g3fbaa
//template_m2v0rcq
//Gmail
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage({ className }) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const publicKey = "-n9tMjy7vThCw6UyM";
  function sendEmail(ev) {
    ev.preventDefault();
    if (message && email && name) {
      console.log({ name, email, message });
      emailjs
        .send(
          "service_9g3fbaa",
          "template_m2v0rcq",
          {
            from_name: name,
            email_id: email,
            message: message,
          },
          publicKey
        )
        .then(
          (result) => {
            alert("Message sent successfully");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            alert("There was a problem in sending the message");
          }
        );
    }
  }

  return (
    <div className={className}>
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-semibold w-fit">Contact</h1>
        <div className="border h-fit flex-grow ml-8 mr-48"></div>
      </div>
      <div className="grid gap-7">
        <div className="grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-7">
          <div className="bg-devcard rounded-xl shadow">
            <div className="flex pt-6 pb-12 gap-2 border-b">
              <div className="p-4">
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
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold">Phone</h1>
                <span className="text-gray-500">+91 9175636959</span>
              </div>
            </div>
          </div>
          <div className="bg-blue=200">
            <div className="flex pt-6 pb-12 gap-2 border-b rounded-xl shadow bg-gray-200">
              <div className="p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold">Email</h1>
                <span className="text-gray-500">
                  udaysinghpawar0302@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-7 rounded-xl">
          <p className="font-light">
            I am always open to discussing{" "}
            <b>new projects, opportunities in tech world, partnerships </b>and
            more so <b>about learning and collaboration.</b>
          </p>
          <form className="my-3" onSubmit={sendEmail}>
            <h1 className="font-semibold">Name</h1>
            <input
              type="text"
              name="from_name"
              onChange={(ev) => setName(ev.target.value)}
            />

            <h1 className="font-semibold">Email</h1>
            <input
              type="email"
              name="email_id"
              onChange={(ev) => setEmail(ev.target.value)}
            />

            <h1 className="font-semibold">Message</h1>
            <input
              onChange={(ev) => setMessage(ev.target.value)}
              type="text"
              name="message"
            />
            <button
              type="submit"
              className="w-full bg-devcard border shadow-lg font-medium mt-3 mb-1 rounded-full py-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
