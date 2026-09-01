import { COMMUNITY_STATUS, EVENTS, PROJECTS } from '@/lib/content';

export default function Statusbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 h-8 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-4 lg:px-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground">
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            SYS://GEX_CLUB — ONLINE
          </span>
          <span className="hidden sm:inline">[ {COMMUNITY_STATUS.members.toUpperCase()} ]</span>
          <span className="hidden md:inline">[ PROYECTOS: {PROJECTS.length} ]</span>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <span>HACKATHON_ACTIVO: {EVENTS.length}</span>
          <span className="text-primary">v2.6.0</span>
        </div>
      </div>
    </div>
  );
}
