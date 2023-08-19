import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[20rem] xl:w-[30rem] opacity-50">
      <Image src="/mona.png" width={400} height={400} alt="imagen" priority/>
    </div>
  );
}; 

export default TopLeftImg;
