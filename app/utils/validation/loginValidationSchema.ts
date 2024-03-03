import { z } from "zod";

export const loginValidationSchema = z.object({
    name: z.string().min(1, "名前は必須です。"),
    email: z.string().email("正しいメールアドレスを入力してください"),
    password: z.string().min(8, "パスワードは8文字以上で入力してください。"),
})