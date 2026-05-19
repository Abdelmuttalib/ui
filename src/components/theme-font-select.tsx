'use client'

import { Undo2 } from 'lucide-react'

import { Button } from 'src/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import { cn } from 'src/lib/utils'
import {
  DEFAULT_SERIF_FONT,
  serifFontsLabel,
  themeFontListEntries,
  ThemefontName,
  useThemeFontStore,
} from 'src/lib/font'

export function ThemeFontSelect() {
  const { activeSerifFont, setActiveSerifFont } = useThemeFontStore()

  return (
    <div className="w-full">
      <Select value={activeSerifFont} onValueChange={setActiveSerifFont}>
        <SelectTrigger className="flex w-full gap-2 border border-black/60 px-4 py-2 text-sm font-medium capitalize text-foreground  hover:text-primary">
          <SelectValue placeholder={'Select Font'} />
        </SelectTrigger>
        <SelectContent className="w-full">
          {themeFontListEntries.map(([fontName, font], index) => {
            const fontDisplay = fontName.replace('-', ' ')
            const fontDisplayLabel = serifFontsLabel[fontName]
            return (
              <SelectItem
                key={`theme-font-${fontName}`}
                className={cn('flex rounded-sm capitalize lg:flex-row')}
                value={fontName as ThemefontName}
                style={{
                  fontFamily: font,
                }}
                title={`${fontName}`}
              >
                {' '}
                {fontDisplayLabel}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export function ThemeFontReset() {
  const { activeSerifFont, onResetSerifFont } = useThemeFontStore()

  return (
    <Button
      onClick={onResetSerifFont}
      size={'icon-sm'}
      variant={'secondary'}
      disabled={activeSerifFont === DEFAULT_SERIF_FONT}
      aria-label="Reset Font"
      title="Reset Font"
    >
      <Undo2 className="h-4 w-4" />
      <span className="sr-only">Reset Font</span>
    </Button>
  )
}
