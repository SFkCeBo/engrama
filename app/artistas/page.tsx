import type { Metadata } from "next";
import { DoorPage } from "@/components/door/door-page";
import { getDoor } from "@/content/site";

const door = getDoor("artistas");

export const metadata: Metadata = { title: door.name, description: door.intro[0] };

export default function Artistas() {
  return <DoorPage door={door} />;
}
