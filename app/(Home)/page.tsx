import ProductContainer from "@/components/ProductContainer";

export default async function Home() {
  return (
    <main className="md:p-6 p-4 flex justify-center">
      <ProductContainer />
    </main>
  );
}
