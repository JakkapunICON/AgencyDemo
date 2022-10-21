import {
    Typography,
    Paper,
    Grid,
    ButtonBase,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    CardActions,
    Button,
    Divider,
    Avatar,
    IconButton,
    useTheme
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

import image1 from '../../images/content/image1.png';

function HomeComponent() {
    const theme = useTheme();

    return (
        <>
            <Box component="section" sx={{ paddingLeft: 6, paddingRight: 5, paddingTop: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={8} lg={8} md={8} sm={12}>
                        <Card variant="outlined" sx={{ height: 547.8, borderRadius: 5 }}>
                            <CardContent sx={{ padding: 0, height: 547.8 }}>
                                <img src={image1} alt="image1" />
                            </CardContent>
                        </Card>
                        <Grid container spacing={2} sx={{ marginTop: 1 }}>
                            <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
                                {/* <Card sx={{ minWidth: 275 }}> */}
                                <Card variant="outlined" sx={{ backgroundColor: '#EEF2F4', borderRadius: 4 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            be
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">well meaning and kindly.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
                                <Card variant="outlined" sx={{ backgroundColor: '#EEF2F4', borderRadius: 4 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            be
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">well meaning and kindly.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
                                <Card variant="outlined" sx={{ backgroundColor: '#EEF2F4', borderRadius: 4 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            be
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">well meaning and kindly.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
                        <Card variant="outlined" sx={{ backgroundColor: '#FFFFFF', borderRadius: 5 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ backgroundColor: theme.palette.primary.main }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <Divider />
                            <CardContent sx={{ padding: 0, height: 642 }}></CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default HomeComponent;
