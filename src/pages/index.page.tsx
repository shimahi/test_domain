import { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { IndexTemplate as Template } from 'pages/index.template'
import { useViewModel } from './index.viewModel'
import { client } from 'api/petstore'
import { SWRConfig } from 'swr'

export type PropsType = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PropsType> = (props) => {
  const { state, actions } = useViewModel(props)

  return (
    <SWRConfig value={{}}>
      <Template state={state} actions={actions} />
    </SWRConfig>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const data = await client.pet.findByStatus.$get({
    query: { status: ['sold'] },
  })

  return {
    props: {
      ...data,
    },
  }
}

export default Page
