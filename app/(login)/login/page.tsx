"use client";

import { useForm } from "react-hook-form";
import { loginValidationSchema } from "../../utils/validation/loginValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginForm = {
  name: string;
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(loginValidationSchema)
  })

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  }

  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="名前">名前</label>
        <input id="name" type="text" {...register("name")} />
        <p style={
          { color: "red" }
        }>
          {errors.name?.message as React.ReactNode}
        </p>

        <label htmlFor="メールアドレス">メールアドレス</label>
        <input id="email" type="email" {...register("email")} />
        <p style={
          { color: "red" }
        }>
          {errors.email?.message as React.ReactNode}
        </p>


        <label htmlFor="パスワード">パスワード</label>
        <input id="password" type="password" {...register("password")} />
        <p style={
          { color: "red" }
        }>
          {errors.password?.message as React.ReactNode}
        </p>

        <button type="submit">送信</button>
      </form >
    </>
  );
}
