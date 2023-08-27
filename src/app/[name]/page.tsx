"use client";
import { usePathname } from "next/navigation";

const MyComponent = () => {
    const pathname = usePathname();

    return (
        <div>
            The current pathname is: {pathname}
        </div>
    );
};

export default MyComponent