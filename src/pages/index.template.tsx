import { Template } from 'core/architecture'
import { Layout } from 'components/layouts'
import { Container, Box, Text, HStack, Grid, GridItem, Button } from '@chakra-ui/react'
import { LinkButton, Image } from 'components/lib'
import { Pet } from 'api/petstore/@types'
import { pagesPath } from 'pages/$path'

export type State = {
  loading: boolean
  pets: Pet[]
}
export type Action = {
  onRefetch: () => void
}

export const IndexTemplate: Template<State, Action> = ({ state: { loading, pets }, actions: { onRefetch } }) => {
  return (
    <Layout>
      <Container
        maxW="container.xl"
        py={{
          base: 12,
          md: 16,
        }}
      >
        <Box>
          <Text textStyle="h1">Top Page</Text>
        </Box>
        <Image
          mt={12}
          width={[240, 480]}
          height={{
            base: 126,
            md: 252,
          }}
          src="/og.jpg"
        />
        <Box mt={12}>
          {loading ? (
            <Box>loading...</Box>
          ) : (
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
                lg: 'repeat(6, 1fr)',
              }}
              gap={6}
            >
              {pets.map((pet, index) => {
                return (
                  <GridItem key={index}>
                    <HStack spacing={2} alignItems="baseline">
                      <Text textStyle="h3">{pet.id}:</Text>
                      <Text>{pet.name}</Text>
                    </HStack>

                    <Box color="primary.500" textStyle="body1">
                      {pet.category?.name}
                    </Box>
                  </GridItem>
                )
              })}
            </Grid>
          )}
          <HStack justifyContent="center" mt={12}>
            <Button size="lg" onClick={onRefetch}>
              Mutate
            </Button>
          </HStack>
        </Box>
        <LinkButton href={pagesPath.$url()}>top</LinkButton>
      </Container>
    </Layout>
  )
}
