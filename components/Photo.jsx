"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
      <div className="relative rounded-full p-4 border-4 border-blue-500 w-full h-full flex items-center justify-center">
        <div className="rounded-full overflow-hidden w-full h-full">
          <Image
            src="/assets/my.png" // Ensure this path is correct
            priority
            quality={100}
            layout="fill"
            objectFit="cover" // Adjust as needed
            alt="Profile photo"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
