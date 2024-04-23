import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import { title } from '@/config';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [theme] = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <AppBar elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="info">{title}</Button>
          </FlexBox>
          <FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Switch theme" arrow>
              <IconButton
                color="info"
                edge="end"
                size="large"
                onClick={() => alert('To schedule')}
                data-pw="theme-toggle"
              >
                <EditCalendarOutlinedIcon />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
