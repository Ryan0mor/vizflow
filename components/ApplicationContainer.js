import {
    AppShell,
    Footer,
    Group,
    Header,
    Text
} from "@mantine/core"

export const ApplicationContainer = ({children}) => {
    return(
        <AppShell
            styles={{
                main: {
                    padding: "0px",
                }
            }}
        >
            {children}
        </AppShell>
    )
}