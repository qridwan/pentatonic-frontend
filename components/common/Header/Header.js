import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import twitter from "../../../assets/twitter.png";
import discord from "../../../assets/discord.png";
import koji from "../../../assets/koji.png";
import wallet from "../../../assets/wallet.png";
import menu from "../../../assets/menu.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <>
      <div className={styles.header_big}>
        <div className={styles.header_left}>
          <div className={styles.logo}>
            <h3>The Molecularverse</h3>
            <div>
              by{" "}
              <span>
                PENTATONIC<sup> &copy;</sup>
              </span>
            </div>
          </div>
          <ul>
            <li>
              <Link href="/collection">COLLECTION</Link>
            </li>
            <li>TEAM</li>
            <li>FAQs</li>
            <li>
              <Link href="/redeem">REDEEM</Link>
            </li>
          </ul>
        </div>
        <ul className={styles.header_right}>
          <li>
            <Image src={twitter} alt="Twitter" />
          </li>
          <li>
            <Image src={discord} alt="Discord" />
          </li>
          <li>
            <Image src={koji} alt="Koji" />
          </li>
          <li>
            <Image src={wallet} alt="Wallet" />
          </li>
        </ul>
      </div>
      <div className={styles.header_small}>
        <div className={styles.logo}>
          <h3>The Molecularverse</h3>
          <div>
            by{" "}
            <span>
              PENTATONIC<sup> &copy;</sup>
            </span>
          </div>
        </div>
        <div
          className={`${
            openHeader ? styles.side_nav_open : styles.side_nav_close
          }`}
        >
          <ul className={styles.side_nav_top}>
            <li>
              <Link href="/collection">COLLECTION</Link>
            </li>
            <li>TEAM</li>
            <li>FAQs</li>
            <li>REDEEM</li>
          </ul>
          <ul className={styles.side_nav_bottom}>
            <li>
              <Image src={twitter} alt="Twitter" />
            </li>
            <li>
              <Image src={discord} alt="Discord" />
            </li>
            <li>
              <Image src={koji} alt="Koji" />
            </li>
            <li>
              <Image src={wallet} alt="Wallet" />
            </li>
          </ul>
        </div>
        <div className={styles.menu_btn}>
          <Image
            src={menu}
            alt="Menu Icon"
            onClick={() => setOpenHeader(!openHeader)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
