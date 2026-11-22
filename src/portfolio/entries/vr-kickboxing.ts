import type { Entry } from '../types'

export default {
  order: 10,
  slug: 'vr-kickboxing',
  kind: 'study',
  title: 'ML VR kickboxing',
  kicker: 'Research · BCS HCI 2026',
  period: '2024 – 2026',
  summary:
    'A VR sparring partner for kickboxing. A camera reads your moves, a model predicts your next move, and an opponent in VR fights back.',
  intro: [
    'Solo training leaves martial artists without one thing it cannot replace: a responsive sparring partner. Bag work and shadowboxing build closed skills like technique, power and combinations. Sparring builds the open skill of reading an opponent who reads you back.',
    'Drawing on my own experience as a martial artist, I built a proof-of-concept VR sparring system for kickboxing that closes a loop of recognition, prediction and response for a solo practitioner. It started as my MSc dissertation and became a short paper at BCS HCI 2026: "Training Alone, Together: Developing a Virtual Opponent for Home-Based Kickboxing Training".',
    'The work is mine from start to finish: I did the research, built the whole system, ran the evaluation and wrote the paper. Katarzyna Stawarz (Cardiff University), the second author, reviewed it and helped me refine it.',
  ],
  cover: {
    src: '/images/vr-kickboxing/bcs-hci-2026-stage.jpg',
    caption: 'On stage at BCS HCI 2026, giving the one-minute pitch',
    position: '50% 75%',
    portrait: true,
  },
  tags: ['Python', 'TensorFlow', 'Keras', 'MediaPipe', 'Unity', 'C#', 'Meta Quest 2', 'SportsHCI'],
  stats: [
    { value: '87.22%', label: 'Classifier test accuracy across 18 movement classes' },
    { value: '18 → 3', label: 'Techniques trained vs. recognised reliably live' },
    { value: '~400ms', label: 'Response delay, right at the limit for real-time play' },
  ],
  links: [
    { label: 'Download the paper', href: '/papers/training-alone-together-bcs-hci-2026.pdf', download: true },
    { label: 'Poster (PDF)', href: '/papers/training-alone-together-poster.pdf', download: true },
    { label: 'One-minute pitch (PDF)', href: '/papers/training-alone-together-pitch.pdf', download: true },
  ],
  sections: [
    {
      heading: 'The question',
      body: [
        'Can a VR avatar opponent recognise your kickboxing in real time and respond in context, on consumer-grade hardware? I answered it through autobiographical design: building the system and testing it on myself.',
      ],
    },
    {
      heading: 'One continuous loop',
      points: [
        'Webcam → MediaPipe: 33 body landmarks, every frame.',
        'Eight joint angles: elbows, shoulders, hips and knees.',
        'Classifier: names the technique, one of 18.',
        'Predictor: forecasts a reply to your last three moves.',
        'Avatar in Unity: performs the counter.',
        'Meta Quest 2: you react, and are captured again.',
      ],
      tags: ['MediaPipe', 'TensorFlow', 'Unity', 'Meta Quest 2'],
    },
    {
      heading: 'What I found',
      body: [
        'The loop closed, and three things set its ceiling: the classifier saw poses, not movements; the predictor learned from labels the classifier made; and a ~400ms response is right at the limit for real-time play.',
      ],
      points: [
        'Pass: responds to the practitioner.',
        'Pass: responses are valid kickboxing.',
        'Partial: real time, but you can out-pace it.',
        'Falls short: readable. It has no tells.',
      ],
    },
    {
      heading: 'Readable, not unbeatable',
      points: [
        'Calibrate unpredictability. Too predictable and it gets baited; too erratic and there is nothing to learn.',
        'Give it tells. Fighters read a loaded shoulder, a shift of weight. Model the tells, not just the moves.',
      ],
    },
    {
      heading: 'The machine learning',
      kicker: 'From the MSc · 2024',
      body: [
        'I built Keras models in Google Colab on a T4 GPU. I gathered data from myself to create a TensorFlow kickboxing movement classifier, trying LSTM, K-Nearest Neighbours and more. I then classified kickboxing fight videos into sequences of movements in a CSV file, and used that to train a TensorFlow model that predicts a fighter\'s response to a given sequence of three moves.',
      ],
      tags: ['Keras', 'LSTM', 'Pandas', 'OpenCV', 'MediaPipe', 'scikit-learn'],
    },
    {
      heading: 'The VR simulator',
      kicker: 'From the MSc · 2024',
      body: [
        'In Unity I built a VR environment with an AI avatar opponent who fights the user, responding through the ML movement predictions. A camera moves the user\'s body into VR in real time: C# receives positions over UDP from a Python script, mirrors the user and drives the avatar\'s animations.',
      ],
      tags: ['Unity', 'C#', 'UDP', 'Game development'],
    },
  ],
  gallery: {
    title: 'Paper, poster and build',
    images: [
      { src: '/images/vr-kickboxing/poster.jpg', caption: 'The conference poster', contain: true },
      { src: '/images/vr-kickboxing/bcs-hci-2026-poster.jpg', caption: 'With the poster at BCS HCI 2026', position: '50% 35%' },
      { src: '/images/masa-presenting.jpg', caption: 'Presenting the work at MASA', position: '20% 40%' },
      { src: '/images/vr-kickboxing/mediapipe-landmarks.jpg', caption: '33 body landmarks with MediaPipe', contain: true },
      { src: '/images/vr-kickboxing/data-collection-garden.jpg', caption: 'Recording training data in the garden' },
      { src: '/images/vr-kickboxing/colab-lstm-model.jpg', caption: 'The LSTM model in Google Colab' },
      { src: '/images/vr-kickboxing/pose-guard.jpg', caption: 'Live pose capture in Unity: guard' },
      { src: '/images/vr-kickboxing/system-in-action.jpg', caption: 'The system in action' },
    ],
  },
  related: ['cardiff-msc'],
} satisfies Entry
