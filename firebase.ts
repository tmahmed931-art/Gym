@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cairo:wght@400;500;600;700;800;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-arabic: "Cairo", sans-serif;
}

@layer base {
  body {
    @apply bg-[#050505] text-white selection:bg-[#ff6b35] selection:text-white;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-white/10 rounded-full hover:bg-[#ff6b35]/50 transition-colors;
  }
}

@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

.font-arabic {
  font-family: var(--font-arabic);
}

