import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        klever: {
          dark: '#111111',
          darker: '#0a0a0a',
          purple: '#AA33B5',
          'purple-light': '#C14EC9',
          cyan: '#33D7FF',
          blue: '#2563EB',
          card: '#1F1F1F',
          border: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace']
      }
    }
  },
  shortcuts: {
    'klever-gradient': 'bg-gradient-to-br from-klever-purple to-klever-blue',
    'klever-gradient-text': 'bg-gradient-to-br from-klever-purple to-klever-blue bg-clip-text text-transparent',
    'klever-card': 'bg-klever-card border border-klever-border rounded-xl p-6 shadow-2xl',
    'klever-glow': 'shadow-[0_0_20px_rgba(170,51,181,0.3)]'
  },
  rules: [
    // Custom gradient backgrounds
    ['bg-klever-gradient', {
      'background': 'linear-gradient(135deg, #AA33B5 0%, #2563EB 100%)'
    }],
    ['bg-klever-gradient-subtle', {
      'background': 'linear-gradient(135deg, rgba(170, 51, 181, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)'
    }],
    // Text gradients
    ['text-klever-gradient', {
      'background': 'linear-gradient(135deg, #AA33B5 0%, #2563EB 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'background-clip': 'text'
    }]
  ]
})