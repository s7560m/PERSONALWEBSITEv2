import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import {useDarkMode} from "../../hooks/useDarkMode";

export default function Blog() {
    const { color, background } = useDarkMode();

    return (
        <Box
            sx={{
                backgroundColor: background,
                color: color,
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                textAlign: "center",
            }}
        >
            <ConstructionIcon sx={{ fontSize: 80, mb: 2, color }} />
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                Blog Under Maintenance
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mb: 3 }}>
                Our blog is currently undergoing some improvements to bring you a better
                reading experience. Please check back soon!
            </Typography>
            <Button
                variant="outlined"
                sx={{
                    color,
                    borderColor: color,
                    "&:hover": {
                        borderColor: color,
                        backgroundColor:
                            background === "#000000"
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(0,0,0,0.08)",
                    },
                }}
                onClick={() => window.location.href = "/"}
            >
                Back to Home
            </Button>
        </Box>
    );
}
