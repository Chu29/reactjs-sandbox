import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to the Home Page</h1>
      <Link href="/cabins">Explore Luxury Cabins</Link>
    </div>
  );
}
