'use client';

import Link from "next/link";

export default function Error() {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12">
      <h2 className="text-xl font-bold">Oh não!</h2>
      <p className="my-2">
        Erro! retorne a página inicial.
      </p>
      <Link href={'/'} className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90">
       Retornar para Home! 
      </Link>
      
    </div>
  );
}