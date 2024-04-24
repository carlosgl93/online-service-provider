import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { Paper } from '@mui/material';

function Welcome() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox
        flexDirection={isPortrait ? 'column' : 'row'}
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <Paper>Welcome</Paper>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
