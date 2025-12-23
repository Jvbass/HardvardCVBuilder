import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Input from "../ui/Input";

export default function PersonalEditor({ data, onChange, isOpen, onToggle }) {
  const getCharCount = (text) => (text ? text.length : 0);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full bg-gray-50 p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-100 transition"
      >
        <span>Información Personal</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="p-4 space-y-3 bg-white">
          <Input
            label="Nombre"
            name="firstName"
            value={data.firstName}
            onChange={onChange}
          />
          <Input
            label="Apellido"
            name="lastName"
            value={data.lastName}
            onChange={onChange}
          />
          <Input
            label="Email"
            name="email"
            value={data.email}
            onChange={onChange}
          />
          <Input
            label="Teléfono"
            name="phone"
            value={data.phone}
            onChange={onChange}
          />
          <Input
            label="Ubicación"
            name="location"
            value={data.location}
            onChange={onChange}
          />
          <Input
            label="LinkedIn (URL o usuario)"
            name="linkedin"
            value={data.linkedin}
            onChange={onChange}
          />
          <Input
            label="Portfolio / Web"
            name="portfolio"
            value={data.portfolio}
            onChange={onChange}
          />

          {/* Summary Textarea */}
          <div className="flex flex-col gap-1 pt-2">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Resumen Profesional
            </label>
            <textarea
              className="border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              name="summary"
              rows={6}
              value={data.summary || ""}
              onChange={onChange}
              placeholder="Escribe un breve resumen de tu perfil profesional..."
            />
            <small
              className={`text-xs text-right ${
                getCharCount(data.summary) > 400
                  ? "text-red-500 font-bold"
                  : "text-gray-400"
              }`}
            >
              {getCharCount(data.summary)} / 400 caracteres recomendado*
            </small>
          </div>
        </div>
      )}
    </div>
  );
}
