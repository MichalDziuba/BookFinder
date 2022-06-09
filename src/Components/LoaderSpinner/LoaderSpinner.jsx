import styles from './LoaderSpinner.module.css';
export const LoaderSpinner = () => { 
   return( <div className={styles.lds__roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>)
}
