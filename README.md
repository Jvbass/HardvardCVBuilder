
# Harvard CV Builder 

![SS Hardvard CV Builder](https://simp6.selti-delivery.ru/images3/Captura-de-pantalla-2025-12-23-20321914299f19ab05fd42.png)

Una aplicación web interactiva construida con **React** y **Tailwind CSS** que permite a los usuarios crear, editar y exportar su currículum vitae siguiendo el prestigioso estándar de formato de la Universidad de Harvard.

La herramienta ofrece una experiencia "WYSIWYG" (What You See Is What You Get), donde los usuarios pueden llenar sus datos en un formulario lateral y ver los cambios reflejados en tiempo real sobre el documento final.

##  Características Principales

-   **Edición en Tiempo Real:** Los cambios en el formulario se reflejan instantáneamente en la vista previa del documento.
    
-   **Formato Harvard Estándar:** Diseño limpio, minimalista y profesional con tipografía _Times New Roman_, optimizado para pasar sistemas ATS (Applicant Tracking Systems).
    
-   **Gestión Dinámica de Secciones:**
    
    -   Información Personal con foto (opcional en código) y resumen profesional.
        
    -   Experiencia Laboral y Educación ilimitadas.
        
    -   Habilidades e Intereses.
        
    -   Contador de caracteres para el resumen profesional.
        
-   **Configuración de Página:** Soporte seleccionable para formatos **A4** y **Carta (Letter)**, ajustando las dimensiones de la vista previa automáticamente.
    
-   **Exportación a PDF:** Utiliza la capacidad nativa de impresión del navegador para generar PDFs vectoriales de alta calidad, con texto seleccionable y sin marcas de agua de la interfaz.
    
-   **Interfaz Limpia:** Panel de edición colapsable por secciones para mejorar la usabilidad.
    

## Tecnologías Utilizadas

-   [**React**](https://reactjs.org/ "null")**:** Librería principal para la construcción de la interfaz.
    
-   [**Tailwind CSS**](https://tailwindcss.com/ "null")**:** Framework de utilidades para el estilizado rápido y responsivo.
    
-   [**Lucide React**](https://lucide.dev/ "null")**:** Colección de iconos ligeros y consistentes.
    
-   **CSS Print Media Queries:** Para asegurar que el documento se imprima perfectamente ocultando la interfaz de edición.
    

## Próximas Mejoras (Roadmap)

Estamos trabajando activamente para mejorar la aplicación. Las siguientes funcionalidades están planeadas para futuras versiones:

-   [x] **Opcion hoja A4 y Letter** : Como usuario quiero poder cambiar el tamaño de la pagina de impresión a los dos tamaños más comunes (A4 y Letter).
-   [ ] **Modo Oscuro (Dark Mode):** Como usuario quiero poder cambiar el tema de colores de la aplicación para sentirme más cómodo en el uso.
    
-   [ ] **Soporte Multi-idioma (i18n):**
    
    -   [ ] Inglés 🇺🇸
        
    -   [ ] Portugués 🇧🇷
        
    -   [ ] Italiano 🇮🇹
        
    -   [ ] Francés 🇫🇷
        
-   [ ] **Persistencia de Datos:** Como usuario quiero guardar el progreso en `localStorage` o base de datos para no perder información al recargar.
    
-   [ ] **Drag & Drop:** Como usuario quiero poder reordenar las experiencias laborales y educación a gusto.
    

## Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    
    ```
    git clone git@github.com:Jvbass/HardvardCVBuilder.git
    cd hardvardcvbuilder
    
    ```
    
2.  **Instalar dependencias:**
    
    ```
    pnpm install
    # o
    yarn install
    
    ```
    
3.  **Iniciar el servidor de desarrollo:**
    
    ```
    pnpm run dev
    # o
    yarn dev
    
    ```
4.  Abre tu navegador en `http://localhost:5173` (o el puerto que indique tu terminal).


       

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo para tus necesidades.

Hecho con ❤️ para ayudar a profesionales a destacar.
