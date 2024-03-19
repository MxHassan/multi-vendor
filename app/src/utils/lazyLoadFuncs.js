// src/utils/lazyLoadFuncs.js
import { lazy } from 'react'

/**
 * Function to return lazy loaded component with preload function
 *
 * @param {ReactNode} componentToimport
 * @returns ReactNode
 */
export function importWithPreload(componentToimport) {
  const Component = lazy(componentToimport)
  // Set component to preload key
  Component.preload = componentToimport
  return Component
}
