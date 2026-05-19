'use client'

import React, { ReactNode } from 'react'

import { useThemePaletteStore } from 'src/hooks/use-theme-palette-store'
import { serifFonts, ThemeSerifFont, useThemeFontStore } from 'src/lib/font'
import { themePalettes } from 'src/lib/palettes'

// Theme Wrapper Component
type ThemeWrapperProps = React.ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode
}

// interface ThemeColorWrapperProps extends React.ComponentProps<"div"> {
//   defaultTheme?: string;
// }

type Style = string

export function ThemeCustomizerWrapper({ children }: ThemeWrapperProps) {
  const { activeSerifFont } = useThemeFontStore()
  const style = ''

  function prefixCssVariableWithStyle(style: Style, variable: string) {
    return `--${variable}`
  }

  function onAddInlineStylesToHtmlElement(vars: Record<string, string>, style: Style, element: HTMLElement) {
    if (typeof document === 'undefined') return

    if (!element) return

    const cssVars = Object.entries(vars)
    // const cssVars = Object.entries(themePalettes["palette-9"]["dark"]);

    if (!cssVars || cssVars.length === 0) return

    cssVars.forEach(([key, value]) => {
      element.style.setProperty(prefixCssVariableWithStyle(style, key), value)
    })
  }

  function onAddInlineFontStylesToHtmlElement(font: ThemeSerifFont, element: HTMLElement) {
    if (typeof document === 'undefined') return

    if (!element) return

    if (!font) return

    const cssVar = serifFonts[font]

    if (!cssVar) return

    element.style.setProperty('--font-serif', cssVar)
    // sans
    if (
      cssVar === 'var(--font-thmanyah)' ||
      cssVar === 'var(--font-thmanyahseriftext)' ||
      cssVar === 'var(--font-thmanyahserifdisplay)'
    ) {
      element.style.setProperty('--font-sans', 'var(--font-thmanyah)')
    } else {
      element.style.setProperty('--font-sans', cssVar)
    }
  }

  const { activePalette, activeRadius } = useThemePaletteStore()

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const htmlElement = document.documentElement

      const existingVariables = Array.from(htmlElement.style).filter((varName) => varName.startsWith(`--`))

      if (existingVariables) {
        // remove existing variables
        existingVariables.forEach((varName) => {
          htmlElement.style.removeProperty(varName)
        })
      }

      if (activePalette) {
        // const themePaletteVars = themePalettes[selectedPalette][theme];
        // incase the theme is "system", we need to check if the html element has the "dark" class
        // if it does, we need to add the dark theme palette vars
        // if it doesn't, we need to add the light theme palette vars

        // if (theme === 'system') {
        //   if (!resolvedTheme) return

        //   onAddInlineStylesToHtmlElement(themePalettes[activePalette]['light'], style, htmlElement)
        // } else {
        onAddInlineStylesToHtmlElement(themePalettes[activePalette], style, htmlElement)
      }

      if (activeSerifFont) {
        onAddInlineFontStylesToHtmlElement(activeSerifFont, htmlElement)
      }

      // add radius
      if (activeRadius) {
        htmlElement.style.setProperty(prefixCssVariableWithStyle(style, 'radius'), activeRadius)
      }
    }
  }, [style, activePalette, activeRadius, activeSerifFont])

  return <>{children}</>
}
