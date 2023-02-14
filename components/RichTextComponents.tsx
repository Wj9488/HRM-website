import Link from "next/link"; 

export const RichTextComponents = {
    block: {
        h4: ({children}: any) => {
            return <h4 className="mt-6 mb-6">{children}</h4>;
        }
    }
};