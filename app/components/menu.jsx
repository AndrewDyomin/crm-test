import css from "./menu.module.css";
import Image from "next/image";

export const Menu = () => {
  return (
    <div className={css.container}>
      <div className={css.menuTitleArea}>
        <svg className={css.menuIcon}>
          <use href="/sprite.svg#icon-setting" />
        </svg>
        <p className={css.menuTitle}>Dashboard</p>
        <p className={css.version}>v.01</p>
      </div>
      <ul className={css.navList}>
        <li className={css.item}>
            <button className={css.button}>
                <svg className={`${css.menuIcon} ${css.navIcon}`}>
                    <use href='./sprite.svg#icon-key-square' width={'28px'} height={'28px'}/>
                </svg>
                Dashboard
            </button>
        </li>
        <li className={css.item}>
            <button className={css.button}>
                <svg className={`${css.menuIcon} ${css.navIcon}`}>
                    <use href='./sprite.svg#icon-d-square' width={'28px'} height={'28px'}/>
                </svg>
                Product
                <svg className={`${css.menuIcon} ${css.navIcon} ${css.chevron}`}>
                    <use href='./sprite.svg#icon-chevron-right' width={'20px'} height={'20px'}/>
                </svg>
            </button>
        </li>
        <li className={css.item}>
            <button className={`${css.button} ${css.activeBtn}`}>
                <svg className={`${css.menuIcon} ${css.navIcon}`}>
                    <use href='./sprite.svg#icon-user-square' width={'28px'} height={'28px'}/>
                </svg>
                Customers
                <svg className={`${css.menuIcon} ${css.navIcon} ${css.chevron}`}>
                    <use href='./sprite.svg#icon-chevron-right' width={'20px'} height={'20px'}/>
                </svg>
            </button>
        </li>
        <li className={css.item}>
            <button className={css.button}>
                <svg className={`${css.menuIcon} ${css.navIcon}`}>
                    <use href='./sprite.svg#icon-wallet-money' width={'28px'} height={'28px'}/>
                </svg>
                Income
                <svg className={`${css.menuIcon} ${css.navIcon} ${css.chevron}`}>
                    <use href='./sprite.svg#icon-chevron-right' width={'20px'} height={'20px'}/>
                </svg>
            </button>
        </li>
        <li className={css.item}>
            <button className={css.button}>
                <svg className={`${css.menuIcon} ${css.navIcon}`}>
                    <use href='./sprite.svg#icon-discount-shape' width={'28px'} height={'28px'}/>
                </svg>
                Promote
                <svg className={`${css.menuIcon} ${css.navIcon} ${css.chevron}`}>
                    <use href='./sprite.svg#icon-chevron-right' width={'20px'} height={'20px'}/>
                </svg>
            </button>
        </li>
        <li className={css.item}>
            <button className={css.button}>
                <svg className={`${css.menuIcon} ${css.navIcon}`}>
                    <use href='./sprite.svg#icon-message-question' width={'28px'} height={'28px'}/>
                </svg>
                Help
                <svg className={`${css.menuIcon} ${css.navIcon} ${css.chevron}`}>
                    <use href='./sprite.svg#icon-chevron-right' width={'20px'} height={'20px'}/>
                </svg>
            </button>
        </li>
      </ul>
      <div className={css.userCard}>
        <Image 
            src='/Evano.jpg'
            width={42}
            height={42}
            alt='User'
        />
        <div>
            <p className={css.userName}>Evano</p>
            <p className={css.userRole}>Project Manager</p>
        </div>
      </div>
    </div>
  );
}
