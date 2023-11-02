import { Input } from '../../atoms/Input'
import { SimpleDialog } from '../../molecules/SimpleDialog'
import { createReporter } from '@eic/common/src/actions/createReporter'
import { Form } from '../../molecules/Form'
import { Label } from '../../atoms/Label'

export interface ICreateReporterProps {}

export const CreateReporter = () => {
  return (
    <SimpleDialog buttonText="+ New Reporter">
      Create new reporter
      <Form action={createReporter} className="space-y-2">
        <Label title="Reporter UID">
          <Input placeholder="Enter the reporter uid" name="reporterUid" />
        </Label>
      </Form>
    </SimpleDialog>
  )
}
