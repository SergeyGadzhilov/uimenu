import UIMenuHeader from "../components/UIMenuHeader/UIMenuHeader";
import UIMenuBanner from "../components/UIMenuBanner/UIMenuBanner";
import UIMenuEditorSection from "../components/UIMenuEditorSection";
import UIMenuFooter from "../components/UIMenuFooter";
import UIMenuPlansAndPrices from "../components/UIMenuPlansAndPrices";
import UIMenuContactsSection from "../sections/contacts/UIMenuContactsSection";

function IndexPage() {
  return (
    <div id="landing">
      <UIMenuHeader/>
      <UIMenuBanner/>
      <UIMenuEditorSection/>
      <UIMenuPlansAndPrices/>
      <UIMenuContactsSection/>
      <UIMenuFooter/>
    </div>
  );
}

export default IndexPage;
