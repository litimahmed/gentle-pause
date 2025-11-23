/**
 * Toast Notification Hook
 * 
 * Custom React hook and utility for displaying toast notifications.
 * Implements a global toast system with action support and automatic dismissal.
 * 
 * Features:
 * - Global toast state management
 * - Automatic toast dismissal with configurable delay
 * - Single toast limit (shows only most recent)
 * - Action buttons support
 * - Programmatic toast control (show, update, dismiss)
 * 
 * Toast Types:
 * - Default: Standard notification
 * - Success: Positive feedback (via sonner)
 * - Error: Error messages (via sonner)
 * - Warning: Warning messages (via sonner)
 * 
 * Usage:
 * ```tsx
 * const { toast } = useToast();
 * 
 * // Show a simple toast
 * toast({ title: "Success!", description: "Operation completed" });
 * 
 * // Show with action button
 * toast({
 *   title: "Undo available",
 *   action: <Button onClick={handleUndo}>Undo</Button>
 * });
 * ```
 * 
 * @module use-toast
 */

import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

/** Maximum number of toasts to show simultaneously */
const TOAST_LIMIT = 1

/** Delay before automatically removing dismissed toasts (in milliseconds) */
const TOAST_REMOVE_DELAY = 1000000

/**
 * Toast data structure
 * Extends ToastProps with additional metadata
 */
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

/**
 * Action types for toast state management
 */
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

/** Toast ID counter for generating unique IDs */
let count = 0

/**
 * Generate unique toast ID
 * Increments counter and wraps around at max safe integer
 * 
 * @returns Unique string ID for toast
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

/**
 * Toast Action Union Type
 * Defines all possible actions for toast state management
 */
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

/**
 * Toast State Interface
 * Manages the list of active toasts
 */
interface State {
  toasts: ToasterToast[]
}

/** Map of toast IDs to their removal timeout handlers */
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

/**
 * Add Toast to Removal Queue
 * 
 * Schedules a toast for removal after TOAST_REMOVE_DELAY.
 * Prevents duplicate timeouts for the same toast.
 * 
 * @param toastId - ID of toast to remove
 */
const addToRemoveQueue = (toastId: string) => {
  // Don't add if already queued
  if (toastTimeouts.has(toastId)) {
    return
  }

  // Schedule removal
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

/**
 * Toast State Reducer
 * 
 * Manages toast state transitions based on dispatched actions.
 * 
 * @param state - Current toast state
 * @param action - Action to perform
 * @returns New toast state
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      // Add new toast, keeping only TOAST_LIMIT most recent
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      // Update existing toast by ID
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Queue toast(s) for removal
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        // Dismiss all toasts if no ID specified
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      // Mark toast(s) as closed
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    
    case "REMOVE_TOAST":
      // Remove toast from state
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

/** Array of listener functions to notify on state changes */
const listeners: Array<(state: State) => void> = []

/** Global toast state stored in memory */
let memoryState: State = { toasts: [] }

/**
 * Dispatch Action to Toast State
 * 
 * Updates global toast state and notifies all listeners.
 * 
 * @param action - Action to dispatch
 */
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

/** Toast options type - ToasterToast without ID (auto-generated) */
type Toast = Omit<ToasterToast, "id">

/**
 * Show Toast Notification
 * 
 * Global function to display a toast notification.
 * Returns control functions for the created toast.
 * 
 * @param props - Toast properties (title, description, action, etc.)
 * @returns Object with toast ID and control functions (update, dismiss)
 * 
 * @example
 * const { id, dismiss, update } = toast({
 *   title: "Success!",
 *   description: "Your changes have been saved."
 * });
 * 
 * // Later, update the toast
 * update({ description: "Still processing..." });
 * 
 * // Or dismiss it
 * dismiss();
 */
function toast({ ...props }: Toast) {
  const id = genId()

  /**
   * Update this toast's properties
   * @param props - New toast properties to merge
   */
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
    
  /**
   * Dismiss this toast
   */
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // Dispatch action to add toast
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

/**
 * useToast Hook
 * 
 * React hook for accessing and managing toast notifications in components.
 * Subscribes to toast state changes and re-renders when toasts are added/removed.
 * 
 * @returns Object with current toasts array, toast function, and dismiss function
 * 
 * @example
 * function MyComponent() {
 *   const { toast, toasts } = useToast();
 *   
 *   const showNotification = () => {
 *     toast({
 *       title: "Hello!",
 *       description: "This is a notification"
 *     });
 *   };
 *   
 *   return <button onClick={showNotification}>Show Toast</button>;
 * }
 */
function useToast() {
  // Local state synchronized with global toast state
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    // Subscribe to toast state changes
    listeners.push(setState)
    
    // Cleanup: Unsubscribe on unmount
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
