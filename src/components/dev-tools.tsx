import { ThemePaletteSelect } from 'src/components/theme-palette-select'
import { ThemeFontSelect } from './theme-font-select'

// export const routerObjects: RouteObject[] = [
//   {
//     path: '/',
//     Component: HomePage,
//   },
//   {
//     path: '/v2',
//     Component: V2Page,
//   },
//   {
//     path: '/v3',
//     Component: V3Page,
//   },
//   {
//     path: '/v4',
//     Component: V4Page,
//   },
// ]

export function DevTools() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'V1', link: '/v1' },
    { name: 'V2', link: '/v2' },
    { name: 'V3', link: '/v3' },
    { name: 'V4', link: '/v4' },
    // { name: 'V6', link: '/v6' },
  ]
  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-end gap-2 rounded-xl border border-black bg-background p-2 text-sm">
      <div>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="rounded-md border border-black bg-muted px-2 py-1 text-xs transition hover:bg-foreground"
          >
            {link.name}
          </a>
        ))}
      </div>
      <ThemePaletteSelect />
      <ThemeFontSelect />
      <TailwindIndicator />
    </div>
  )
}

function TailwindIndicator() {
  if (import.meta.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-2 right-2 z-[9999] flex items-end gap-2 rounded-md border bg-accent p-1 text-sm">
      <div className="size-fit rounded-md border p-0.5">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
    </div>
  )
}
