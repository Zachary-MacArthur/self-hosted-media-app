import { IconType } from "react-icons"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface SidebarItemsProps {
    icon: IconType
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon, 
    label,
    active,
    href
}) => {
    return (
        <Link
        href={href}
        className={twMerge(`
        flex
        flex-rowh-auto
        items-centerw-full
        gap-x-4text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1
        `,
        active && "text-white"
    )}
        >
        <Icon size={26} />
        <p className="truncate w-full">{label}</p>
        </Link>
      );
}
 
export default SidebarItem;