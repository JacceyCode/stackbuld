import ProductDetail from "@/components/ProductDetail";

const DetailsPage = ({
  params: { productId },
}: {
  params: { productId: string };
}) => {
  return (
    <main className="p-6 flex items-center justify-center">
      <ProductDetail productId={+productId} />
    </main>
  );
};

export default DetailsPage;
