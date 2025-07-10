import { modalities } from "@constants";
import React from "react";

const Modalities = () => {
  return (
    <>
      {modalities.map(({ id, title, description, actionText, link }) => (
        <div key={id} className="p-6 bg-gray-900 rounded-xl mb-4">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-dimWhite mb-4">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-secondary py-2 px-4 rounded font-semibold"
          >
            {actionText}
          </a>
        </div>
      ))}
    </>
  );
};

export default Modalities;
