import React from 'react';
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card/Card';
import SectionImage4 from './images/Sign_Lawconnect_App.png';
import SectionImage3 from './images/Sharing_Doc.png';
import SectionImage1 from './images/Section1.png';
import details from './mockupdata/mockups';

function App() {
  return (
    <div className={styles["App"]}>
      <Navbar/>
      <div className={styles["section1"]}>
        <div className={styles["section1_content"]}>
          <div>
            <h1>
              The place to work with your lawyer
            </h1>
            <p>
              Your lawyer uses LawConnect to share information with you about your legal case in a privite, convenient and secure way.
            </p>
            <button>
              Create Free Account
            </button>
          </div>
          <div className={styles["section_image"]}>
            <img src={SectionImage1} /></div>
        </div>
      </div>

      <div className={styles["section2"]}>
        <div className={styles["section2_content"]}>
          <div>
            <h2>
              One Solution Designed to Make Your Firm More Money
            </h2>
            <Card title={details[0].title} description={details[0].description} image={details[0].image} />
            <Card title={details[1].title} description={details[1].description} image={details[1].image} />
            <Card title={details[2].title} description={details[2].description} image={details[2].image} />
          </div>
        </div>
      </div>

      <div className={styles["section3"]}>
        <div className={styles["section3_content"]}>
          <div style={{width: "50%"}}>
            <h2>
              Sharing Documents
            </h2>
            <p>
              Your lawyer will share documents related to your case with you, via LawConnect. Each time a document is shared by your lawyer, you will receive an email notification so you can access the document.
            </p>
            <p>
              If you already have a LawConnect account, you can login and an alert will be in your notifications tab that a document has been shared.
            </p>
          </div>
          <div className={styles["section_image"]}>
            <img src={SectionImage3} alt="LawConnect_App_Signing Documents Electronically" /></div>
        </div>
      </div>

      <div className={styles["section4"]}>
        <div className={styles["section4_content"]}>

          <div className={styles["section_image"]}>
            <img src={SectionImage4} alt="LawConnect_App_Sharing Documents" />
          </div>
          <div style={{width: "50%"}}>
            <h2>
              Signing Documents Electronically
            </h2>
            <p>
              LawConnect integrates with DocuSign to provide our users with a quick, easy and secure way to sign importnt legal documents online.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
