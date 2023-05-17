import Image from "next/image";
import Link from "next/link";

import styles from "@styles/Suggestions.module.scss";

export const Suggestions = () => {
  return (
    <div className={styles.Suggestions}>
      <h2>Sugeridos</h2>
      <div className={styles.SuggestionsCardGroup}>
        <div className={styles.SuggestionsCard}>
          <Link href="/taller">
            <div className={styles.SuggestionsImageContainer}>
              <Image
                src="/img/sugeridos/servicio.jpg"
                alt="Programador de servicio"
                fill
              />
            </div>
            <div className={styles.SuggestionsCardTitle}>
              Programa <span>tu servicio</span>
            </div>
          </Link>
        </div>

        <div className={styles.SuggestionsCard}>
          <Link href="/ubicanos">
            <div className={styles.SuggestionsImageContainer}>
              <Image
                src="/img/sugeridos/ubicanos.jpg"
                alt="Sede de yamaha"
                fill
              />
            </div>
            <div className={styles.SuggestionsCardTitle}>
              <span>Ubícanos</span>
            </div>
          </Link>
        </div>

        <div className={styles.SuggestionsCard}>
          <Link href="/repuestos">
            <div className={styles.SuggestionsImageContainer}>
              <Image src="/img/sugeridos/repuestos.png" alt="Repuestos" fill />
            </div>

            <div className={styles.SuggestionsCardTitle}>
              Consigue <span>tus repuestos</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
