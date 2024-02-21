import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Bspagination(props) {
    let {onChange,count} = props
  return (
    <Stack spacing={2}>
      <Pagination onChange={onChange} count={count} color="primary" />
    </Stack>
  );
}