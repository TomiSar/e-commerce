import { Box, Grid } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
      <div>
        <h1 className='font-bold text-lg py-10'>Delivery Adress</h1>
        <AddressCard />
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3} />
      </div>

      <Grid className='space-y-5' container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            className='shadow-xl rounded-md p-5 border'
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
            item
            container
          >
            <Grid item xs={6}>
              <div className='flex items-center space-x-4'>
                <img
                  className='w-[5rem] h-[5rem] object-cover object-top'
                  src='https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70'
                  alt=''
                />
                <div className='space-y-2 ml-5'>
                  <p className='font-semibold'>Men Slim Mid Rise Black Yeans</p>
                  <p className='space-x-5 opacity-50 text-sm font-semibold'>
                    <span>Color: Black</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Linaria</p>
                  <p>199$</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon
                  className='px-2 text-2xl'
                  sx={{ fontSize: '2rem' }}
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
