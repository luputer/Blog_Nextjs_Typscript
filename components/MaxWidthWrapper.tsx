import React from 'react'
import { cn } from '@/lib/utils'


interface Maxwithprops{
  className: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({className, children}:Maxwithprops) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl w-full my-12 ', className)}>
    {children}
</div>
  )
}

export default MaxWidthWrapper
