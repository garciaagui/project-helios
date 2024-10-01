import { ReloadIcon } from '@radix-ui/react-icons'
import { Fragment } from 'react'

export default function LoadingIcon() {
  return (
    <Fragment>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Aguarde...
    </Fragment>
  )
}
