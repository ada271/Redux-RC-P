import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { kullaniciSil } from "../features/yetkiSlice";
import { useNavigate } from "react-router";

const Navbar = () => {
    const { email } = useSelector((state) => state.yetkiSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(kullaniciSil());
        navigate("/login");
    };
    return (
        <Box sx={{ flexGrow: 1, mt:0}}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: "pointer" }}
                    >
                        Ada News
                    </Typography>
                    {email ? (
                        <Button onClick={handleLogout} color="inherit">
                            Log Out
                        </Button>
                    ) : (
                        <Button color="inherit"> Login</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
