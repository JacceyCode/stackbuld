import Button from "@/components/Button";
import Image from "next/image";

const DetailsPage = () => {
  return (
    <main className="p-6 flex md:items-center">
      <section className="flex flex-col md:flex-row p-4 items-center bg-background2 rounded-md shadow-black shadow-lg gap-6 md:h-[30rem]">
        <section className="relative size-60 md:size-80 rounded-md md:basis-2/5">
          <Image
            src={"/logo.png"}
            fill
            alt="Product Image"
            className="object-contain"
          />
        </section>

        <section className="flex flex-col md:basis-3/5 gap-4">
          <h1 className="font-semibold text-xl">Product Name</h1>
          <h3 className="font-bold text-xl">$100</h3>
          <span className="text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            distinctio quia harum cum nostrum saepe inventore ut, repellat ab
            necessitatibus! Reiciendis quaerat accusantium cum dolorum aut.
            Accusantium velit minima quae?
          </span>

          <section className="flex items-center gap-2 mt-6">
            <Button
              link="/details/123"
              className="hover:bg-background hover:text-white"
            >
              Edit
            </Button>
            <Button
              link="/"
              className="bg-transparent text-background hover:bg-background hover:text-white"
            >
              Delete
            </Button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default DetailsPage;
