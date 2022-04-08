import Link from "next/link";
import Image from "next/image"
import logo from "../../../assets/logo.png";
import twitter from "../../../assets/twitter.png";
import discord from "../../../assets/discord.png";
import koji from "../../../assets/koji.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <div>
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/collection">COLLECTION</Link></li>
            <li><Link href="/team">TEAM</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/redeem">REDEEM</Link></li>
          </ul>
        </div>
        <div className={styles.socials}>
          <ul>
            <li>
              <Image src={twitter} alt="" />
            </li>
            <li>
              <Image src={discord} alt="" />
            </li>
            <li>
              <Image src={koji} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <p>COPYRIGHT PENTATONIC 2022</p>
    </div>
  );
};

export default Footer;
