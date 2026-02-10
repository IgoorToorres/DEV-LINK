'use client'
import { SocialItem } from "@/types/social-item"

type ButtonSocialLinkProps = {
    social: SocialItem;
    children: React.ReactNode;
}

export const ButtonSocialLink = ({ children, social }: ButtonSocialLinkProps) => {

    function handleClick() {
        window.open(social.url, "_blank", "noopener,noreferrer")
    }


    return (
        <button
            className="bg-transparent"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}