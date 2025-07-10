import styles from "@/styles/style";
import Button from "./Button";

const CTA: React.FC = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Experimente nossos cursos práticos agora!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Tudo o que você precisa para dominar eletrônica, automação e impulsionar
        sua carreira.
      </p>
    </div>
    <div
      className={`flex flex-col items-start sm:ml-10 ml-0 sm:mt-0 mt-10 gap-4`}
    >
      <Button text="Marcar aula experimental presencial" />
      <Button text="Marcar aula experimental online" />
      <Button text="Plataforma de cursos online" />
    </div>
  </section>
);

export default CTA;
