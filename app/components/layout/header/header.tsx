import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="
        flex h-[11.1rem] w-full items-center justify-between
        bg-[linear-gradient(180deg,#000000_-212.35%,rgba(0,0,0,0.51)_32.09%,rgba(0,0,0,0)_93.93%)]
        px-24 pt-12 pb-16
      "
    >
      <nav className="flex items-center gap-[3.6rem]">
        <Link href="/" className="flex items-center gap-[0.6rem]">
          <h3>KINO</h3>
          <h3 className="text-(--error)">XII</h3>
        </Link>

        <Link href="/sessions">
          <p className="text-[1.2rem] overlineText">Sessions</p>
        </Link>
      </nav>

      <div className="flex items-center gap-[3.2rem]">
        <label
          className="
    flex h-[4.1rem] w-152 items-center
    gap-[0.4rem] rounded-full
    bg-(--tint-white) px-[1.2rem] py-[0.6rem]
  "
        >
          <Image src="/icons/search.svg" alt="search" width={14} height={14} />

          <input
            name="searchInput"
            type="search"
            placeholder="Search films and live events"
            className="
      flex-1 bg-transparent outline-none
      placeholder:text-(--text-primary)
      text-[1.4rem]/[130%]
      font-normal
      
    "
          />
        </label>

        <div className="flex items-center gap-[1.2rem]">
          <button className=" btn-primary ">Sign up</button>
          <button className=" btn-secondary ">Log in</button>
        </div>
      </div>
    </header>
  );
}
