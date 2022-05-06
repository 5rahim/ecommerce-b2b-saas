import ShowIfOwner from '@/components/common/Role/ShowIfOwner'
import { useStoreQuery } from '@/graphql/hocs/withStore'
import { useDateFormatter } from '@/hooks/useDateFormatter'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { Button } from '@chakra-ui/react'
import { FiClock } from '@react-icons/all-files/fi/FiClock'
import { Banner, BannerActions, BannerContent, BannerDescription, BannerIcon, BannerTitle, useLocalStorage } from '@saas-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

interface TrialReminderProps {

}

const TrialReminder: React.FC<TrialReminderProps> = (props) => {
   
   const { children, ...rest } = props
   
   const store = useStoreQuery()
   const { locale } = useRouter()
   const {formatDistanceToNow} = useDateFormatter()
   const t = useTypeSafeTranslation()
   const [value, setValue] = useLocalStorage('mosu.banners.trial_reminder', false)
   
   return (
      <>
         <ShowIfOwner>
            {!value && <Banner
               // isOpen={isOpen}
               // onClose={onClose}
                motionPreset="slideOutBottom"
                colorScheme="yellow.100"
                color="black"
                boxShadow="sm"
                border="1px solid"
                borderColor="yellow.500"
            >
                <BannerIcon icon={FiClock} color="orange.800" fontSize="xl" />
                <BannerContent>
                    <BannerTitle>{t('cards:banner.trial.title')}:</BannerTitle>
                    <BannerDescription>
                       {t('cards:banner.trial.description', { time: formatDistanceToNow(store?.trial_ends) })}
                       {/*<Link href="#">Privacy Policy</Link>*/}
                    </BannerDescription>
                </BannerContent>
                <BannerActions>
                    <Button colorScheme="orange" variant="ghost">
                       {t('cards:banner.trial.action')}
                    </Button>
                </BannerActions>
                {/*<BannerCloseButton onClick={() => setValue(true)} />*/}
            </Banner>}
         </ShowIfOwner>
      </>
   )
   
}

export default TrialReminder
