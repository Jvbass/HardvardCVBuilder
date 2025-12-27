import React, { useState } from "react";
import { initialData } from "../data/cvData";
import PersonalEditor from "../components/editor/PersonalEditor";
import EducationEditor from "../components/editor/EducationEditor";
import ExperienceEditor from "../components/editor/ExperienceEditor";
import SkillsEditor from "../components/editor/SkillsEditor";
import PageSettings from "../components/editor/PageSettings";
import CVPreview from "../components/preview/CVPreview";

export default function HarvardCVBuilder() {
  const [data, setData] = useState(initialData);
  const [activeSection, setActiveSection] = useState("personal");
  const [pageSize, setPageSize] = useState("A4");
  const [showDate, setShowDate] = useState(false);

  // Handlers
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value },
    }));
  };

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, skills: { ...prev.skills, [name]: value } }));
  };

  // List Handlers
  const updateListItem = (section, id, field) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const updateListDetail = (section, id, detailIndex, value) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) => {
        if (item.id === id) {
          const newDetails = [...item.details];
          newDetails[detailIndex] = value;
          return { ...item, details: newDetails };
        }
        return item;
      }),
    }));
  };

  const addListDetail = (section, id) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, details: [...item.details, ""] } : item
      ),
    }));
  };

  const removeListDetail = (section, id, detailIndex) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            details: item.details.filter((_, i) => i !== detailIndex),
          };
        }
        return item;
      }),
    }));
  };

  const addItem = (section) => {
    const newItem =
      section === "education"
        ? {
            id: Date.now(),
            school: "",
            location: "",
            degree: "",
            date: "",
            details: [""],
          }
        : {
            id: Date.now(),
            company: "",
            location: "",
            role: "",
            date: "",
            details: [""],
          };

    setData((prev) => ({ ...prev, [section]: [newItem, ...prev[section]] }));
  };

  const removeItem = (section, id) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col md:flex-row">
      {/* ---------------------------------------- SIDEBAR EDITOR (Left) ---------------------------------------- */}
      <div className="w-full md:w-2/5 lg:w-1/3 bg-white border-r border-gray-200 h-screen overflow-y-auto no-print shadow-lg z-10 flex flex-col">
        <div className="p-6 sticky top-0 bg-white z-20 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="bg-red-800 text-white p-1 rounded">H</span> Harvard
            CV Builder
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Edita los campos para actualizar tu CV.
          </p>
        </div>

        <div className="p-6 space-y-6 flex-1">
          {/* Section: Page Settings */}
          <PageSettings
            pageSize={pageSize}
            setPageSize={setPageSize}
            showDate={showDate}
            setShowDate={setShowDate}
          />

          {/* Section: Personal Info */}
          <PersonalEditor
            data={data.personal}
            onChange={handlePersonalChange}
            isOpen={activeSection === "personal"}
            onToggle={() => toggleSection("personal")}
          />

          {/* Section: Experience */}
          <ExperienceEditor
            data={data.experience}
            isOpen={activeSection === "experience"}
            onToggle={() => toggleSection("experience")}
            onUpdateItem={(id, field, value) =>
              updateListItem("experience", id, field, value)
            }
            onRemoveItem={(id) => removeItem("experience", id)}
            onAddItem={() => addItem("experience")}
            onUpdateDetail={(id, idx, value) =>
              updateListDetail("experience", id, idx, value)
            }
            onAddDetail={(id) => addListDetail("experience", id)}
            onRemoveDetail={(id, idx) =>
              removeListDetail("experience", id, idx)
            }
          />

          {/* Section: Education */}
          <EducationEditor
            data={data.education}
            isOpen={activeSection === "education"}
            onToggle={() => toggleSection("education")}
            onUpdateItem={(id, field, value) =>
              updateListItem("education", id, field, value)
            }
            onRemoveItem={(id) => removeItem("education", id)}
            onAddItem={() => addItem("education")}
            onUpdateDetail={(id, idx, value) =>
              updateListDetail("education", id, idx, value)
            }
            onAddDetail={(id) => addListDetail("education", id)}
            onRemoveDetail={(id, idx) => removeListDetail("education", id, idx)}
          />

          {/* Section: Skills */}
          <SkillsEditor
            data={data.skills}
            onChange={handleSkillsChange}
            isOpen={activeSection === "skills"}
            onToggle={() => toggleSection("skills")}
          />
        </div>
        <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400 bg-gray-50">
          Formato actual: {pageSize}
        </div>
      </div>

      {/* ---------------------------------------- PREVIEW CV AREA ---------------------------------------- */}
      <CVPreview
        data={data}
        pageSize={pageSize}
        onPrint={handlePrint}
        showDate={showDate}
      />
    </div>
  );
}
