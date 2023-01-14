
import YourInfo from "../../components/YourInfo/YourInfo";
import styles from "./Home.module.css";

export default function Home() {
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
                </div>
                <YourInfo />
                <div className={styles.footer}>
                    <button className={styles.goBack}><h3>Go Back</h3></button>
                    <button className={styles.nextStep}><h3>Next Step</h3></button>
                </div>
            </div>
        </div>
    );
}