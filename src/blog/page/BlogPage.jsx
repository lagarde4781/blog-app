import { Box, Typography } from "@mui/material"
import { BlogLayout } from "../layout/BlogLayout"

export const BlogPage = () => {
    return (
        <BlogLayout>
            <Box 
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="cocenter" sx={{ display: 'flex'}}>
                <Typography variant="h1">
                    Blog Page
                </Typography>
            </Box>
        </BlogLayout>
    )
}
