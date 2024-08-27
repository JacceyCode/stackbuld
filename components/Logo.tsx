import Image from "next/image";

const Logo = () => {
  return (
    <section aria-label="Logo" className="flex items-center gap-3">
      <Image
        src={"/logo.png"}
        width={40}
        height={40}
        alt="Logo"
        className="size-10 md:size-16 object-cover"
      />

      <p className="text-lg md:text-2xl italic font-semibold">RitStore</p>
    </section>
  );
};

export default Logo;
