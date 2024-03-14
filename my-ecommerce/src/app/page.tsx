import { Video } from "@/components/original/Ottiglio";
import NavBarMenu from "@/components/original/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="my-0 bg-auto bg-amber-700">
        <NavBarMenu/>
      </div>
      <div>
        <Video/>
      </div>
    </main>
  );
}
