import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-alice-carousel';

const Footer = () => {
  return (
    <div>
      <Grid
        className='bg-black text-white text-center mt-10'
        container
        sx={{ bgcolor: 'black', color: 'white', py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            {' '}
            Company
          </Typography>

          <div>
            <Button className='pb-5'> About</Button>
          </div>
          <div>
            <Button className='pb-5'>Blog</Button>
          </div>
          <div>
            <Button className='pb-5'>Press</Button>
          </div>
          <div>
            <Button className='pb-5'>Jobs</Button>
          </div>
          <div>
            <Button className='pb-5'>Partners</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            {' '}
            Solutions
          </Typography>

          <div>
            <Button className='pb-5'>Marketing</Button>
          </div>
          <div>
            <Button className='pb-5'>Analytics</Button>
          </div>
          <div>
            <Button className='pb-5'>Commerce</Button>
          </div>
          <div>
            <Button className='pb-5'>Insights</Button>
          </div>
          <div>
            <Button className='pb-5'>Support</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            {' '}
            Documentation
          </Typography>

          <div>
            <Button className='pb-5'>Guides</Button>
          </div>
          <div>
            <Button className='pb-5'>API Status</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            {' '}
            Legal
          </Typography>

          <div>
            <Button className='pb-5'>Claim</Button>
          </div>
          <div>
            <Button className='pb-5'>Privacy</Button>
          </div>
          <div>
            <Button className='pb-5'>Terms</Button>
          </div>
        </Grid>
        <Grid className='pt-20' item xs={12}>
          <Typography className='body2' component='p' align='center'>
            &copy; 2024 My Company. All right reserved.
          </Typography>
          <Typography className='body2' component='p' align='center'>
            Made with love by me.
          </Typography>
          <Typography className='body2' component='p' align='center'>
            icons made by
            <Link
              href='https://www.freepik.com/'
              color='inherit'
              underline='always'
            >
              {' '}
              Freepik
            </Link>{' '}
            <Link
              href='https://www.flaticon.com'
              color='inherit'
              underline='always'
            >
              {' '}
              Flaticon
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
