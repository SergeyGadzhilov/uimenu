import RCMenuHeader from "../components/RCMenuHeader";
import RCMenuBanner from "../components/RCMenuBanner";
import RCMenuEditorSection from "../components/RCMenuEditorSection";
import RCMenuFooter from "../components/RCMenuFooter";
import RCMenuPlansAndPrices from "../components/RCMenuPlansAndPrices";

function IndexPage() {
  return (
    <div id="landing">
      <RCMenuHeader/>
      <RCMenuBanner/>
      <RCMenuEditorSection/>
      <RCMenuPlansAndPrices/>
      <RCMenuFooter/>
    </div>
  );
}

export default IndexPage;
