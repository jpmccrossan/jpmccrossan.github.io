import type { Entry } from '../types'

export default {
  order: 40,
  slug: 'pdf-to-audiobook',
  kind: 'personal',
  theme: 'ai',
  title: 'PDF to Audiobook',
  kicker: 'Side project · Local AI',
  period: '2026',
  summary:
    'Turns any PDF into an MP3 audiobook entirely on your own machine, with the Kokoro text-to-speech model: offline, with no API keys or accounts.',
  intro: [
    'Turn any PDF into an MP3 audiobook, entirely on your own machine, using the Kokoro text-to-speech model. It runs offline and needs no API keys or accounts.',
    'It comes as a desktop app and a command-line tool, with eight built-in UK and US voices and adjustable speed. It uses your GPU automatically: NVIDIA (CUDA), Apple Silicon (MPS), or falls back to the CPU.',
  ],
  cover: {
    src: '/images/pdf-to-audiobook/02-pdf-chosen.jpg',
    caption: 'The desktop app, running on an RTX 3090',
    position: '50% 0%',
    portrait: true,
    ratio: '480 / 450',
  },
  tags: ['Python', 'Kokoro TTS', 'PyTorch', 'CUDA', 'Tkinter', 'pdfplumber'],
  stats: [
    { value: '8', label: 'Built-in UK and US voices' },
    { value: '0', label: 'API keys, accounts or cloud calls' },
    { value: '3', label: 'Back ends: CUDA, Apple MPS or CPU' },
  ],
  links: [{ label: 'Code on GitHub', href: 'https://github.com/jpmccrossan/pdf-to-audiobook' }],
  sections: [
    {
      heading: 'How it works',
      points: [
        'Extract: pdfplumber turns the PDF into clean text.',
        'Synthesise: Kokoro reads it aloud, one sentence-sized segment at a time, with the model loaded once per language.',
        'Save: the audio is written as an MP3 next to the PDF.',
      ],
      tags: ['pdfplumber', 'Kokoro', 'soundfile'],
    },
    {
      heading: 'Desktop app and command line',
      body: [
        'One conversion pipeline is shared by a Tkinter desktop app and a command-line interface. The app shows which device it is using, in green on a GPU and red on the CPU, and runs conversions on a worker thread so the window stays responsive.',
      ],
      tags: ['Tkinter', 'CLI'],
    },
    {
      heading: 'One command to start',
      body: [
        'Quick-start scripts for Linux, macOS and Windows create a virtual environment, install everything and launch the app. On Windows the script detects an NVIDIA GPU and installs the CUDA build of PyTorch automatically.',
      ],
    },
  ],
  gallery: {
    title: 'The desktop app',
    images: [
      { src: '/images/pdf-to-audiobook/01-ready.jpg', caption: 'Ready, on the GPU', contain: true },
      { src: '/images/pdf-to-audiobook/02-pdf-chosen.jpg', caption: 'A PDF chosen, with a voice and speed set', contain: true },
    ],
  },
} satisfies Entry
