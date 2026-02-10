import { Avatar } from "@/components/avatar";
import { LinksList } from "@/components/links-list/links-list";
import { SwitchTheme } from "@/components/switch-theme";
import { createClient } from "@/prismicio";

export default async function Home() {

  const client = createClient();
  const settings = await client.getSingle('site_settings')

  const links = (settings.data.links || [])
    .map((link) => ({
      label: link.label ?? "",
      url: link.url ?? "",
    }))
    .filter((link) => link.label && link.url)


  return (
    <div className="flex flex-col justify-center items-center ">
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
        <LinksList links={links} />
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
