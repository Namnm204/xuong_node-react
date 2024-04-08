//nơi khai báo các kiểu dữ liệu
export interface IProduct {
  _id?: number | string;
  name: string;
  category?: string;
  image: string;
  price: number;
  gallery?: string[];
  description: string;
  discount: number;
  featured: boolean;
  countInStock: number;
}
