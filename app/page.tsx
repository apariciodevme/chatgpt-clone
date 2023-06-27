import Image from "next/image";

import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-12 text-slate-100">
      <h1 className="mb-20 text-5xl font-bold">ChatGPT</h1>

      <div className="grid grid-cols-1 gap-3 pb-20 text-center space-y-14 sm:grid-cols-3 sm:space-y-0">
        
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*icon*/}
            <SunIcon className="w-8 h-8 " />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"Waht is the color of the sun?"</p>
          </div>
        </div>

        {/*two*/}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* icon*/}
            <BoltIcon className="w-8 h-8 " />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the chatGPT model to use</p>
            <p className="infoText">Messages are stored in Firebase</p>
            <p className="infoText">This is super cool</p>
          </div>
        </div>
        {/* three*/}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* icon*/}
            <ExclamationTriangleIcon className="w-8 h-8 " />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May generate biased content"</p>
            <p className="infoText">May generate incorrect information</p>
            <p className="infoText">
              Limited knowledge of world events after 2021
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
