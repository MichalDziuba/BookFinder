import styles from './HomePage.module.css'
export const HomePage = () => {

  
    return (//first welcome page
      <div>
        <h1>Welcome to your ebooks libary! </h1>
       <div className={styles.text__wrapper}> <p >
          You will find the world’s great literature here, with focus on older
          works for which U.S. copyright has expired. Thousands of volunteers
          digitized and diligently proofread the eBooks, for you to enjoy. You
          can find and read them online.
        </p> </div>
      </div>
    );
}