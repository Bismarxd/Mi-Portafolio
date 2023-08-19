import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none static">
      <Image
        src={"/imagenPrincipal.png"}
        width={800}
        height={800}
        alt="imagen avatar"
        className="translate-z-0 w-full "
      />
    </div>
  );
};

export default Avatar;
