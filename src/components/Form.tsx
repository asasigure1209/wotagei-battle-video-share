"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Form() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/videos/${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレスを入力"
        required
      />
      <button type="submit">自分の動画を探す</button>
    </form>
  );
}

export default Form;
