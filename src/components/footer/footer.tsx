type FooterProps = {
    label: string;
}

export const Footer = ({label}: FooterProps) => {
    return (
        <footer className="p-6">
            <span className="text-blue-700">{label}</span>
        </footer>
    )
}