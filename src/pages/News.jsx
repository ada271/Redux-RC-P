import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import { useEffect } from "react";
import { clear, getData } from "../features/haberSlice";

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";


const News = () => {
const {loading,haberler}=useSelector((state)=>state.haberSlice)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getData())
},[])

    return (
        <>
            {loading ? (
                <img src={loadingGif} alt="" height="800px" />
            ) : (
                <Box
                    xs={{ d: "flex" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                    flexWrap="wrap"
                >
                    
                    {haberler.map((a, index) => (
                        <Card
                            sx={{ maxWidth: 345, maxHeight: 600, m: 5 }}
                            key={index}
                        >
                            <CardMedia
                                component="img"
                                image={a.urlToImage}
                                height="250"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {a.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {a.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={()=>dispatch(clear())} size="small">CLEAR</Button>
                                <Button
                                    size="small"
                                    href={a.url}
                                    target="_blank"
                                >
                                    DETAIL
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            )}
        </>
    );
};

export default News;
