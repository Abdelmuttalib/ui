'use client'

import { Undo2 } from 'lucide-react'

import { Button } from 'src/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import { useThemePaletteStore } from 'src/hooks/use-theme-palette-store'
import { cn } from 'src/lib/utils'
import {
  mainPaletteColorsKeys,
  ThemePaletteName,
  themePalettesListEntries,
  ThemePaletteVariableKey,
} from 'src/lib/palettes'

export function ThemePaletteSelect() {
  const resolvedTheme = 'light'

  const { activePalette, setActivePalette } = useThemePaletteStore()

  return (
    <div className="w-full">
      <Select value={activePalette} onValueChange={setActivePalette}>
        <SelectTrigger className="flex gap-2 border border-black/60 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground  hover:text-primary">
          <SelectValue placeholder={'Select Palette'} />
        </SelectTrigger>
        <SelectContent className="w-full">
          {themePalettesListEntries.map(([paletteName, palette], index) => {
            return (
              <SelectItem
                key={`theme-palette-${paletteName}`}
                className={cn('flex items-center gap-2 rounded-sm lg:flex-row')}
                value={paletteName as ThemePaletteName}
              >
                {' '}
                {paletteName}
                <div className="border-foreground/15 inline-flex rounded-sm border">
                  {mainPaletteColorsKeys.map((color, index) => (
                    <div
                      key={`theme-palette-${paletteName}-${color}-${index}`}
                      className={cn('h-5 w-5', {
                        'rounded-l-sm': index === 0,
                        'rounded-r-sm': index === mainPaletteColorsKeys.length - 1,
                      })}
                      style={{
                        backgroundColor: `oklch(${palette[color as ThemePaletteVariableKey]})`,
                      }}
                      title={`${color}`}
                    ></div>
                  ))}
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export function ThemePaletteReset() {
  const { activePalette, onResetPalette } = useThemePaletteStore()

  return (
    <Button
      onClick={onResetPalette}
      size={'icon-sm'}
      variant={'secondary'}
      disabled={activePalette === ''}
      aria-label="Reset Palette"
      title="Reset Palette"
    >
      <Undo2 className="h-4 w-4" />
      <span className="sr-only">Reset Palette</span>
    </Button>
  )
}
