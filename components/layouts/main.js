import Head from 'next/head'

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </Box>
  )
}
