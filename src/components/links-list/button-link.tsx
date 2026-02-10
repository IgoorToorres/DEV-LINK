'use client'
import { LinkItem } from "@/types/link-item"

export const ButtonLink = ({ label, url }: LinkItem) => {

    function handleClick(){
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <button
            onClick={handleClick}
            className="w-full h-14 rounded-md bg-surface hover:bg-surface-hover border border-stroke"
        >
            {label}
        </button>
    )
}