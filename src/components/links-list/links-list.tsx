import { LinkItem } from "@/types/link-item"
import { ButtonLink } from "./button-link"

type LinksListProps = {
    links: LinkItem[]
}

export const LinksList = ({ links }: LinksListProps) => {
    console.log(links);
    return (
        <div className="flex flex-col gap-4">
            {links.map((link) => (
                <ButtonLink
                    key={link.label}
                    label={link.label}
                    url={link.url}
                />
            ))}
        </div>
    )
}