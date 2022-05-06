import StoreLayout from '@/components/common/Layouts/StoreLayout'
import HideIfOwner from '@/components/common/Role/HideIfOwner'
import ShowIfOwner from '@/components/common/Role/ShowIfOwner'
import SEO from '@/components/common/SEO'
import AddCategoriesBanner from '@/components/ui/Banners/AddCategoriesBanner'
import CustomizeStoreBanner from '@/components/ui/Banners/CustomizeStoreBanner'
import TrialReminderBanner from '@/components/ui/Banners/TrialReminderBanner'
import CategorySidebar from '@/components/ui/CategorySidebar'
import ProductCard from '@/components/ui/ProductCard'
import withStore, { useStoreQuery } from '@/graphql/hocs/withStore'
import { useUserQuery } from '@/graphql/hocs/withUser'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import withApollo from '@/lib/withApollo'
import { Grid } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { HiOutlineShoppingBag } from '@react-icons/all-files/hi/HiOutlineShoppingBag'
import { Card, EmptyState } from '@saas-ui/react'

const Index = () => {
   
   const t = useTypeSafeTranslation()
   const store = useStoreQuery()
   const user2 = useUserQuery()
   
   return (
      <StoreLayout>
         <SEO title={store?.name} />
         
         <ShowIfOwner>
            <TrialReminderBanner />
            <AddCategoriesBanner />
            <CustomizeStoreBanner />
            
            <Card>
               <EmptyState
                  my="6"
                  colorScheme="brand.500"
                  icon={HiOutlineShoppingBag}
                  title={t('empty:products.title')}
                  description={t('empty:products.description')}
                  actions={
                     <>
                        <Button colorScheme="brand">{t('empty:products.action')}</Button>
                     </>
                  }
               />
            </Card>
         </ShowIfOwner>
         
         <HideIfOwner>
            <Card>
               <CategorySidebar
                  items={[
                     { name: 'Fauteuils' },
                     { name: 'Cuisine' },
                     { name: 'Chambre' },
                  ]}
               >
                  
                  <Grid
                     maxW="100%"
                     templateColumns={{
                        base: 'repeat(2, minmax(0,1fr))', sm: 'repeat(2, minmax(0,1fr))', md: 'repeat(2, minmax(0,1fr))',
                        lg: 'repeat(3, minmax(0,1fr))',
                        xl: 'repeat(4, minmax(0,1fr))',
                     }}
                     gap={5}
                  >
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                  </Grid>
                  
                  {/*<pre data-testid="store">{JSON.stringify(store, null, 2)}</pre>*/}
                  {/*<pre data-testid="profile">{JSON.stringify(user2, null, 2)}</pre>*/}
               
               </CategorySidebar>
            </Card>
         </HideIfOwner>
      
      </StoreLayout>
   )
}

export const getServerSideProps = withApollo({ auth: false, translations: ['empty'] }, withStore({}))

export default Index
