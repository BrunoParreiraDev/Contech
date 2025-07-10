import "@/styles/globals.css";
export const metadata = {
  title: "Contech Lab | Tecnologia na Prática",
  description: "Somos uma escola técnica de educação tecnológica feita para colocar a mão na massa de verdade. Aqui, você aprende robótica, eletrônica, programação em Python, montagem e manutenção de computadores, e impressão/modelagem 3D com projetos reais — nada de slides intermináveis ",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
