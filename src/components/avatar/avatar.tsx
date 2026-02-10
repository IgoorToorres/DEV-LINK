import Image from "next/image";


export const Avatar = () => {
    return (
        <Image
            src={"/foto-igor.jpeg"}
            alt="foto-avatar-igor"
            width={112}
            height={111}
        />
    )
}