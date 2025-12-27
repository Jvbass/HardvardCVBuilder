import React from "react";
import { Download } from "lucide-react";
import { PAGE_SIZES } from "../../data/cvData";
import CVSection from "../cv/CVSection";

export default function CVPreview({ data, pageSize, onPrint, showDate }) {
  const getFormattedDate = () => {
    const date = new Date();
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className="flex-1 p-8 overflow-y-auto flex flex-col items-center relative">
      {/* --- ESTILOS DE IMPRESIÓN --- */}
      <style>{`
        @media print {
          @page { margin: 0; size: ${PAGE_SIZES[pageSize].cssSize}; }
          body { -webkit-print-color-adjust: exact; background-color: white; }
          .no-print { display: none !important; }
          .print-area { 
            display: block !important; 
            width: 100%; 
            margin: 0; 
            padding: 10mm 15mm; /* Márgenes Harvard estándar */
            box-shadow: none;
            overflow: visible;
            height: auto;
            min-height: 100vh;
          }
          /* Forzar fuente serif para impresión exacta */
          .harvard-font { font-family: "Times New Roman", Times, serif; }
        }
      `}</style>
      {/* Toolbar */}
      <div className="fixed bottom-6 right-8 z-30 no-print">
        <button
          onClick={onPrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 transition transform hover:scale-105"
        >
          <Download size={20} /> Descargar PDF
        </button>
      </div>

      {/* The CV Document - Harvard Format */}
      <div
        id="cv-document"
        className="print-area bg-white shadow-2xl mx-auto harvard-font text-black transition-all duration-300 ease-in-out"
        style={{
          width: PAGE_SIZES[pageSize].width,
          minHeight: PAGE_SIZES[pageSize].height,
          padding: "12mm 15mm",
          fontSize: "11pt",
          lineHeight: "1.3",
        }}
      >
        {showDate && (
          <div className="absolute top-6 right-8 text-[9pt] italic text-gray-500">
            Última versión - {getFormattedDate()}
          </div>
        )}
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl font-serif font-bold tracking-wide uppercase mb-2">
            {data.personal.firstName} {data.personal.lastName}
          </h1>
          <div className="text-[10pt] flex flex-wrap justify-center gap-x-4 text-gray-900">
            {data.personal.location && <span>{data.personal.location}</span>}
            {data.personal.phone && (
              <span className="flex items-center gap-1">
                • {data.personal.phone}
              </span>
            )}
            {data.personal.email && (
              <span className="flex items-center gap-1">
                • {data.personal.email}
              </span>
            )}
            {data.personal.linkedin && (
              <span className="flex items-center gap-1">
                • {data.personal.linkedin}
              </span>
            )}
            {data.personal.portfolio && (
              <span className="flex items-center gap-1">
                • {data.personal.portfolio}
              </span>
            )}
          </div>
        </header>

        {/* Professional Summary */}
        {data.personal.summary && (
          <div className="mb-6 space-y-0.5 text-[11pt] text-start leading-relaxed italic">
            {data.personal.summary}
          </div>
        )}

        {/* Experience Section */}
        <CVSection title="Experiencia Laboral">
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-[11pt]">{exp.company}</span>
                <span className="text-[11pt]">{exp.location}</span>
              </div>
              <div className="flex justify-between items-baseline italic mb-1">
                <span className="text-[11pt]">{exp.role}</span>
                <span className="text-[11pt]">{exp.date}</span>
              </div>
              <ul className="list-disc ml-5 space-y-0.5 text-[10.5pt]">
                {exp.details.map(
                  (detail, idx) =>
                    detail && (
                      <li key={idx} className="pl-1 text-start">
                        {detail}
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </CVSection>

        {/* Education Section */}
        <CVSection title="Educación">
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-[11pt]">{edu.school}</span>
                <span className="text-[11pt]">{edu.location}</span>
              </div>
              <div className="flex justify-between items-baseline italic mb-1">
                <span className="text-[11pt]">{edu.degree}</span>
                <span className="text-[11pt]">{edu.date}</span>
              </div>
              <ul className="list-disc ml-5 space-y-0.5 text-[10.5pt]">
                {edu.details.map(
                  (detail, idx) =>
                    detail && (
                      <li key={idx} className="pl-1 text-start">
                        {detail}
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </CVSection>

        {/* Skills Section */}
        <CVSection title="Habilidades e Intereses">
          <div className="text-[10.5pt] space-y-1 text-start">
            {data.skills.languages && (
              <div className="flex">
                <span className="font-bold w-32 shrink-0">Idiomas:</span>
                <span>{data.skills.languages}</span>
              </div>
            )}
            {data.skills.technical && (
              <div className="flex">
                <span className="font-bold w-32 shrink-0">Tecnologías:</span>
                <span>{data.skills.technical}</span>
              </div>
            )}
            {data.skills.interests && (
              <div className="flex">
                <span className="font-bold w-32 shrink-0">Intereses:</span>
                <span>{data.skills.interests}</span>
              </div>
            )}
          </div>
        </CVSection>
      </div>
    </div>
  );
}
