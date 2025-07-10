import { feedback } from "@/constants";
import styles from "@/styles/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials: React.FC = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* Fundo azul degradê */}
    <div className="absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient" />

    {/* Título e descrição */}
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 relative z-10">
      <h1 className={styles.heading2}>
        O que nossos <br className="sm:block hidden" /> alunos dizem sobre nós
      </h1>
      <p className={`${styles.paragraph} max-w-md mt-4 md:mt-0 text-left`}>
        Transformamos vidas com cursos práticos que preparam para o mercado de
        trabalho real.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full relative z-10">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
