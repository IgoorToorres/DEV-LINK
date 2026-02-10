import { Avatar } from "@/components/avatar";
import { Footer } from "@/components/footer/footer";
import { LinksList } from "@/components/links-list/links-list";
import { SocialList } from "@/components/social-list";
import { SwitchTheme } from "@/components/switch-theme";
import { createClient } from "@/prismicio";

export const LinksPage = async () => {

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
        <div className="flex min-h-screen flex-col items-center justify-center">

            <div className="flex flex-col items-center gap-2 p-6">
                <Avatar />
                <h2 className="text-md text-text">@Igor Torres</h2>
            </div>

            <SwitchTheme />
            <LinksList links={links} />
            <SocialList socials={socials} />
            <Footer label={"Feito por Igor Torres"} />

        </div>
    );
}
