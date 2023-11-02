import { Input } from '../../atoms/Input'
import { SimpleDialog } from '../../molecules/SimpleDialog'
import { createAdmin } from '@eic/common/src/actions/createAdmin'
import { Form } from '../../molecules/Form'
import { Label } from '../../atoms/Label'

export interface ICreateReporterProps {}

export const CreateAdmin = () => {
  return (
    <SimpleDialog buttonText="+ New Admin">
      Create new admin
      <Form action={createAdmin} className="space-y-2">
        <Label title="UID">
          <Input placeholder="Enter the uid" name="adminUid" />
        </Label>
      </Form>
    </SimpleDialog>
  )
}
