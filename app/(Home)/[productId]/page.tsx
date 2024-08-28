import ProductDetail from "@/components/ProductDetail";

const DetailsPage = ({
  params: { productId },
}: {
  params: { productId: number };
}) => {
  return (
    <main className="p-6 flex md:items-center">
      <ProductDetail productId={productId} />
    </main>
  );
};

export default DetailsPage;
