import { StepsStyleConfig } from 'chakra-ui-steps'


const CustomSteps = {
   ...StepsStyleConfig,
   baseStyle: props => {
      return {
         ...StepsStyleConfig.baseStyle(props),
         step: {
            ...StepsStyleConfig.baseStyle(props).step,
         },
         connector: {
            ...StepsStyleConfig.baseStyle(props).connector,
            _highlighted: {
               borderColor: 'brand.500',
               // bgColor: 'brand.500',
            },
         },
         steps: {
            ...StepsStyleConfig.baseStyle(props).steps,
            fontFamily: 'inherit',
         },
         icon: {
            ...StepsStyleConfig.baseStyle(props).icon,
         },
         stepIconContainer: {
            ...StepsStyleConfig.baseStyle(props).stepIconContainer,
            // your custom styles here
            bgColor: 'transparent',
            _highlighted: {
               bgColor: 'brand.500',
               borderColor: 'brand.500',
            },
            _activeStep: {
               borderColor: 'brand.500',
               bgColor: 'transparent',
            },
         },
      }
   },
}

export default CustomSteps
