import { Avatar } from "@/components/avatar";
import { SwitchTheme } from "@/components/switch-theme";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>

        {/* foto e nome */}
        <div className="flex flex-col items-center justify-center">
          <Avatar />
          <h2 className="text-md text-text">@Igor Torres</h2>
        </div>

        {/* botao de dark mode */}
        <div>
          <SwitchTheme />
        </div>

      </div>


      {/* links */}
      <div>

      </div>

      {/* redes socias icones */}
      <div>

      </div>

      {/* rodape com texto */}
      <footer>
        <span className="text-blue-700">feito por Igor Torres</span>
      </footer>

    </div>
  );
}
