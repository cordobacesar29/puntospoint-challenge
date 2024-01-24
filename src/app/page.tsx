import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Colors } from './utils/Colors'
import { ROUTES } from './utils/routes'

function HomePage() {
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Typography>
        Bienvenidos a mi proyecto. 👨‍💻
      </Typography>
      <Link href={ROUTES.DASHBOARD}>
        <Button>Ir al dashboard</Button>
      </Link>
    </Box>
  )
}

export default HomePage