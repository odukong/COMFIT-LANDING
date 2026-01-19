import { NavLink } from "react-router-dom";

import { LOGO } from "@/shared/assets/icons";

import * as styles from "./header.css";

export const Header = () => {
  return (
    <header className={styles.headerLayout}>
      <div className={styles.header}>
        <div className={styles.menus}>
          <NavLink to="/" aria-label="메인으로 이동">
            <LOGO />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
