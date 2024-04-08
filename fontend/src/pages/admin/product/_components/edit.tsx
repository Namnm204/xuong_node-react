import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { IProduct } from "@/interfaces/product";
import { UpdateProduct } from "@/service/product";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

const ProductEdit = () => {
  const form = useForm();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await UpdateProduct(product._id);
      return data;
    },
    onSuccess: () => {
      form.reset();
      toast({
        title: "Sửa thành công",
        variant: "success",
      });
    },
  });
  const onSubmit: SubmitHandler<IProduct> = (product: IProduct) => {
    mutation.mutate(product);
  };
  return (
    <div>
      <h1 className="text-center">SỬA SẢN PHẨM</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 main-content-new"
        >
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={() => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input {...form.register("name")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="price">Price</FormLabel>
                <FormControl>
                  <Input {...field} id="price" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="category">category</FormLabel>
                <FormControl>
                  <Input {...field} id="category" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* image */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="image">Image</FormLabel>
                <FormControl>
                  <Input {...field} id="image" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormControl>
                  <Input {...field} id="description" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* discount */}
          <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="discount">Discount</FormLabel>
                <FormControl>
                  <Input {...field} id="discount" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* featured */}
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>featured?</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button variant="destructive" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductEdit;
