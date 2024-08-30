"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  addProduct,
  editProduct,
  getProductsFromLocalStorage,
} from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoaderIcon from "./Loader";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Product name must be at least 2 characters.",
    })
    .trim()
    .toLowerCase(),
  price: z
    .number()
    .min(0, {
      message: "Minimum of $0.00",
    })
    .max(10000, {
      message: "Maximum of $10,000.00",
    }),
  description: z
    .string()
    .min(10, {
      message: "Description must be minimum of 10 characters.",
    })
    .max(1500, {
      message: "Description must be maximum of 1500 characters.",
    }),
  category: z.enum([
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ]),
});

const ProductForm = ({ type, productId }: ProductFormProps) => {
  const router = useRouter();
  const [data, setData] = useState<Product | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      category: "men's clothing",
    },
  });

  // 2. Get form data and update default values for edit.
  useEffect(() => {
    const getData = async () => {
      if (type === "edit" && productId) {
        const localProduct: Product[] = await getProductsFromLocalStorage();
        const prod = localProduct.find((product) => product.id === productId);

        if (!prod) {
          router.push("/");
        } else {
          setData(prod);
          form.reset({
            title: prod.title,
            price: prod.price,
            description: prod.description,
            category: prod.category,
          });
        }
      }
    };

    getData();
  }, [productId, router, type, form]);

  // 3. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (type === "add") {
      await addProduct(values);
    } else {
      const editedProduct = {
        ...data!,
        ...values!,
      };
      await editProduct(editedProduct);
    }
    router.push("/");
  }

  if (type === "edit" && !data) return <LoaderIcon />;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-md p-4 w-[22rem] sm:w-[30rem] shadow-black shadow-lg"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="p-1 shadow-background shadow-md rounded-md">
              <FormLabel className="text-lg font-medium italic">
                Name:
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Product name"
                  className="bg-transparent border-2 border-background p-1 text-base"
                  type="text"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="p-1 shadow-background shadow-md rounded-md">
              <FormLabel className="text-lg font-medium italic">
                Price:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="100"
                  {...field}
                  className="bg-transparent border-2 border-background p-1 text-base"
                  type="number"
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="p-1 shadow-background shadow-md rounded-md">
              <FormLabel className="text-lg font-medium italic">
                Description:
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Product description . . ."
                  {...field}
                  className="bg-transparent h-60 border-2 border-background p-1 text-base resize-none"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="p-1 shadow-background shadow-md rounded-md">
              <FormLabel className="text-lg font-medium italic">
                Category:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="bg-transparent border-2 border-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-background2">
                  <SelectItem
                    className="text-lg font-medium hover:bg-white rounded-md"
                    value="men's clothing"
                  >
                    Male
                  </SelectItem>
                  <SelectItem
                    className="text-lg font-medium hover:bg-white rounded-md"
                    value="women's clothing"
                  >
                    Female
                  </SelectItem>
                  <SelectItem
                    className="text-lg font-medium hover:bg-white rounded-md"
                    value="jewelery"
                  >
                    Jewelery
                  </SelectItem>
                  <SelectItem
                    className="text-lg font-medium hover:bg-white rounded-md"
                    value="electronics"
                  >
                    Electronics
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-cyan-500 w-full text-lg font-medium italic"
        >
          {`${type === "add" ? "Add" : "Edit"} Product`}
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
