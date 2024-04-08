import { useLocalStorage } from "@/hooks/useStorage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
const signinSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .min(3)
    .messages({
      "string.empty": "Vui lòng nhập email",
      "string.base": "Vui lòng nhập email",
      "any.required": "Vui lòng nhập email",
      "string.email": "Email không đúng định dạng",
      "string.min": "Email phải có ít nhất 3 ký tự",
    }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "Vui lòng nhập mật khẩu",
    "string.base": "Vui lòng nhập mật khẩu",
    "any.required": "Vui lòng nhập mật khẩu",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự",
  }),
});
const Signin = () => {
  const [, setUser] = useLocalStorage("user", {});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (formData: { email: string; password: string }) => {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/signin",
        formData
      );
      return data;
    },
    onSuccess: (data) => setUser(data),
    onError: (error) => console.log(error),
  });
  const onSubmit = (formData: { email: string; password: string }) => {
    mutate(formData);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email", { required: true, minLength: 3 })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button>Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Signin;
