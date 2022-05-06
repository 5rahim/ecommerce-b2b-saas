import MainLayout from '@/components/common/Layouts/MainLayout'
import PostList, { ALL_POSTS_QUERY } from '@/components/PostList'
import Features from '@/components/ui/Landing/Features'
import Features2 from '@/components/ui/Landing/Features2'
import Hero from '@/components/ui/Landing/Hero'
import Pricing from '@/components/ui/Landing/Pricing'
import withApollo from '@/lib/withApollo'
import { useEffect } from 'react'

const Index = ({ user }) => {
   
   useEffect(() => {
      console.log(user)
   }, [])
   
   return (
      <MainLayout navbar="landing">
         <Hero />
         <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
         <PostList />
         <Features2 />
         <Features />
         <Pricing />
      </MainLayout>
   )
}

export const getServerSideProps = withApollo({ auth: false, translations: ['hero'] },
   async (ctx, apolloClient) => {
      const t = await apolloClient.query({
         query: ALL_POSTS_QUERY,
      })
      
      return {
         props: {},
      }
   })

export default Index
