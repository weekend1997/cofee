import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-col text-white h-[45vh]">
        <div className="font-bold flex justify-center items-center gap-2 text-5xl">Show Your Support <span><img src="/computer-game.gif" width={80} alt="" /></span></div>
        <p>A crowdfunding platform for creators. Get funnded by your suporters.Start Now!</p>
        <div>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Now
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-2xl font-bold text-center mb-16">Your Followers Can Buy A Cookie</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-500 rounded-full p-2 text-black" src="/cheers.gif" width={88} alt="" />
            <p className="font-bold">Support Yourself</p>
            <p className=" text-center">Your Fans are availabe to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-500 rounded-full p-2 text-black" src="/coin.gif" width={88} alt="" />
            <p className="font-bold">Support Yourself</p>
            <p className=" text-center">Your Fans are availabe to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-500 rounded-full p-2 text-black" src="/group.gif" width={88} alt="" />
            <p className="font-bold">Support Yourself</p>
            <p className=" text-center">Your Fans are availabe to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-16">Learn More About Us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1udJsv1VcII?si=ziOWZLpu2M6n1Nvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
      </div>
    </>
  );
}
