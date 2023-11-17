"use client"

import * as HoverCard from '@radix-ui/react-hover-card';
import { LucideMessagesSquare } from 'lucide-react';

export default function HoverCardHeader() {
  return (
    <div className='hidden xl:cursor-pointer'>
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <div className="text-gray-100 flex w-32 justify-center items-center gap-2">
            <LucideMessagesSquare size={64} />
            <p>Central de Atendimento</p>
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          sideOffset={5}>
          <div className="flex flex-col gap-[7px]">
            <div className="flex flex-col gap-[15px]">
                informações
            </div>
            </div>
            <HoverCard.Arrow className='fill-white'/>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  )
}