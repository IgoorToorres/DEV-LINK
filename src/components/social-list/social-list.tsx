import { SocialItem } from "@/types/social-item"
import { ButtonSocialLink } from "./button-social-link"
import { Instagram, Github, Linkedin, } from "lucide-react"

type SocialListProps = {
    socials: SocialItem[]
}

const ICONS: Record<string, React.ReactNode> = {
    Instagram: <Instagram />,
    Linkedin: <Linkedin />,
    Github: <Github />,
}

export const SocialList = ({socials}: SocialListProps) => {
    return (
        <div className="flex p-6 gap-8">
            {socials.map((social) => (
                <ButtonSocialLink 
                    key={social.plataform}
                    social={social}
                >
                    {ICONS[social.plataform] ?? social.plataform}
                </ButtonSocialLink>
            ))}
        </div>
    )
}