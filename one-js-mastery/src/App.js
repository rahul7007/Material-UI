import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './Styles'

const App = () => {
  const classes = useStyles()
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icons} />
          <Typography variant="h6">
            My Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.myContainer}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo album
          </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              NC INDIIIS NINCINCI DNCIDNCI CNDICDIIII IIII IIII IIII IIIIIIIII IIIIII IIIIIIIIIII III III IIIIIII III III III IIICISID
          </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    See my photos
                </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((c) =>
              <Grid item key={c} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                            </Typography>
                    <Typography>
                      This is a media card. We can describe it more briefly.
                            </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            )}

          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give in the footer
        </Typography>
      </footer>
    </>
  );
}

export default App;
