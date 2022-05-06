import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { DefaultValues } from 'react-hook-form/dist/types/form'
import { z as zod, ZodSchema } from 'zod'


export type UseFormValidationSchema = (({ z, errorMessage }: { z: typeof zod, errorMessage: string }) => ZodSchema<any>) | undefined

/**
 * Returns form validation schema resolver
 * @param {UseFormValidationSchema} schema
 * @returns {{formValidationSchema: (<TFieldValues extends FieldValues, TContext>(values: UnpackNestedValue<TFieldValues>, context: (TContext |
 *    undefined), options: ResolverOptions<TFieldValues>) => Promise<ResolverResult<TFieldValues>>) | undefined}}
 */
export const useFormValidation = (schema: UseFormValidationSchema) => {
   
   return {
      schemaResolver: schema ? zodResolver(schema({ z: zod, errorMessage: 'Invalid field' })) : undefined
   }
   
}

interface UseFormCreatorProps<T> {
   schema?: UseFormValidationSchema,
   defaultValues?: DefaultValues<any>,
   onSubmit: SubmitHandler<any>
   onError?: SubmitErrorHandler<any>
}

type FieldRegistrationProps = {
   required?: boolean,
} & any
// } & (InputProps | SelectProps)

/**
 * @example
 *    const { onFormSubmit, fields, formState } = useFormCreator({
      schema: ({ z }) => z.object({
         name: z.string().min(4, 'Invalid field'),
         level: z.string().nullable(),
         description: z.string().nullable(),
      }),
      defaultValues: {
         name: course.name,
         level: course.level,
         description: course.description,
      },
      onSubmit: data => {
         updateCourseDetails({ ...data, id: course?.id })
      },
   })
 ######################################################################
 <Input {...fields.register('name')} />
 {fields.errorMessage('name')}
 * @param {UseFormCreatorProps<T>} props
 */
export function useFormCreator<T>(props: UseFormCreatorProps<T>) {
   const { schema, defaultValues, onSubmit, onError } = props
   
   const t = useTypeSafeTranslation()
   
   const { schemaResolver } = useFormValidation(schema)
   
   const {
      register, handleSubmit, control, watch, setError, reset, clearErrors, formState: { errors, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, dirtyFields },
   } = useForm({
      resolver: schemaResolver,
      defaultValues: defaultValues,
   })
   
   return {
      onFormSubmit: handleSubmit(onSubmit, onError),
      formState: {
         isValid,
         touched: dirtyFields,
         isSubmitting,
         isSubmitted,
         isSubmitSuccessful,
      },
      fields: {
         errors,
         clearErrors,
         watch: watch,
         reset: reset,
         
         setError: (name: string, message?: string) => {
            setError(name, { message: message ?? 'Invalid field' })
         },
         
         register: (name: string, options?: FieldRegistrationProps) => {
            const { required = true, autoComplete = "off", placeholder, ...rest } = options || {}
            
            return {
               ...register(name, { required }),
               placeholder: t(`form:${placeholder}`),
               isInvalid: !!errors[name],
               autoComplete,
               ...rest,
            }
         },
         
         errorMessage: (name: string, style?: any) => {
            const message = !!errors[name] ? errors[name].message : null
            if (message) {
               return (
                  <Text
                     color="red.500"
                     fontStyle="italic"
                     mt="1"
                     mb="2"
                     sx={{
                        ...style,
                     }}
                  >
                     {t('form:' + message)}
                  </Text>
               )
            }
            return <></>
         },
      },
   }
   
}
