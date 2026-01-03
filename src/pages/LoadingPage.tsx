/**
 * @fileoverview Loading page with animated hamster wheel
 * Shown while the application is loading
 * @module pages/LoadingPage
 */

// Styles imported via src/styles/index.ts

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#0f0a1f] via-[#1a1035] to-[#0d1117]">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel" />
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear" />
              <div className="hamster__eye" />
              <div className="hamster__nose" />
            </div>
            <div className="hamster__limb hamster__limb--fr" />
            <div className="hamster__limb hamster__limb--fl" />
            <div className="hamster__limb hamster__limb--br" />
            <div className="hamster__limb hamster__limb--bl" />
            <div className="hamster__tail" />
          </div>
        </div>
        <div className="spoke" />
      </div>
      <p className="mt-8 text-xl font-medium text-zinc-400 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
