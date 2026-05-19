export type ThemeSerifFont =
  // | 'roboto-serif'
  // | 'eb-garamond'
  // | 'cormorant'
  // | 'playfair'
  // | 'manrope'
  // | 'inter'
  'noto' | 'ibmplexsans' | 'almarai' | 'thmanyah' | 'thmanyahseriftext' | 'thmanyahserifdisplay'

export const serifFonts: Record<ThemeSerifFont, string> = {
  // 'roboto-serif': 'var(--font-robotoserif)',
  // 'eb-garamond': 'var(--font-eb)',
  // cormorant: 'var(--font-corm)',
  // playfair: 'var(--font-playfair)',
  // manrope: 'var(--font-manrope)',
  // inter: 'var(--font-inter)',
  noto: 'var(--font-notonaskh)',
  ibmplexsans: 'var(--font-ibmplexsans)',
  almarai: 'var(--font-almarai)',
  thmanyah: 'var(--font-thmanyah)',
  thmanyahseriftext: 'var(--font-thmanyahseriftext)',
  thmanyahserifdisplay: 'var(--font-thmanyahserifdisplay)',
} as const

export const serifFontsLabel: Record<ThemeSerifFont, string> = {
  // 'roboto-serif': 'Roboto Serif',
  // 'eb-garamond': 'EB Garamond',
  // cormorant: 'Cormorant',
  // playfair: 'Playfair',
  // manrope: 'Manrope',
  // inter: 'Inter',
  noto: 'نسخ عربي',
  ibmplexsans: 'بلكس عربي',
  almarai: 'المراعي',
  thmanyah: 'ثمانية',
  thmanyahseriftext: 'ثمانية النص',
  thmanyahserifdisplay: 'ثمانية العرض',
}

export type ThemefontName = ThemeSerifFont

export const DEFAULT_SERIF_FONT = 'ibmplexsans'

import { create } from 'zustand'

type ThemeFontState = {
  activeSerifFont: ThemeSerifFont
  setActiveSerifFont: (value: ThemeSerifFont) => void
  onResetSerifFont: () => void
}

export const useThemeFontStore = create<ThemeFontState>((set) => ({
  activeSerifFont: DEFAULT_SERIF_FONT,

  setActiveSerifFont: (value) =>
    set({
      activeSerifFont: value,
    }),

  onResetSerifFont: () => set({ activeSerifFont: DEFAULT_SERIF_FONT }),
}))

export const themeFontListEntries = Object.entries(serifFonts) as [ThemeSerifFont, string][]
