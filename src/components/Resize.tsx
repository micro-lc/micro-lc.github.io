import type { HTMLAttributes } from 'react'
import type React from 'react'
import { createElement, useEffect, useRef } from 'react'

type ResizeBorder = 'both' | 'left' | 'right'

type ResizeProps = HTMLAttributes<HTMLElement> & {
  border?: ResizeBorder
  borderStyle?: string
  tag?: string
}

const applyHalfStyle = (...elements: {style: HTMLElement['style']}[]) => {
  elements.forEach((element) => {
    element.style.resize = 'horizontal'
    element.style.flexDirection = 'column'
  })
}

const applyLeftStyle = (element: ChildNode & {style: HTMLElement['style']}, borderStyle: string | undefined) => {
  element.style.borderRight = borderStyle ?? '6px solid rgba(0, 0, 0, 0.05)'
  element.style.cursor = 'col-resize'
  element.childNodes.forEach((el) => 'style' in el && ((el.style as HTMLElement['style']).cursor = 'default'))
}

const applyRightStyle = (element: ChildNode & {style: HTMLElement['style']}, borderStyle: string | undefined) => {
  element.style.borderLeft = borderStyle ?? '6px solid rgba(0, 0, 0, 0.05)'
  element.style.cursor = 'col-resize'
  element.childNodes.forEach((el) => 'style' in el && ((el.style as HTMLElement['style']).cursor = 'default'))
}

interface StyledElement extends Element {
  style: HTMLElement['style']
}

interface ResizableContent {
  left: StyledElement
  parent: HTMLElement
  right: StyledElement
  width: number
  x: number
}

function mouseMoveHandler(this: ResizableContent, event: MouseEvent): void {
  const dx = event.clientX - this.x
  this.left.style.width = `${this.width + dx}px`
}

function mouseDownHandler(this: ResizableContent, event: MouseEvent): void {
  const { parent: { ownerDocument: { defaultView: window } } } = this
  if (window) {
    const { x: parentX } = this.parent.getBoundingClientRect()
    const leftStyle = window.getComputedStyle(this.left)
    const rightStyle = window.getComputedStyle(this.right)
    const borderWidth = parseInt(leftStyle.borderRightWidth, 10)
    + parseInt(rightStyle.borderLeftWidth, 10)

    this.x = event.clientX
    this.width = parseInt(leftStyle.width, 10)

    const borderDelta = Math.abs(event.clientX - parentX - this.width)

    const moveHandler = mouseMoveHandler.bind(this)
    const upHandler = () => {
      window.removeEventListener('mousemove', moveHandler)
    }

    if (borderDelta < borderWidth) {
      window.addEventListener('mousemove', moveHandler)
      window.addEventListener('mouseup', upHandler)
    }
  }
}

const registerResize = (element: HTMLElement, content: ResizableContent) => {
  const downHandler = mouseDownHandler.bind(content)
  element.addEventListener('mousedown', downHandler)

  return () => { element.removeEventListener('mousedown', downHandler) }
}

const Resize: React.FC<ResizeProps> = ({ children, tag, border = 'both', borderStyle, ...props }) => {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    if (ref.current) {
      const [left, right] = Array.from(ref.current.childNodes)
        .filter((el): el is Element & {style: HTMLElement['style']} => 'style' in el)

      applyHalfStyle(left, right)

      if (border !== 'right') {
        applyLeftStyle(left, borderStyle)
      }

      if (border !== 'left') {
        applyRightStyle(right, borderStyle)
      }

      return registerResize(ref.current, { left, parent: ref.current, right, width: parseInt(left.style.width, 10), x: 0 })
    }
  }, [border, borderStyle, ref])

  return createElement(tag ?? 'div', { ref: (innerRef: HTMLElement | null) => { innerRef && (ref.current = innerRef) }, ...props }, children)
}

export default Resize
