"use client";

const DeleteButton = ({ onClick, productId }: DeleteButtonProps) => {
  return (
    <button
      type="button"
      className="px-3 py-1 rounded-lg text-sm lg:text-lg font-medium transition-all border-background border-2 bg-transparent text-background hover:bg-background hover:text-white"
      onClick={() => onClick(productId)}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
