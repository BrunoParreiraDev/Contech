import styles from "@/styles/style";
import { logo } from "@/public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";

const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      {/* Logo e descrição */}
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="Contech Logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Educação tecnológica prática para transformar seu futuro profissional.
        </p>
      </div>

      {/* Links do footer */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map(({ id, title, links }) => (
          <div key={id} className="flex flex-col ss:my-0 my-4 max-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {title}
            </h4>
            <ul className="list-none mt-4">
              {links.map((link, i) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    i !== links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Rodapé inferior */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        © 2025 Contech. Todos os direitos reservados.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map(({ id, icon, link }, index) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
          >
            <Image
              src={icon}
              alt={id}
              className="w-[21px] h-[21px] object-contain cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
