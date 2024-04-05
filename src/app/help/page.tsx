import Link from "next/link";

export default function Help() {
  return (
    <main>
      <Link className="go-home-link" href={"/"}>❮ To main page</Link>
      <h2>Help page</h2>
    </main>
  );
}