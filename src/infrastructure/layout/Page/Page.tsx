import { ReactNode } from "react";
import { Box } from "@chakra-ui/react"
import Meta from "../../../ui/layout/Meta/Meta"
import type { TMetaProps } from "../../../ui/layout/Meta/Meta"

type TPageProps = {
    children: ReactNode;
    metaConfig?: TMetaProps
    boxProps?: {}
    background?: string
}

const Page = ({ 
    children, 
    metaConfig, 
    boxProps,
    background, 
    ...props }: TPageProps) => {

    return (
        <Box
            backgroundImage={`url('/images/${background}')`}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            
        >
            <Meta {...metaConfig} />
            <Box {...props} {...boxProps}>
                {children}
            </Box>
        </Box>
    )
}
export default Page