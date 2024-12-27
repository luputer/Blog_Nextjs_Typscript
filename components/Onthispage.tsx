"use client"
import React,{useEffect, useState} from 'react'



interface Linktype{
    id:string;
    text: string
}


const Onthispage = ({htmlContent, className}: {htmlContent: string, className: string}) => {
    const [link, setLinks] = useState<null|Linktype[]>(null);

    useEffect(() => {
        const temp = document.createElement("div");
        temp.innerHTML = htmlContent;



        const headings = temp.querySelectorAll('h2');

        const generatedLinks:Linktype[] = [];

        headings.forEach((heading, index) => {
            const id = heading.id || `headings-${index}`;
            heading.id = id;


            generatedLinks.push({
                id: id,
                text: (heading as HTMLElement).innerText
            })


        })
    })

    setLinks(generatedLinks)

  return (
    <div>
      
    </div>
  )
}

export default Onthispage
