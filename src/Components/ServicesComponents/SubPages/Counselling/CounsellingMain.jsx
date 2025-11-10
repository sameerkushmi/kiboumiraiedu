import CounsellingHero from "./CounsellingHero";
import CounsellingForm from "./CounsellingForm";
import CounsellingInfo from "./CounsellingInfo";

export default function CounsellingMain() {
  return (
    <div>
      <CounsellingHero />
      <CounsellingInfo />
      <CounsellingForm />
      {/* <CounsellingCTA /> */}
    </div>
  );
}
