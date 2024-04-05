import Link from "next/link";

export default function Magazine() {
  return (
    <main>
      <Link className="go-home-link" href={"/"}>❮ To main page</Link>
      <h2>Magazine page</h2>
    </main>
  );
}
