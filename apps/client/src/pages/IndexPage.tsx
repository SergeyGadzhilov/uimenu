import RCMenuHeader from "../components/RCMenuHeader";
import RCMenuBanner from "../components/RCMenuBanner";
import RCMenuEditorSection from "../components/RCMenuEditorSection";
import RCMenuFooter from "../components/RCMenuFooter";

function IndexPage() {
  return (
    <div id="landing">
      <RCMenuHeader/>
      <RCMenuBanner/>
      <RCMenuEditorSection/>
      <RCMenuFooter/>
    </div>
  );
}

export default IndexPage;
