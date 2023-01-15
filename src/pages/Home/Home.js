import { useState } from 'react';
import SelectPlan from "../../components/SelectPlan/SelectPlan";
import Summary from "../../components/Summary/Summary";
import YourInfo from "../../components/YourInfo/YourInfo";
import styles from "./Home.module.css";

export default function Home() {
    const [name, setName] = useState("Farid Ahmed");
    const [email, setEmail] = useState("faridahmed@xyz.com");
    const [phone, setPhone] = useState(9876543203);
    const [plan, setPlan] = useState("Arcade");
    const [total, setTotal] = useState("$9");
    const [grandTotal, setGrandTotal] = useState("$9");

    return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.step1}>
                        <p className={styles.pageNo}>1</p>
                    </div>
                    <p className={styles.stepNo1}>STEP 1</p>
                    <p className={styles.stepName1}>YOUR INFO</p>
                    <div className={styles.step2}>
                        <p className={styles.pageNo}>2</p>
                    </div>
                    <p className={styles.stepNo2}>STEP 2</p>
                    <p className={styles.stepName2}>SELECT PLAN</p>
                    <div className={styles.step3}>
                        <p className={styles.pageNo}>3</p>
                    </div>
                    <p className={styles.stepNo3}>STEP 3</p>
                    <p className={styles.stepName3}>SUMMARY</p>
                    <svg className={styles.one} width="208" height="198" viewBox="0 0 208 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H11.9622C16.2834 0 20.5672 0.800196 24.597 2.36012L25.127 2.5653C30.9897 4.83474 36.3719 8.18944 40.9913 12.4535L47 18L61.7963 35.6147C65.9247 40.5294 69.6307 45.7841 72.8747 51.3226L105.244 106.587C107.743 110.854 110.606 114.898 113.801 118.673L116.942 122.386C122.639 129.119 128.84 135.409 135.491 141.202L141 146L208 198H7C3.13401 198 0 194.866 0 191V0Z" fill="#625AFF" />
                    </svg>
                    <svg className={styles.two} width="58" height="121" viewBox="0 0 58 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="-2.5" cy="60.5" r="60.5" fill="#FFAF7E" />
                    </svg>
                    <svg className={styles.three} width="157" height="129" viewBox="0 0 157 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.1177 72.4644C70.3187 68.8529 75.7957 64.1219 80.2704 58.5117L107 25L112.973 16.9358C115.65 13.323 118.717 10.0172 122.12 7.07848L122.312 6.91213C126.022 3.70819 130.592 1.66555 135.453 1.03826L138.013 0.708002C141.61 0.243918 145.265 0.719143 148.624 2.0874L157 5.5V122C157 125.866 153.866 129 150 129H0L0.597266 125.864C1.524 120.999 3.36579 116.354 6.02484 112.175V112.175C7.9913 109.085 10.5126 106.385 13.4613 104.213L28 93.5L64.1177 72.4644Z" fill="#F5818F" />
                    </svg>
                    <svg className={styles.four1} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-1" y="12.1733" width="19.2782" height="5.86244" rx="2.93122" transform="rotate(-43.1042 -1 12.1733)" fill="#D9D9D9" />
                    </svg>
                    <svg className={styles.four2} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-1" y="12.1733" width="19.2782" height="5.86244" rx="2.93122" transform="rotate(-43.1042 -1 12.1733)" fill="#D9D9D9" />
                    </svg>
                    <svg className={styles.four3} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-1" y="12.1733" width="19.2782" height="5.86244" rx="2.93122" transform="rotate(-43.1042 -1 12.1733)" fill="#D9D9D9" />
                    </svg>
                </div>
                <YourInfo />
                {/* <SelectPlan setPlan={setPlan} setTotal={setTotal} setGrandTotal={setGrandTotal}/> */}
                {/* <Summary name={name} email={email} phone={phone} plan={plan} total={total} grandTotal={grandTotal}/> */}
                <div className={styles.footer}>
                    <button className={styles.goBack}>Go Back</button>
                    <button className={styles.nextStep}><h3>Next Step</h3></button>
                </div>
            </div>
        </div>
    );
}