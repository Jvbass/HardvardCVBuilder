import React from "react";
import { Settings, Calendar } from "lucide-react";
import { PAGE_SIZES } from "../../data/cvData";

export default function PageSettings({
  pageSize,
  setPageSize,
  showDate,
  setShowDate,
}) {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
        <Settings size={16} /> Configuración de Página
      </h3>
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="pageSize"
            checked={pageSize === "A4"}
            onChange={() => setPageSize("A4")}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">A4</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="pageSize"
            checked={pageSize === "Letter"}
            onChange={() => setPageSize("Letter")}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Carta (Letter)</span>
        </label>
      </div>
      <p className="text-xs text-blue-600 mt-2">
        Actualmente viendo en formato:{" "}
        <strong>{PAGE_SIZES[pageSize].name}</strong>
      </p>
      <div className="border-t border-blue-200 pt-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showDate}
            onChange={() => setShowDate(!showDate)}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700 flex items-center gap-1">
            <Calendar size={14} /> Mostrar fecha de edición
          </span>
        </label>
      </div>
    </div>
  );
}
