import React from 'react'
import { Text, Button, Box } from '@chakra-ui/react'



type TBannerProps = {
    buttonText: string;
    handleOnclick: () => void;
}

const Banner = ({ buttonText, handleOnclick }: TBannerProps) => {

    return (
        <Box
            position={"relative"}
            mb={"6rem"}
            zIndex={"2"}
        >
            <Text as={"h1"}>
                <Text as="span" variant={"xxl"} display={["block", "unset"]}>Coffe </Text>
                <Text as="span" variant={"xxl"} color={"purple"} >Connoiseur</Text>
            </Text>
            <Text
                as={"p"}
                variant={"subtitle"}
                mt={["0.75rem", "1.25rem"]}
            >
                Discover your local coffe shop!
            </Text>
            <div>
                <Button variant={"primary"} mt={["2rem", "1.25rem"]} onClick={handleOnclick}>{buttonText}</Button>
            </div>
        </Box>
    )
}

export default Banner