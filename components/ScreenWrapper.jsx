'use client'
import { cn } from '@/lib/utils'
import React from 'react'

export const ScreenWrapper = ({className, children}) => {
  return (
    <div  className={cn("h-full mx-auto w-full max-w-screen-xl overflow-x-hidden ", className)}>{children}</div>
  )
}
