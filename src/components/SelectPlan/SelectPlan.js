
import Toggle from "./Toggle/Toggle";
import styles from "./SelectPlan.module.css";


export default function SelectPlan(props) {
    const timePeriodStyles = { "color": "#001126", "fontWeight": "700" };
    const planStyles = { "background": "#DADADA"};

    function changeTimePeriod(state) {
        if (state) {
            props.setPeriod(true);
            props.setYearlyStyles(timePeriodStyles);
            props.setMonthlyStyles({ "color": "#676767", "fontWeight": "600" });
        }
        else {
            props.setPeriod(false);
            props.setMonthlyStyles(timePeriodStyles);
            props.setYearlyStyles({ "color": "#676767", "fontWeight": "600" });
        }
    }

    function handleArcade() {
        props.setPlan(1);
        props.setArcade(planStyles);
        props.setAdvanced({});
        props.setPro({});

        props.setTotal("$9");
    }
    function handleAdvanced() {
        props.setPlan(2);
        props.setArcade({});
        props.setAdvanced(planStyles);
        props.setPro({});

        props.setTotal("$12");
    }
    function handlePro() {
        props.setPlan(3);
        props.setArcade({});
        props.setAdvanced({});
        props.setPro(planStyles);

        props.setTotal("$15");
    }

    return (
        <div className={styles.form}>
            <h1 className={styles.heading}>Select Your Plan</h1>
            <p className={styles.text}>You have the option of monthly or yearly billing</p>

            <div className={styles.gridContainer}>
                <div style={props.arcade} className={styles.arcade} onClick={handleArcade}>
                    <div className={styles.circle1}>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0.99904C7.53043 0.99904 8.03914 1.20975 8.41421 1.58483C8.78929 1.9599 9 2.46861 9 2.99904C9 3.52947 8.78929 4.03818 8.41421 4.41325C8.03914 4.78833 7.53043 4.99904 7 4.99904C6.46957 4.99904 5.96086 4.78833 5.58579 4.41325C5.21071 4.03818 5 3.52947 5 2.99904C5 2.46861 5.21071 1.9599 5.58579 1.58483C5.96086 1.20975 6.46957 0.99904 7 0.99904ZM7.5 5.95804C8.2417 5.83267 8.90924 5.43324 9.37032 4.83891C9.83141 4.24457 10.0524 3.49871 9.98949 2.74912C9.92659 1.99954 9.58438 1.30094 9.03069 0.791761C8.47699 0.282587 7.75222 0 7 0C6.24778 0 5.52301 0.282587 4.96932 0.791761C4.41562 1.30094 4.07341 1.99954 4.01051 2.74912C3.9476 3.49871 4.16859 4.24457 4.62968 4.83891C5.09076 5.43324 5.7583 5.83267 6.5 5.95804V8.99904H4.5C4.10218 8.99904 3.72064 9.15707 3.43934 9.43838C3.15804 9.71968 3 10.1012 3 10.499V10.999H2C1.46957 10.999 0.960859 11.2098 0.585786 11.5848C0.210714 11.9599 0 12.4686 0 12.999V15.499C0 15.6316 0.0526785 15.7588 0.146447 15.8526C0.240215 15.9464 0.367392 15.999 0.5 15.999H13.5C13.6326 15.999 13.7598 15.9464 13.8536 15.8526C13.9473 15.7588 14 15.6316 14 15.499V12.999C14 12.4686 13.7893 11.9599 13.4142 11.5848C13.0391 11.2098 12.5304 10.999 12 10.999H11V10.499C11 10.1012 10.842 9.71968 10.5607 9.43838C10.2794 9.15707 9.89782 8.99904 9.5 8.99904H7.5V5.95804ZM4.5 9.99904H9.5C9.63261 9.99904 9.75979 10.0517 9.85355 10.1455C9.94732 10.2393 10 10.3664 10 10.499V10.999H4V10.499C4 10.3664 4.05268 10.2393 4.14645 10.1455C4.24021 10.0517 4.36739 9.99904 4.5 9.99904ZM2 11.999H12C12.2652 11.999 12.5196 12.1044 12.7071 12.2919C12.8946 12.4795 13 12.7338 13 12.999V14.999H1V12.999C1 12.7338 1.10536 12.4795 1.29289 12.2919C1.48043 12.1044 1.73478 11.999 2 11.999Z" fill="white" />
                        </svg>
                        <h2>Arcade</h2>
                        <p>$9/mo</p>
                    </div>
                </div>
                <div style={props.advanced} className={styles.advanced} onClick={handleAdvanced}>
                    <div className={styles.circle2}>
                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6 0H5.4C3.96783 0 2.59432 0.579463 1.58162 1.61091C0.568927 2.64236 0 4.04131 0 5.5C0 6.95869 0.568927 8.35764 1.58162 9.38909C2.59432 10.4205 3.96783 11 5.4 11H12.6C14.0322 11 15.4057 10.4205 16.4184 9.38909C17.4311 8.35764 18 6.95869 18 5.5C18 4.04131 17.4311 2.64236 16.4184 1.61091C15.4057 0.579463 14.0322 0 12.6 0ZM8.1 6.41667H6.3V8.25H4.5V6.41667H2.7V4.58333H4.5V2.75H6.3V4.58333H8.1V6.41667ZM11.25 8.25C10.892 8.25 10.5486 8.10513 10.2954 7.84727C10.0422 7.58941 9.9 7.23967 9.9 6.875C9.9 6.51033 10.0422 6.16059 10.2954 5.90273C10.5486 5.64487 10.892 5.5 11.25 5.5C11.608 5.5 11.9514 5.64487 12.2046 5.90273C12.4578 6.16059 12.6 6.51033 12.6 6.875C12.6 7.23967 12.4578 7.58941 12.2046 7.84727C11.9514 8.10513 11.608 8.25 11.25 8.25ZM13.95 5.5C13.592 5.5 13.2486 5.35513 12.9954 5.09727C12.7422 4.83941 12.6 4.48967 12.6 4.125C12.6 3.76033 12.7422 3.41059 12.9954 3.15273C13.2486 2.89487 13.592 2.75 13.95 2.75C14.308 2.75 14.6514 2.89487 14.9046 3.15273C15.1578 3.41059 15.3 3.76033 15.3 4.125C15.3 4.48967 15.1578 4.83941 14.9046 5.09727C14.6514 5.35513 14.308 5.5 13.95 5.5Z" fill="white" />
                        </svg>
                        <h2>Advanced</h2>
                        <p>$12/mo</p>
                    </div>
                </div>
                <div style={props.pro} className={styles.pro} onClick={handlePro}>
                    <div className={styles.circle3}>
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.159 0.026C10.8658 0.658726 9.44949 1.00008 8.01 1.026C6.54197 0.999635 5.0979 0.649287 3.781 0C1.17 0.026 0 1.196 0 3.866V9.866C0.0078858 10.4416 0.242094 10.991 0.651947 11.3952C1.0618 11.7994 1.61434 12.0261 2.19 12.026H2.422C2.8795 12.0261 3.32554 11.883 3.69752 11.6166C4.0695 11.3503 4.34872 10.9741 4.496 10.541C4.801 9.626 5.641 8.026 6.581 8.026H9.421C10.361 8.026 11.201 9.626 11.501 10.526C11.6465 10.9623 11.9253 11.3418 12.2982 11.6109C12.6711 11.8801 13.1191 12.0253 13.579 12.026H13.811C15.021 12.026 16.001 11.046 16.001 9.836V3.836C16.001 1.196 14.831 0.026 12.161 0.026H12.159ZM4.999 5.026H3.999V6.026H2.999V5.026H1.999V4.026H2.999V3.026H3.999V4.026H4.999V5.026ZM10.059 6.136C9.91973 6.13593 9.78184 6.10844 9.6532 6.05508C9.52456 6.00173 9.40769 5.92356 9.30926 5.82503C9.21083 5.72651 9.13277 5.60956 9.07953 5.48087C9.0263 5.35218 8.99893 5.21427 8.999 5.075C8.99907 4.93573 9.02656 4.79784 9.07992 4.6692C9.13327 4.54056 9.21144 4.42369 9.30997 4.32526C9.40849 4.22683 9.52544 4.14877 9.65413 4.09553C9.78282 4.0423 9.92073 4.01493 10.06 4.015C10.3413 4.01513 10.611 4.12699 10.8097 4.32597C11.0085 4.52494 11.1201 4.79474 11.12 5.076C11.1199 5.35726 11.008 5.62695 10.809 5.82574C10.6101 6.02453 10.3403 6.13613 10.059 6.136ZM12.999 6.026C12.7338 6.026 12.4794 5.92064 12.2919 5.73311C12.1044 5.54557 11.999 5.29122 11.999 5.026C11.999 4.76078 12.1044 4.50643 12.2919 4.31889C12.4794 4.13136 12.7338 4.026 12.999 4.026C13.2642 4.026 13.5186 4.13136 13.7061 4.31889C13.8936 4.50643 13.999 4.76078 13.999 5.026C13.999 5.29122 13.8936 5.54557 13.7061 5.73311C13.5186 5.92064 13.2642 6.026 12.999 6.026Z" fill="white" />
                        </svg>
                        <h2>Pro</h2>
                        <p>$15/mo</p>
                    </div>
                </div>
            </div>

            <div className={styles.options}>
                <p style={props.monthlyStyles}>Monthly</p>
                <p style={props.yearlyStyles}>Yearly</p>
                <Toggle toggled={props.period} onClick={changeTimePeriod} />
            </div>
        </div>
    );
}