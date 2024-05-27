import RCMenuHeader from "../components/RCMenuHeader/RCMenuHeader";
import RCMenuBanner from "../components/RCMenuBanner/RCMenuBanner";
import RCMenuEditorSection from "../components/RCMenuEditorSection";
import RCMenuFooter from "../components/RCMenuFooter";
import RCMenuPlansAndPrices from "../components/RCMenuPlansAndPrices";
import RCMenuContactsSection from "../sections/contacts/RCMenuContactsSection";

function IndexPage() {
  return (
    <div id="landing">
      <RCMenuHeader/>
      <RCMenuBanner/>
      <RCMenuEditorSection/>
      <RCMenuPlansAndPrices/>
      <RCMenuContactsSection/>
      <RCMenuFooter/>
    </div>
  );
}

export default IndexPage;
