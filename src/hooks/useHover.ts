import { RefObject, HTMLAttributes, useMemo, useRef, useState } from 'react'

export interface HoverEvent {
  /** The type of hover event being fired. */
  type: 'hoverstart' | 'hoverend'
  /** The pointer type that triggered the hover event. */
  pointerType: 'mouse' | 'pen'
  /** The target element of the hover event. */
  target: HTMLElement
}

export interface HoverEvents {
  /** Handler that is called when a hover interaction starts. */
  onHoverStart?: (e: HoverEvent) => void
  /** Handler that is called when a hover interaction ends. */
  onHoverEnd?: (e: HoverEvent) => void
  /** Handler that is called when the hover state changes. */
  onHoverChange?: (isHovering: boolean) => void
}

export interface HoverProps extends HoverEvents {
  /** Whether the hover events should be disabled. */
  isDisabled?: boolean
  isHovered?: boolean
}

export interface HoverHookProps extends HoverProps {
  ref?: RefObject<HTMLElement>
}

interface HoverResult {
  /** Props to spread on the target element. */
  hoverProps: HTMLAttributes<HTMLElement>
  isHovered: boolean
}

/**
 * Handles pointer hover interactions for an element. Normalizes behavior
 * across browsers and platforms, and ignores emulated mouse events on touch devices.
 */
export function useHover(props: HoverProps): HoverResult {
  const { onHoverStart, onHoverChange, onHoverEnd, isDisabled, isHovered: isHoveredProp } = props

  const [isHovered, setHovered] = useState(false)
  const state = useRef({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
  }).current

  const hoverProps = useMemo(() => {
    const triggerHoverStart = (event, pointerType) => {
      // Giải thích thêm: Bỏ qua nếu component bị disabled, hoặc touch trên di động, hoặc đã hover rồi.
      if (isDisabled || pointerType === 'touch' || state.isHovered) {
        return
      }

      state.isHovered = true
      const target = event.target

      if (onHoverStart) {
        onHoverStart({
          type: 'hoverstart',
          target,
          pointerType,
        })
      }

      if (onHoverChange) {
        onHoverChange(true)
      }

      setHovered(true)
    }

    const triggerHoverEnd = (event, pointerType) => {
      if (isDisabled || pointerType === 'touch' || !state.isHovered) {
        return
      }

      state.isHovered = false
      const target = event.target

      if (onHoverEnd) {
        onHoverEnd({ type: 'hoverend', target, pointerType })
      }

      if (onHoverChange) {
        onHoverChange(false)
      }

      setHovered(false)
    }

    const hoverProps: HTMLAttributes<HTMLElement> = {}

    if (typeof PointerEvent !== 'undefined') {
      hoverProps.onPointerEnter = (e) => {
        triggerHoverStart(e, e.pointerType)
      }

      hoverProps.onPointerLeave = (e) => {
        triggerHoverEnd(e, e.pointerType)
      }
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true
      }

      hoverProps.onMouseEnter = (e) => {
        if (!state.ignoreEmulatedMouseEvents) {
          triggerHoverStart(e, 'mouse')
        }

        state.ignoreEmulatedMouseEvents = false
      }

      hoverProps.onMouseLeave = (e) => {
        triggerHoverEnd(e, 'mouse')
      }
    }
    return hoverProps
  }, [onHoverStart, onHoverChange, onHoverEnd, isDisabled, state])

  return {
    hoverProps,
    isHovered: isHoveredProp || isHovered,
  }
}
