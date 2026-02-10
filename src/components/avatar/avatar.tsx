import Image from "next/image";


export const Avatar = () => {
    return (
        <div className="inline-flex rounded-full border border-stroke">
            <Image
                src={"/foto-igor.jpeg"}
                alt="foto-avatar-igor"
                width={112}
                height={111}
                className="rounded-full"
            />
        </div>
    )
}