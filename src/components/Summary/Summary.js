import { useState } from 'react';
import styles from "./Summary.module.css";


export default function Summary(props){
    return (
        <div className={styles.form}>
            <h1 className={styles.heading}>Summary</h1>
            <div className={styles.details}>
            <p><b>Name</b> : {props.name}</p>
            <p><b>Email</b> : {props.email}</p>
            <p><b>Phone</b> : {props.phone}</p>
            <p><b>Plan</b> : {props.plan}</p>
            <p><b>Total</b> : {props.total}</p>
            <hr />
            <p><b>Grand Total</b> :</p>
            <p className={styles.grandTotal}>{props.grandTotal}</p>
            </div>
        </div>
    );
}