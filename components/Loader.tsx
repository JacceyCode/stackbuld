import { LoaderCircle } from "lucide-react";

const LoaderIcon = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center gap-3">
      <LoaderCircle color="black" size={40} className="animate-spin" />
      <p className="text-lg font-semibold">Loading ...</p>
    </section>
  );
};

export default LoaderIcon;
