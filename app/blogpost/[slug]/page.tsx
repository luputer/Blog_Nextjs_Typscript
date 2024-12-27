import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'



const htmlContent = `
<div>I am html</div>
` 


export default async function BlogPage({ params }: { params: { slug: string } }) {
  return (
   <MaxWidthWrapper className=''>
    <div className="justify-between">
        <h1 className='text-2xl font-bold'>Titel here</h1>
        <div dangerouslySetInnerHTML={{__html: htmlContent}}>
            {params.slug}
        </div>
    </div>
   </MaxWidthWrapper>
  )
}


