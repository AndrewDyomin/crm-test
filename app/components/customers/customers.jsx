"use client";

import { Status } from "./status";
import css from "./customers.module.css";
import styles from "../menu.module.css";
import Modal from "react-modal";
import { useState } from "react";
import Image from "next/image";

export const Customers = () => {
  const customers = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      tel: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      tel: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      tel: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      tel: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
    },
    {
      name: "Jerome Bell",
      company: "Google",
      tel: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active",
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      tel: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Curaçao",
      status: "Active",
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      tel: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      tel: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(9, 9, 9, 0.75)",
      position: "fixed",
    },
    content: {
      top: "60px",
      left: "auto",
      right: "-135px",
      bottom: "auto",
      transform: "translateX(-50%)",
      width: "300px",
      height: "80%",
      padding: "24px",
      borderRadius: "4px",
      border: "1px solid black",
      backgroundColor: "FFF",
      transition: "transform 1s ease-in-out",
      position: "absolute",
    },
  };

  return (
    <div className={css.area}>
      <div className={css.titleArea}>
        <div>
          <h2 className={css.title}>All Customers</h2>
          <p className={css.description}>Active Members</p>
        </div>
        <div className={css.searchArea}>
          <svg className={css.searchIcon}>
            <use href="/sprite.svg#icon-search" width={24} height={24} />
          </svg>
          <input className={css.searchInput} placeholder="Search" />
        </div>
      </div>
      <ul className={css.headersList}>
        <li>Customer Name</li>
        <li>Company</li>
        <li>Phone Number</li>
        <li>Email</li>
        <li>Country</li>
        <li>Status</li>
      </ul>
      <ul>
        {customers.map((customer) => (
          <li key={customer.name}>
            <ul className={css.customersList}>
              <li>{customer.name}</li>
              <li>{customer.company}</li>
              <li>{customer.tel}</li>
              <li>{customer.email}</li>
              <li>{customer.country}</li>
              <li>
                <Status toggle={customer.status} />
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <div className={css.paginationArea}>
        <p className={css.showData}>Showing data 1 to 8 of 256K entries</p>
        <ul className={css.buttonList}>
          <li>
            <button className={css.paginationBtn}>
              <svg className={css.sideIcon}>
                <use href="./sprite.svg#icon-left" width={10} height={10} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.currentPagination}>1</button>
          </li>
          <li>
            <button className={css.paginationBtn}>2</button>
          </li>
          <li>
            <button className={css.paginationBtn}>3</button>
          </li>
          <li>
            <button className={css.paginationBtn}>4</button>
          </li>
          <li>...</li>
          <li>
            <button className={css.paginationBtn}>40</button>
          </li>
          <li>
            <button className={css.paginationBtn}>
              <svg className={css.sideIcon}>
                <use href="./sprite.svg#icon-right" width={10} height={10} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <button className={css.menuButton} onClick={() => setIsModalOpen(true)}>
        <svg className={css.menuIcon}>
          <use href="/sprite.svg#icon-setting" />
        </svg>
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className={styles.mobileMenuContainer}>
          <div className={styles.menuTitleArea}>
            <svg className={styles.menuIcon}>
              <use href="/sprite.svg#icon-setting" />
            </svg>
            <p className={styles.menuTitle}>Dashboard</p>
            <p className={styles.version}>v.01</p>
          </div>
          <ul className={styles.navList}>
            <li className={styles.item}>
              <button className={styles.button}>
                <svg className={`${styles.menuIcon} ${styles.navIcon}`}>
                  <use
                    href="./sprite.svg#icon-key-square"
                    width={"28px"}
                    height={"28px"}
                  />
                </svg>
                Dashboard
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}>
                <svg className={`${styles.menuIcon} ${styles.navIcon}`}>
                  <use
                    href="./sprite.svg#icon-d-square"
                    width={"28px"}
                    height={"28px"}
                  />
                </svg>
                Product
                <svg
                  className={`${styles.menuIcon} ${styles.navIcon} ${styles.chevron}`}
                >
                  <use
                    href="./sprite.svg#icon-chevron-right"
                    width={"20px"}
                    height={"20px"}
                  />
                </svg>
              </button>
            </li>
            <li className={styles.item}>
              <button className={`${styles.button} ${styles.activeBtn}`}>
                <svg className={`${styles.menuIcon} ${styles.navIcon}`}>
                  <use
                    href="./sprite.svg#icon-user-square"
                    width={"28px"}
                    height={"28px"}
                  />
                </svg>
                Customers
                <svg
                  className={`${styles.menuIcon} ${styles.navIcon} ${styles.chevron}`}
                >
                  <use
                    href="./sprite.svg#icon-chevron-right"
                    width={"20px"}
                    height={"20px"}
                  />
                </svg>
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}>
                <svg className={`${styles.menuIcon} ${styles.navIcon}`}>
                  <use
                    href="./sprite.svg#icon-wallet-money"
                    width={"28px"}
                    height={"28px"}
                  />
                </svg>
                Income
                <svg
                  className={`${styles.menuIcon} ${styles.navIcon} ${styles.chevron}`}
                >
                  <use
                    href="./sprite.svg#icon-chevron-right"
                    width={"20px"}
                    height={"20px"}
                  />
                </svg>
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}>
                <svg className={`${styles.menuIcon} ${styles.navIcon}`}>
                  <use
                    href="./sprite.svg#icon-discount-shape"
                    width={"28px"}
                    height={"28px"}
                  />
                </svg>
                Promote
                <svg
                  className={`${styles.menuIcon} ${styles.navIcon} ${styles.chevron}`}
                >
                  <use
                    href="./sprite.svg#icon-chevron-right"
                    width={"20px"}
                    height={"20px"}
                  />
                </svg>
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}>
                <svg className={`${styles.menuIcon} ${styles.navIcon}`}>
                  <use
                    href="./sprite.svg#icon-message-question"
                    width={"28px"}
                    height={"28px"}
                  />
                </svg>
                Help
                <svg
                  className={`${styles.menuIcon} ${styles.navIcon} ${styles.chevron}`}
                >
                  <use
                    href="./sprite.svg#icon-chevron-right"
                    width={"20px"}
                    height={"20px"}
                  />
                </svg>
              </button>
            </li>
          </ul>
          <div className={styles.userCard}>
            <Image src="/Evano.jpg" width={42} height={42} alt="User" />
            <div>
              <p className={styles.userName}>Evano</p>
              <p className={styles.userRole}>Project Manager</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
