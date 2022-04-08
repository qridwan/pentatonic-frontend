import React from "react";
import InputField from "../../components/atoms/input/InputField";
import SelectField from "../../components/atoms/select/SelectField";
import Header from "../../components/common/Header/Header";
import styles from "./Redeem.module.css";
const sizes = [
  {
    value: "s",
    label: "small",
  },
  {
    value: "m",
    label: "Medium",
  },
  {
    value: "l",
    label: "Large",
  },
];
const countries = [
  {
    value: "canada",
    label: "Canada",
  },
  {
    value: "portugal",
    label: "Portugal",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
];
const Redeem = () => {
  const formRef = React.useRef(null);
  const handleForm = () => {
    formRef.current.reset();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.interior}>
          <a className={styles.btn} href="#open-modal">
            REDEEM
          </a>
        </div>
      </div>
      <div id="open-modal" className={styles[`modal-window`]}>
        <div>
          <a href="#" title="Close" className={styles["modal-close"]}>
            X
          </a>
          <h1>Personal Details</h1>
          <form action="#" ref={formRef}>
            <section className={styles.grid2}>
              <InputField title="First Name" id="fullName" placeholder="John" />
              <InputField
                placeholder="Appleseed"
                title="Last Name"
                id="lastName"
              />
              <SelectField
                title="T-Shirt size"
                id="size"
                placeholder="Select Size"
                options={sizes}
              />
            </section>

            <InputField
              title="E-mail Adress"
              id="email"
              type="email"
              placeholder="Example@molecularverse.com"
            />
            <InputField
              title="Address"
              id="adress"
              mb4
              placeholder="1st line off address"
            />
            <InputField
              id="adress2"
              mb4
              placeholder="2nd line off address (optional)"
            />
            <div className={styles.grid2}>
              <InputField id="city" placeholder="City" mb4 />
              <InputField
                placeholder="Postcode"
                id="postcode"
                type="number"
                mb4
              />
              <SelectField
                id="country"
                placeholder="Country"
                options={countries}
              />
            </div>
          </form>
          {/* action buttons */}
          <div className={styles.BtnContainer}>
            <a onClick={handleForm} href="#" className={styles.cancel_btn}>
              CANCEL
            </a>
            <a onClick={handleForm} href="#" className={styles.redeem_btn}>
              REDEEM
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redeem;
