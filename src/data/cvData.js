export const initialData = {
  personal: {
    firstName: "Linus",
    lastName: "Torvalds",
    email: "torvalds@linux-foundation.org",
    phone: "+1 503 555 0199",
    location: "Portland, Oregon, USA",
    linkedin: "linkedin.com/in/linustorvalds",
    portfolio: "kernel.org",
    summary:
      "Ingeniero de Software reconocido mundialmente por ser el creador y desarrollador principal del kernel de Linux y del sistema de control de versiones Git. Pionero del movimiento Open Source. Actualmente soy coordinador del proyecto Linux Foundation, supervisando el desarrollo del sistema operativo que impulsa desde supercomputadoras hasta teléfonos móviles.",
  },
  education: [
    {
      id: 1,
      school: "Universidad de Helsinki",
      location: "Helsinki, Finlandia",
      degree: "Maestría en Ciencias de la Computación",
      date: "1988 - 1996",
      details: [
        "Tesis: 'Linux: A Portable Operating System'.",
        "Desarrollé el núcleo original de Linux como proyecto estudiantil en 1991.",
        "Experiencia docente como asistente en cursos de ciencias de la computación.",
      ],
    },
  ],
  experience: [
    {
      id: 1,
      company: "The Linux Foundation",
      location: "Portland, OR (Remoto)",
      role: "Coordinador / Director",
      date: "2003 – Presente",
      details: [
        "Autoridad final sobre qué nuevo código se incorpora al kernel estándar de Linux.",
        "Gestión y revisión de contribuciones de una comunidad global de miles de desarrolladores.",
        "Mantenimiento de la estabilidad, rendimiento y evolución de la arquitectura del kernel.",
      ],
    },
    {
      id: 2,
      company: "Proyecto Git",
      location: "Global",
      role: "Creador y Desarrollador",
      date: "Abril 2005 – Junio 2005 (Fase Activa)",
      details: [
        "Diseñé y programé la primera versión de Git en unas pocas semanas por frustración con herramientas existentes.",
        "Creé un sistema distribuido capaz de gestionar el enorme repositorio del kernel de Linux con alta velocidad.",
        "Establecí los fundamentos del control de versiones moderno utilizado hoy por millones.",
      ],
    },
    {
      id: 3,
      company: "Transmeta Corporation",
      location: "Santa Clara, CA",
      role: "Ingeniero de Software Senior",
      date: "1997 – 2003",
      details: [
        "Desarrollo de software de 'code morphing' comercial para microprocesadores de bajo consumo.",
        "Negocié el permiso para continuar trabajando en Linux durante mi empleo.",
      ],
    },
  ],
  skills: {
    languages: "Sueco (Nativo), Finés (Nativo), Inglés (Fluido)",
    technical:
      "C (Experto), Linux Kernel, Git, Assembly, Arquitectura de Sistemas, Microprocesadores",
    interests:
      "Buceo (SCUBA), Lectura, Gadgets tecnológicos, Caminatas en escritorio",
  },
};

export const PAGE_SIZES = {
  A4: {
    name: "A4 (210mm x 297mm)",
    width: "210mm",
    height: "297mm",
    cssSize: "A4",
  },
  Letter: {
    name: 'Carta / Letter (8.5" x 11")',
    width: "215.9mm",
    height: "279.4mm",
    cssSize: "letter",
  },
};
