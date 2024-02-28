import React from "react";
import styles from "./App.module.css";

import logo from "./assets/logo.png";
import award from "./assets/award.png";
import tool from "./assets/tools.png";
import banner_img from "./assets/photo.png";

import { FaFacebook } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

const App = () => {
  return (
    <div className={styles.app_container}>
      <img className={styles.logo} src={logo} alt="CRI Fluid Systems" />
      <div className={styles.main}>
        <img className={styles.awards_img} src={award} alt="Award" />

        <div className={styles.left}>
          <p className={styles.heading}>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className={styles.list}>
            <li className={styles.list_point}>
              <p className={styles.list_para}>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </p>
            </li>
            <li className={styles.list_point}>
              <p className={styles.list_para}>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </p>
            </li>
          </ul>
          <img className={styles.banner_img} src={banner_img} alt="Banner" />
          <p>
            Government of India has awarded the{" "}
            <span className={styles.bold}>
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={`${styles.bold} ${styles.center}`}>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img className={styles.tools} src={tool} alt="tools" />
        <p className={styles.center}>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr />
      <p className={`${styles.heading} ${styles.center}`}>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className={styles.center}>
        CHEMICALS & PROCESS <span className={styles.vert_line}>|</span> POWER{" "}
        <span className={styles.vert_line}>|</span> WATER & WASTE WATER{" "}
        <span className={styles.vert_line}>|</span> OILS & GAS{" "}
        <span className={styles.vert_line}>|</span> PHARMA{" "}
        <span className={styles.vert_line}>|</span> SUGARS & DISTILLERIES{" "}
        <span className={styles.vert_line}>|</span> PAPER & PULP{" "}
        <span className={styles.vert_line}>|</span> MARINE & DEFENCE{" "}
        <span className={styles.vert_line}>|</span> METAL & MINING{" "}
        <span className={styles.vert_line}>|</span> FOOD & BEVERAGE{" "}
        <span className={styles.vert_line}>|</span> PETROCHEMICAL & REFINERIES{" "}
        <span className={styles.vert_line}>|</span> SOLAR{" "}
        <span className={styles.vert_line}>|</span> BUILDING{" "}
        <span className={styles.vert_line}>|</span> HVAC{" "}
        <span className={styles.vert_line}>|</span> FIRE FIGHTING{" "}
        <span className={styles.vert_line}>|</span> AGRICULTURE & RESIDENTIAL
      </p>

      <footer>
        <a
          href="#a"
          className={styles.footer_part}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuPhone style={{ color: "white" }} size="2rem" />
          <p className={styles.footer_text}>
            Toll free <span>1800 200 1234</span>
          </p>
        </a>

        <a
          href="www.facebook.com/cripumps"
          className={styles.footer_part}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={{ color: "white" }} size="2rem" />
          <p className={styles.footer_text}>www.facebook.com/cripumps</p>
        </a>

        <a
          href="www.crigroups.com"
          className={styles.footer_part}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe style={{ color: "white" }} size="2rem" />
          <p className={styles.footer_text}>www.crigroups.com</p>
        </a>
      </footer>
    </div>
  );
};

export default App;
