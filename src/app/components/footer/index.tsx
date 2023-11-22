import { FacebookIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full">
      <footer
        className="flex flex-col items-center justify-center text-center text-white bg-green-950 w-full">
        <div className="pt-9">
          <div className="mb-2 flex justify-center">
            <a href="https://www.facebook.com/profile.php?id=100063580687132&mibextid=JRoKGi" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/_casadapesca/" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <InstagramIcon />
            </a>

          </div>
        </div>

        <div
          className="w-full  p-4 text-center text-neutral-700 bg-green-950 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="#"
          >Casa da Pesca</a>
        </div>
      </footer>
    </div>
  )
}


