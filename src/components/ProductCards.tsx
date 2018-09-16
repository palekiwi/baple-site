import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from './Link';

const styles = (theme:any) => createStyles({
  products: {
    margin: '1em 0',
    padding: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
    height: '100%',
  },
  cardAction: {
    width: '100%',
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    width: '100%',
    textAlign: 'center',
    padding: '1em',
  }
});

interface Props {
  lang: Lang
  products: any
  classes: any
}

const ProductCards: React.SFC<Props> = ({ products, classes, lang }) => (
  <section className={classes.products}>
    <Typography variant="display1" gutterBottom align="center" color="primary">
      {products.title}
    </Typography>
    <Grid container spacing={16}>
      {products.items.map((x:any) =>
        <Grid key={x.title}item xs={12} md={4} xl={2}>
          <Card className={classes.card}>
            <CardActionArea className={classes.cardAction}>
              <Link to={x.to} lang={lang}>
                <CardContent className={classes.product}>
                  <img src={x.img.childImageSharp.sizes.src}/>
                  <Typography
                    variant="subheading"
                    color="textSecondary"
                    className={classes.cardTitle}
                  >
                    {x.title}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  </section>
);

export default withStyles(styles)(ProductCards);