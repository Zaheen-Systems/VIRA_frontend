import CerebriumLogo from "@/app/assets/logos/cerebrium.svg";
// import ExpiryTimer from "../Session/ExpiryTimer";

const aCx =
  "underline decoration-primary-400/0 hover:decoration-primary-400 underline-offset-4 transition-all duration-300";

function Header() {
  return (
    <header
      id="header"
      className="w-full flex self-start items-center p-[--app-padding] justify-between"
    >
      <div className="group flex gap-1">
        <span className="rounded-xl p-2 flex place-content-center transition-all">
          
          {/* <Logo  /> */}
        </span>

        
      </div>
      {/* <ExpiryTimer /> */}
    </header>
  );
}

export default Header;
