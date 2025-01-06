"use client"
import ArrowRight from "@/icons/ArrowRight";
import Copy from "@/icons/copy";
import Image from "next/image";


export default function Home() {
  const textToCopy = "npm i bootstrap@5.3.3";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("copy"); 
      })
      .catch(err => {
        console.error("error" , err);
      });
  };
  return (
    <>
      <div>
        <div className="w-full flex items-center justify-center flex-col gap-8">
          <button className="bg-[#ffe484] mt-8 px-4 py-1 rounded-xl flex items-center gap-2">
            <span>
              Get Security Updates for Bootstrap 3 & 4
            </span>
            <ArrowRight />
          </button>
          <Image src={"/logo-1.png"} width={200} height={200} alt="logo" />
          <div className="w-[35%]">
            <h1 className="text-4xl font-bold text-center mb-6">
              Build fast, responsive sites with Bootstrap
            </h1>
            <p className="text-center">
              Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.
            </p>
            <div className="w-full">
              <div className="border p-2 rounded flex relative items-center justify-center ">
                <span className="opacity-50  mr-4">$</span>
                <h3>{textToCopy}</h3>
                <div className="absolute right-2 cursor-pointer" onClick={handleCopy} >
                  <Copy />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
