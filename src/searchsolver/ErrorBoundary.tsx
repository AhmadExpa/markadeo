import { Component, type ErrorInfo, type ReactNode } from 'react';

/* ------------------------------------------------------------------
   ErrorBoundary — catches render-time errors on a route so a single
   failing page shows a recoverable fallback instead of unmounting the
   whole app (which would blank the entire site, killing navigation).
   Reset on navigation is handled by giving it a `key` at the call site.
------------------------------------------------------------------ */
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface the error in the console for debugging in production.
    console.error('[Markadeo] Render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Something went wrong
          </p>
          <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink">
            This page hit a snag.
          </h1>
          <p className="mt-4 max-w-md text-zinc-500">
            Sorry about that — please reload, or head back home. The rest of the
            site is still working.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-ink text-white text-sm font-semibold cursor-pointer hover:bg-ink/90 transition-colors"
            >
              Reload page
            </button>
            <a
              href="/"
              className="px-6 py-3 rounded-full border border-line text-sm font-semibold text-ink cursor-pointer hover:border-brand-gold/60 transition-colors"
            >
              Back to home
            </a>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
