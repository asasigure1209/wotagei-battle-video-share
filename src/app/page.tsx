export default function Home() {
  return (
    <main>
      <h1>エルニーニョ Vol. 6</h1>
      <form method="get" action="videos">
        <input
          type="email"
          name="email"
          placeholder="エントリー時のメールアドレス"
        ></input>
        <button type="submit">自分の動画を探す</button>
      </form>
    </main>
  );
}
