<template>
  <div />
</template>

<style>
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Klever Color Variables */
:root {
  --klever-dark: #111111;
  --klever-darker: #0a0a0a;
  --klever-purple: #AA33B5;
  --klever-purple-light: #C14EC9;
  --klever-cyan: #33D7FF;
  --klever-blue: #2563EB;
  --klever-gradient: linear-gradient(135deg, #AA33B5 0%, #2563EB 100%);
  --klever-gradient-subtle: linear-gradient(135deg, rgba(170, 51, 181, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
  
  --klever-text-primary: #FFFFFF;
  --klever-text-secondary: #A1A1AA;
  --klever-text-accent: #AA33B5;
  
  --klever-bg-primary: #111111;
  --klever-bg-secondary: #1A1A1A;
  --klever-bg-card: #1F1F1F;
  
  --klever-border: #333333;
  --klever-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  --klever-glow: 0 0 20px rgba(170, 51, 181, 0.3);
}

/* Global Dark Theme Override */
html.dark {
  background: var(--klever-bg-primary) !important;
  color: var(--klever-text-primary) !important;
}

/* Slidev Layout Overrides */
.slidev-layout {
  background: var(--klever-bg-primary) !important;
  color: var(--klever-text-primary) !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
  line-height: 1.6;
}

/* Typography Overrides */
.slidev-layout h1 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  background: var(--klever-gradient) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  margin-bottom: 1.5rem !important;
}

.slidev-layout h2 {
  font-size: 2.25rem !important;
  font-weight: 700 !important;
  color: var(--klever-text-primary) !important;
  margin-bottom: 1rem !important;
}

.slidev-layout h3 {
  font-size: 1.75rem !important;
  font-weight: 600 !important;
  color: var(--klever-purple-light) !important;
  margin-bottom: 0.75rem !important;
}

/* Card Backgrounds */
.bg-blue-50, .bg-green-50, .bg-purple-50, .bg-orange-50, .bg-yellow-50, .bg-gray-50 {
  background: var(--klever-bg-card) !important;
  border: 1px solid var(--klever-border) !important;
  border-radius: 0.75rem !important;
  position: relative;
  overflow: hidden;
}

.bg-blue-50::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--klever-blue);
}

.bg-green-50::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #10B981;
}

.bg-purple-50::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--klever-purple);
}

.bg-orange-50::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #F59E0B;
}

.bg-yellow-50::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #EAB308;
}

.bg-gray-50::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--klever-border);
}

/* Text Color Overrides */
.text-blue-600, .text-blue-800 {
  color: var(--klever-blue) !important;
}

.text-green-600, .text-green-800 {
  color: #10B981 !important;
}

.text-purple-600, .text-purple-800 {
  color: var(--klever-purple) !important;
}

.text-orange-600, .text-orange-800 {
  color: #F59E0B !important;
}

.text-yellow-600, .text-yellow-800 {
  color: #EAB308 !important;
}

.text-red-600 {
  color: #EF4444 !important;
}

.text-gray-600 {
  color: var(--klever-text-secondary) !important;
}

.text-gray-500 {
  color: #6B7280 !important;
}

/* Custom Utility Classes */
.klever-gradient-text {
  background: var(--klever-gradient) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-weight: 700 !important;
}

.klever-card {
  background: var(--klever-bg-card) !important;
  border: 1px solid var(--klever-border) !important;
  border-radius: 0.75rem !important;
  padding: 1.5rem !important;
  box-shadow: var(--klever-shadow) !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

.klever-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--klever-gradient);
}

.klever-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--klever-glow) !important;
}

/* Layout Specific Styles */
.slidev-layout.center {
  background: radial-gradient(ellipse at center, rgba(170, 51, 181, 0.1) 0%, var(--klever-bg-primary) 70%) !important;
}

.slidev-layout.cover {
  background: var(--klever-gradient) !important;
  color: var(--klever-text-primary) !important;
}

.slidev-layout.section {
  background: var(--klever-gradient-subtle) !important;
  border-left: 4px solid var(--klever-purple) !important;
  padding-left: 2rem !important;
}

/* Navigation Styles */
.slidev-nav {
  background: rgba(17, 17, 17, 0.9) !important;
  backdrop-filter: blur(10px) !important;
  border-top: 1px solid var(--klever-border) !important;
}

/* Progress Bar */
.slidev-progress {
  background: var(--klever-gradient) !important;
  height: 3px !important;
}

/* Code Blocks */
pre {
  background: var(--klever-bg-card) !important;
  border: 1px solid var(--klever-border) !important;
  border-radius: 0.75rem !important;
  box-shadow: var(--klever-shadow) !important;
}

code {
  background: var(--klever-bg-card) !important;
  color: var(--klever-cyan) !important;
  border: 1px solid var(--klever-border) !important;
}
</style>