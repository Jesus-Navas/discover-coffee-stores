import { extendTheme } from "@chakra-ui/react"
import { breakpoints } from "./foundations/breakpoints.theme"
import { colors } from "./foundations/colors.theme"
import { Button } from "./components/button.theme"
import { Text } from "./components/text.theme"

const theme = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
    colors,
    fonts: {
        heading: "IBMPlexSans-Regular",
        body: "IBMPlexSans-Regular"
    },
    styles: {
        global: {
            body: {
                overflowX: "hidden",
                maxWidth: "100vw",
                scrollBehavior: "smooth",

            }
        }
    },
    breakpoints,
    components: {
        Button,
        Text,
    }

})


export default theme

