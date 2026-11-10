import type { Metadata } from "next";
import { DoorPage } from "@/components/door/door-page";
import { getDoor } from "@/content/site";

const door = getDoor("personas");

export const metadata: Metadata = { title: door.name, description: door.intro[0] };

export default function Personas() {
  return <DoorPage door={door} />;
}
