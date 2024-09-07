import UIMenuFooter from "../../components/UIMenuFooter";
import UIMenuHeader from "../../components/UIMenuHeader/UIMenuHeader";
import styles from "./terms.module.css";

export function Terms() {
    return (
        <>
            <UIMenuHeader/>
            <section className={styles.section}>
                <h3>Terms of Service</h3>
                <p>Before you use the platform, please read the following terms and conditions carefully.
                   By using the platform, you signify your agreement to these terms and conditions.</p>
                <p>This agreement, and all schedules and appendices attached or referred hereto, if any,
                   (“Agreement”) is an agreement between you as a user who accesses or establishes 
                   a connection to the website and internet service known as uimenu.com and UIMenu.com owned by 
                   individual entrepreneur Hadzhilov Serhii registration number 10000000225662,
                   Ukraine, Dnipro.</p>
            </section>
            <section className={styles.section}>
                <h3>Definitions and interpretations</h3>
                <ul>
                    <li><b>Account</b> - means the account created and used by User to access or use the Platform or Services.</li>
                    <li><b>Platform</b> - means the online platform (website, mobile site or mobile application) developed and/or operated by UIMenu.</li>
                    <li><b>Service</b> - means the services and features provided or made available by UIMenu through or on the Platform.</li>
                    <li><b>User/Users</b> - means all users who access or establish a connection to the Platform and/or UIMenu Services.</li>
                    <li><b>Information</b> - means any information, details, content, dimensions, data, maps, locations, photographs, text, descriptions, specifications, audio or video clips, graphics, and/or other materials.</li>
                </ul>
            </section>
            <section className={styles.section}>
                <h3>Information</h3>
                <p>
                    In order to submit or upload an Information User has to create an Account at the Platform in accordance 
                    with the registration process set out by UIMenu. Upon successful registration, User may be given access 
                    to UIMenu Services by logging in to User's Account.
                </p>
                <p>
                    UIMenu is entitled, in its sole and absolute discretion, to refuse to grant access to the User 
                    to the Platform and UIMenu Services or any part thereof.
                </p>
                <p>
                    By submitting or uploading any Information on or through the Platform and/or UIMenu Services, 
                    User is automatically grants, or warrants that the owner of such Information has expressly granted,
                    UIMenu the royalty-free, perpetual, irrevocable, non-exclusive right and license to reproduce, share,
                    publish and distribute such Information (in whole or in part) on or through the Platform.
                </p>
                <p>
                    User is not allowed to transmit or post (or cause to be transmitted or posted) through or on the Platform 
                    and/or UIMenu Services any Information which is or may be unlawful, technologically harmful, threatening, abusive, 
                    defamatory, vulgar, obscene, profane or otherwise objectionable, which encourages or may encourage conduct that 
                    would constitute a criminal offence, give rise to civil liability or otherwise violate any law or which violates 
                    or infringes or may violate or infringe the rights of others.
                </p>
                <p>
                    User ensures that all Information provided to UIMenu or published on the Platform by User is true,
                    complete, accurate and up-to-date and that User have all the necessary authority and right to publish or 
                    provide such Information. User warrant that UIMenu’s use of any such Information will not infringe the right 
                    (including without limitation the Intellectual Property Rights) of any third party.
                </p>
            </section>
            <section className={styles.section}>
                <h3>Warranty, Unavailability and Disclaimer</h3>
                <p>
                    The Service is provided on an "as is" and “as available” basis. UIMenu makes no warranties, expressed or implied, 
                    and hereby disclaims and negates all other warranties including, without limitation, implied warranties or 
                    conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property 
                    or other violation of rights.
                </p>
                <p>
                    Information made available through the Platform or UIMenu Services may be furnished to UIMenu by third parties,
                    including without limitation other users of the Platform. While UIMenu will use reasonable endeavours to 
                    ensure that such Information is communicated to User in its original form as supplied by the third party, 
                    UIMenu does not warrant that the said Information is accurate, complete, reliable, original, current, 
                    or error-free.
                </p>
                <p>
                    In no event will UIMenu (or any of its parents, subsidiaries, affiliates, employees, staff, and their 
                    respective directors, officers, employees, and agents), be liable for any direct, indirect, incidental, 
                    special or consequential damages that result from the use of, or the inability to use, any content, 
                    Information, material or postings on the Platform or the Platform itself. These limitations apply 
                    regardless of whether the party liable or allegedly liable was advised, had other reason to know, 
                    or in fact knew of the possibility of such damages.
                </p>
                <p>
                    UIMenu shall have the right at any time to add, delete, amend, or modify this Agreement, or any part thereof, 
                    or to impose new conditions. Such addition, deletion, amendment, or modification shall be effective immediately 
                    upon notice thereof, which may be given by means of, including, but not limited to, posting on the Platform, 
                    or by electronic or conventional mail, or by any other means by which you obtain notice thereof. 
                    Any use of the Platform and/or UIMenu Services after the issuance of such notice shall be deemed to constitute
                    acceptance of this Agreement with such addition, deletion, amendment, or modification.
                </p>
            </section>
            <UIMenuFooter/>
        </>
    );
}