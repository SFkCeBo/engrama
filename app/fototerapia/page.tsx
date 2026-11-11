import type { Metadata } from "next";
import { DoorPage } from "@/components/door/door-page";
import { phototherapy } from "@/content/site";

export const metadata: Metadata = {
  title: "Fototerapia y fotografía terapéutica",
  description: phototherapy.intro[0],
};

export default function Fototerapia() {
  return <DoorPage door={phototherapy} />;
}
