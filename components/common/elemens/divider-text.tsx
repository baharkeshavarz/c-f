import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme, sx }) => ({
  width: '100%',
  ...theme.typography.caption,
  ...{sx},
  p: 0,
  color: theme.palette.text.primary, 
    '& > :not(style) ~ :not(style)': {
       marginTop: theme.spacing(0),
    },
}));

interface DividerTextProps {
    sx: React.CSSProperties
    content: string;
}

export default function DividerText({content, sx} : DividerTextProps) {
  return (
    <Root sx={sx}>
         <Divider textAlign="left">{content}</Divider>
    </Root>
  );
}
