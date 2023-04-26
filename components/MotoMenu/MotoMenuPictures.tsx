import { FC } from "react";
import styles from "../../styles/MotoMenu.module.scss";
import Image from "next/image";

type Props = {
  models?: {
    id: number;
    category: string;
    coverUrl: string;
    alt?: string;
    motos: {
      id: number;
      name: string;
      pictureUrl: string;
      url: string;
    }[];
  };
};

export const MotoMenuPictures: FC<Props> = (props) => {
  const { models } = props;
  return (
    <div className={styles.MotoMenuPictures}>
      <div className={styles.MotoMenuMainPictureContainer}>
        <div className={styles.MotoMenuMainPicture}>
          <Image src={models?.coverUrl || "#"} alt={models?.alt || ""} fill />
        </div>
      </div>
      <div className={styles.MotoMenuModels}>
        {models?.motos.map((moto) => (
          <a
            key={models.category + moto.id}
            href={moto.url}
            className={styles.MotoMenuModel}
          >
            <div className={styles.MotoMenuModelPicture}>
              <Image src={moto.pictureUrl} alt={moto.name} fill />
            </div>
            <div className={styles.MotoMenuModelCaption}>{moto.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};
