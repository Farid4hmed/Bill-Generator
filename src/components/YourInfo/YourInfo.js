import React from "react";
import { useState } from "react";
import Form from "./Form/Form";

import styles from "./YourInfo.module.css";


export default function YourInfo() {
    return (
        <div className={styles.form}>
            <h1 className={styles.heading}>Your Information</h1>
            <Form />
        </div>  
    );
}