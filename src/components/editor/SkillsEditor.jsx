import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Input from "../ui/Input";

export default function SkillsEditor({ data, onChange, isOpen, onToggle }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-gray-50 p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-100 transition"
      >
        <span>Habilidades e Intereses</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="p-4 space-y-3 bg-white">
          <Input
            label="Idiomas"
            name="languages"
            value={data.languages}
            onChange={onChange}
            placeholder="Ej: Español, Inglés..."
          />
          <Input
            label="Habilidades Técnicas"
            name="technical"
            value={data.technical}
            onChange={onChange}
            placeholder="Ej: Python, Excel, React..."
          />
          <Input
            label="Intereses"
            name="interests"
            value={data.interests}
            onChange={onChange}
            placeholder="Ej: Voluntariado, Tenis..."
          />
        </div>
      )}
    </div>
  );
}
