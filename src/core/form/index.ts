import { FieldValues, useForm as useReactHookForm, UseFormProps as UseReactHookFormProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { chakra } from '@chakra-ui/react'

export type { SubmitHandler } from 'react-hook-form'
export { z }

export const Form = chakra('form')

/**
 * @description useForm
 * react-hook-formのuseForm hooksをzodのschemaで拡張したもの(？)
 *
 * @param schema zodで定義したスキーマ
 */

export type UseFormProps<T extends FieldValues = FieldValues> = UseReactHookFormProps<T> & {
  schema: z.ZodType<T>
}

export const useForm = <TFieldValues>({ schema, ...props }: UseFormProps<TFieldValues>) => {
  return useReactHookForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    ...props,
  })
}
