import { Avatar } from "@/components/avatar";
import { LinksList } from "@/components/links-list/links-list";
import { SocialList } from "@/components/social-list";
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
    
  console.log(settings.data.socials)

  const socials = (settings.data.socials || [])
    .map((social) => ({
      plataform: social.plataform ?? "",
      url: social.url ?? "",
    }))
    .filter((social) => social.plataform && social.url)


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
        <SocialList
          socials={socials}
        />
      </div>

      {/* rodape com texto */}
      <footer>
        <span className="text-blue-700">feito por Igor Torres</span>
      </footer>

    </div>
  );
}
