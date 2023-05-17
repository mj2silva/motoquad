import styles from "@styles/RepairsForm.module.scss";

export const RepairsForm = () => {
  return (
    <div>
      <h2 className={styles.Title}>
        Cotiza <strong>tu repuesto</strong>
      </h2>
      <div className={styles.Directions}>
        Completa nuestro formulario y nos comunicamos contigo para darte
        información de nuestros servicios posventa
      </div>
      <form className={styles.RepairsForm}>
        <div className={styles.RepairsFormSection}>
          <div className={styles.RepairsFormInputGroup}>
            <div className={styles.RepairsFormInputSmall}>
              <label htmlFor="documentType">Tipo de documento</label>
              <select name="documentType">
                <option>DNI</option>
                <option>Pasaporte</option>
                <option>Carné de extranjería</option>
              </select>
            </div>
            <div className={styles.RepairsFormInput}>
              <label htmlFor="documentNumber">Nro de documento</label>
              <input type="text" required />
            </div>
          </div>
          <div className={styles.RepairsFormInput}>
            <label htmlFor="documentNumber">Nombre completo</label>
            <input type="text" required />
          </div>
          <div className={styles.RepairsFormInput}>
            <label htmlFor="documentNumber">Apellido completo</label>
            <input type="text" required />
          </div>
        </div>
        <div className={styles.RepairsFormSection}>
          <div className={styles.RepairsFormInput}>
            <label htmlFor="documentNumber">Modelo</label>
            <select required>
              <option></option>
            </select>
          </div>
          <div className={styles.RepairsFormInput}>
            <label htmlFor="documentNumber">Año del producto</label>
            <select required>
              <option></option>
            </select>
          </div>
          <div className={styles.RepairsFormInput}>
            <label htmlFor="documentNumber">Repuesto</label>
            <select required>
              <option></option>
            </select>
          </div>
        </div>
        <div className={styles.RepairsFormCheck}>
          <input type="checkbox" />
          <label>
            Autorizo el tratamiento de mis datos personales para fines de
            prospección, comunicación y promoción de la marca.
          </label>
        </div>
        <div className={styles.RepairsFormButton}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
