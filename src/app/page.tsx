import { Candidate } from "@/component/candidate";
import { HotJob } from "@/component/hot-job";
import { Slider } from "@/component/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <HotJob />
      <Candidate />
    </>
  );
}
