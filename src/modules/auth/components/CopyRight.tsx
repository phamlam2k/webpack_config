import Typography, { TypographyProps } from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Copyright(props: TypographyProps) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
