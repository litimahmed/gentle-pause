/**
 * Mobile Detection Hook
 * 
 * Custom React hook that detects whether the current viewport is mobile-sized.
 * Uses the matchMedia API to track viewport width changes in real-time.
 * 
 * Breakpoint:
 * - Mobile: < 768px (below MOBILE_BREAKPOINT)
 * - Desktop: >= 768px
 * 
 * Features:
 * - Reactive to viewport size changes
 * - Uses native matchMedia API for performance
 * - Cleans up event listeners on unmount
 * - Initial state set on mount
 * 
 * Usage:
 * ```tsx
 * const isMobile = useIsMobile();
 * return (
 *   <div>
 *     {isMobile ? <MobileNav /> : <DesktopNav />}
 *   </div>
 * );
 * ```
 * 
 * @module use-mobile
 */

import * as React from "react"

/** Mobile breakpoint in pixels - screens below this are considered mobile */
const MOBILE_BREAKPOINT = 768

/**
 * useIsMobile Hook
 * 
 * Detects if the current viewport is mobile-sized and updates on resize.
 * 
 * @returns Boolean indicating if viewport is mobile-sized (< 768px)
 * 
 * @example
 * const isMobile = useIsMobile();
 * if (isMobile) {
 *   // Render mobile layout
 * }
 */
export function useIsMobile() {
  // State to track mobile status, starts as undefined until first check
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create media query matcher for mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    /**
     * Handler for media query changes
     * Updates mobile state when viewport size crosses the breakpoint
     */
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Listen for viewport size changes
    mql.addEventListener("change", onChange)
    
    // Set initial state based on current window size
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup: Remove event listener on unmount
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Convert undefined to false for consistent boolean return
  return !!isMobile
}
