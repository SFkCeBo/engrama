import type { Metadata } from "next";
import { DoorPage } from "@/components/door/door-page";
import { getDoor } from "@/content/site";

const door = getDoor("organizaciones");

export const metadata: Metadata = { title: door.name, description: door.intro[0] };

export default function Organizaciones() {
  return <DoorPage door={door} />;
}
