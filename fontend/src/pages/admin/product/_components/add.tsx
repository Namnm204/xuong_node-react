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
import { IProduct } from "@/interfaces/product";
import { addProduct } from "@/service/product";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
type Input = {
  name: string;
  category?: string;
  image: string;
  price: number;
  gallery?: string[];
  description: string;
  discount: number;
  featured: boolean;
  countInStock: number;
};

const productSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Vui lòng nhập tên sản phẩm",
    "string.base": "Vui lòng nhập tên sản phẩm",
    "any.required": "Vui lòng nhập tên sản phẩm",
  }),
  price: Joi.number().required().messages({
    "number.empty": "Vui lòng nhập giá sản phẩm",
    "number.base": "Vui lòng nhập giá sản phẩm",
    "any.required": "Vui lòng nhập giá sản phẩm",
  }),
  discount: Joi.number().required().messages({
    "number.empty": "Vui lòng nhập giảm giá sản phẩm",
    "number.base": "Vui lòng nhập giảm giá sản phẩm",
    "any.required": "Vui lòng nhập giảm giá sản phẩm",
  }),
  featured: Joi.boolean().required().messages({
    "boolean.empty": "Vui lòng chọn nổi bật sản phẩm",
    "boolean.base": "Vui lòng chọn nổi bật sản phẩm",
    "any.required": "Vui lòng chọn nổi bật sản phẩm",
  }),
  countInStock: Joi.number().required().messages({
    "number.empty": "Vui lòng nhập số lượng sản phẩm",
    "number.base": "Vui lòng nhập số lượng sản phẩm",
    "any.required": "Vui lòng nhập số lượng sản phẩm",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Vui lòng nhập mô tả sản phẩm",
    "string.base": "Vui lòng nhập mô tả sản phẩm",
    "any.required": "Vui lòng nhập mô tả sản phẩm",
  }),
  image: Joi.string().required().messages({
    "string.empty": "Vui lòng nhập hình ảnh sản phẩm",
    "string.base": "Vui lòng nhập hình ảnh sản phẩm",
    "any.required": "Vui lòng nhập hình ảnh sản phẩm",
  }),
  category: Joi.string().required().messages({
    "string.empty": "Vui lòng chọn danh mục sản phẩm",
    "string.base": "Vui lòng chọn danh mục sản phẩm",
    "any.required": "Vui lòng chọn danh mục sản phẩm",
  }),
  gallery: Joi.array().required().messages({
    "array.empty": "Vui lòng chọn ảnh sản phẩm",
    "array.base": "Vui lòng chọn ảnh sản phẩm",
    "any.required": "Vui lòng chọn ảnh sản phẩm",
  }),
});
const ProductAdd = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: joiResolver(productSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      discount: "",
      featured: false,
      countInStock: "",
      image: "",
      gallery: [],
      category: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await addProduct(product);
      return data;
    },
    onSuccess: () => {
      // form.reset();
      toast({
        title: "Thêm sản phẩm thành công",
        variant: "success",
      });
    },
  });
  const onSubmit: SubmitHandler<IProduct> = (product: IProduct) => {
    mutation.mutate(product);
  };
  return (
    <div>
      <h1 className="text-center">THÊM SẢN PHẨM</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 main-content-new"
        >
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input {...field} id="name" {...form.register("name")} />
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
                  <Input {...field} id="price" {...form.register("price")} />
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
                  <Input
                    {...field}
                    id="category"
                    {...form.register("category")}
                  />
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
                  <Input {...field} id="image" {...form.register("image")} />
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
                  <Input
                    {...field}
                    id="description"
                    {...form.register("description")}
                  />
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
                  <Input
                    {...field}
                    id="discount"
                    {...form.register("discount")}
                  />
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
          <Link to={"/admin/products"}>
            <button className="btn btn-primary">{"Danh sách"}</button>
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default ProductAdd;
