type FooterProps = {
    label: string;
}

export const Footer = ({label}: FooterProps) => {
    return (
        <footer>
            <span className="text-blue-700">{label}</span>
        </footer>
    )
}