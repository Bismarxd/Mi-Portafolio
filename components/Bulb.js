//Next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-28 -bottom-56 rotate-12 mix-blend-color-dodge animate-pulse duration-75 -z-0 w-[20rem] xl:w-[22rem]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full "
        alt=""
      />
    </div>
  );
};

export default Bulb;
