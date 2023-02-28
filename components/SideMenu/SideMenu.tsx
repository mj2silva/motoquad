import {
  faCalendarDays,
  faGear,
  faMotorcycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

import styles from "../../styles/SideMenu.module.scss";

type Props = {
  className?: string;
};

const sideLinks = [
  {
    label: "Cotizar modelo",
    url: "#",
    iconComponent: <FontAwesomeIcon icon={faMotorcycle} />,
  },
  {
    label: "Cotizar repuestos",
    url: "#",
    iconComponent: <FontAwesomeIcon icon={faGear} />,
  },
  {
    label: "Agendar servicio",
    url: "#",
    iconComponent: <FontAwesomeIcon icon={faCalendarDays} />,
  },
];

export const SideMenu: FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className={styles.SideMenu}>
        {sideLinks.map((sideLink) => {
          return (
            <div key={sideLink.label} className={styles.Item}>
              <div className={styles.Icon}>{sideLink.iconComponent}</div>
              <div className={styles.Link}>
                <a href={sideLink.url}>{sideLink.label}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
