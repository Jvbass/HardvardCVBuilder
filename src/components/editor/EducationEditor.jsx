import React from "react";
import { ChevronDown, ChevronUp, Trash2, Plus } from "lucide-react";
import Input from "../ui/Input";

export default function EducationEditor({
  data,
  isOpen,
  onToggle,
  onUpdateItem,
  onRemoveItem,
  onAddItem,
  onUpdateDetail,
  onAddDetail,
  onRemoveDetail,
}) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-gray-50 p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-100 transition"
      >
        <span>Educación</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white space-y-6">
          <button
            onClick={onAddItem}
            className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-500 rounded hover:bg-gray-50 flex justify-center items-center gap-2"
          >
            <Plus size={16} /> Agregar Educación
          </button>
          {data.map((edu, idx) => (
            <div
              key={edu.id}
              className="relative p-4 border rounded-md border-gray-200 hover:border-blue-300 transition"
            >
              <button
                onClick={() => onRemoveItem(edu.id)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
              <h4 className="font-bold text-gray-400 text-xs mb-2 uppercase">
                Entrada {idx + 1}
              </h4>
              <div className="space-y-3">
                <Input
                  label="Institución"
                  value={edu.school}
                  onChange={(e) =>
                    onUpdateItem(edu.id, "school", e.target.value)
                  }
                />
                <Input
                  label="Ubicación"
                  value={edu.location}
                  onChange={(e) =>
                    onUpdateItem(edu.id, "location", e.target.value)
                  }
                />
                <Input
                  label="Título / Grado"
                  value={edu.degree}
                  onChange={(e) =>
                    onUpdateItem(edu.id, "degree", e.target.value)
                  }
                />
                <Input
                  label="Fecha (Mes Año)"
                  value={edu.date}
                  onChange={(e) => onUpdateItem(edu.id, "date", e.target.value)}
                />

                <div className="mt-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Detalles (Logros / Tesis)
                  </label>
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex gap-2 mb-2">
                      <textarea
                        rows={2}
                        className="w-full p-2 border rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                        value={detail}
                        onChange={(e) =>
                          onUpdateDetail(edu.id, dIdx, e.target.value)
                        }
                      />
                      <button
                        onClick={() => onRemoveDetail(edu.id, dIdx)}
                        className="text-gray-400 hover:text-red-500 self-center"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => onAddDetail(edu.id)}
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <Plus size={12} /> Agregar detalle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
