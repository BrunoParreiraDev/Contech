// components/CTA.tsx
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
    <div className="flex flex-col items-start sm:ml-10 ml-0 sm:mt-0 mt-10 gap-4">
      <Button
        text="Marcar aula experimental presencial"
        href="https://wa.me/5575981143332?text=Olá!%20Gostaria%20de%20marcar%20uma%20aula%20presencial!"
      />
      <Button
        text="Marcar aula experimental online"
        href="https://www.instagram.com/contech.lab"
      />
      <Button
        text="Plataforma de cursos online"
        href="https://www.instagram.com/contech.lab"
      />
    </div>
  </section>
);

export default CTA;
