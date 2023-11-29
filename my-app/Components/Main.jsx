"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Register from "../public/assets/register.jpg";

function Main() {
  const text = [
    "Project-Based learning",
    "Beginners Friendly Curriculum",
    "Live-Interactive Sessions",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className=" w-full h-[450px] flex justify-center space-between mt-8">
        {/* Left component */}
        <div className="flex flex-col justify-center">
          <div className="w-[520px] ml-12 font-mono subpixel-antialiased ">
            <h1 className="text-4xl ">Rebalance your Tech Skills</h1>
            <h2 className="text-3xl leading-loose">From Industry Experts</h2>
            <h2 className="text-3xl bg-gradient-to-r from-sky-300 to-violet-500 inline-block text-transparent bg-clip-text transition delay-2s50 duration-500 ease-in-out ">
              {text[currentIndex]}
            </h2>
          </div>
        </div>

        {/* Right component */}
        <div className=" flex">
          <section className="flex items-end justify-end ">
            {/* <!-- Left column container with background--> */}
            <div className="">
              <Image
                src={Register}
                // width={400}
                height={600}
                alt="Sample image"
              />
            </div>

            {/* <!-- Right column container --> */}
            <div className=" w-[700px] mr-36 h-[430px] mt-20 rounded-lg p-6 shadow-2xl shadow-indigo-700">
              <form
                action="./submit.php"
                method="POST"
                id="registrationForm"
                class="h-440"
              >
                <h4 class="text-center font-semibold mb-6 mt-1 text-2xl text-black">
                  Register here
                </h4>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  id="nameInput"
                  name="name"
                  required=""
                  title="Enter a valid name"
                  class="w-full px-4 py-2 mb-4 rounded border bg-gray-100 text-gray-800 outline-none"
                />
                <input
                  type="email"
                  placeholder="Enter your Email Id"
                  name="email"
                  id="emailInput"
                  required=""
                  class="w-full px-4 py-2 mb-4 rounded border bg-gray-100 text-gray-800 outline-none"
                />
                <input
                  type="tel"
                  id="phoneInput"
                  name="phone"
                  placeholder="Enter your Mobile Number"
                  required=""
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  class="w-full px-4 py-2 mb-4 rounded border bg-gray-100 text-gray-800 outline-none"
                />
                <select
                  id="dropdownInput"
                  name="dropdown"
                  required=""
                  class="outline-none w-full  py-2 mb-4  border bg-gray-100 text-gray-800 flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <option value="">Select Qualification</option>
                  <option value="BE / B.Tech / MCA">BE / B.Tech / MCA</option>
                  <option value="BSC">BCA, BSc, B.com, BBA</option>
                  <option value="Others">Others</option>
                </select>
                <select
                  id="dropdownsInput"
                  name="dropdowns"
                  required=""
                  class=" outline-none w-full  py-2 mb-4  border bg-gray-100 text-gray-800 flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <option value="">Select Year of Passing</option>
                  <option value="others">2023</option>
                  <option value="Others">2022</option>
                  <option value="Others">2021</option>
                  <option value="Others">Others</option>
                </select>
                <div class="flex justify-center">
                  <button
                    type="submit"
                    class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white py-2 rounded w-full"
                  >
                    Enroll Now
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Main;
