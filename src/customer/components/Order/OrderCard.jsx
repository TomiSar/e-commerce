import { Grid } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid sx={{ justifyContent: 'space-between' }} container spacing={2}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img
              className='w-[5rem] h-[5rem] object-cover object-top'
              src='https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70'
              alt=''
            />
            <div className='ml-5 space-y-2'>
              <p>Men Slim Mid Rise Black Yeans</p>
              <p className='opacity-50 text-xs font-semibold'>Size:M</p>
              <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>199$</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  className='text-green-600 mr-2 text-sm'
                  xs={{ width: '15px', height: '15px' }}
                />
                <span>Delivered on March 03</span>
              </p>
              <p className='text-sm'>
                <span>Your Item Has Been Delivered</span>
              </p>
            </div>
          )}
          {false && (
            <p>
              <FiberManualRecordIcon />
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
