import Hero from "@/components/Hero";
import Skills from "@/components/Skill";
import Encryption from "@/components/Encryption";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { Widget } from "iframewidget";


export default function Home() {
  let options = {
    chatareabgcolor: "#00000000",
  }
  return (
    <main className="h-full w-full">
      <Widget TelechatbotId="1379160926" config={options}/>
      <div className="flex flex-col  gap-0 lg:gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
