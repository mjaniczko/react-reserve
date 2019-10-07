import {
  Form,
  Input,
  TextArea,
  Button,
  Image,
  Message,
  Header,
  Icon
} from 'semantic-ui-react';

function CreateProduct() {
  return (
    <>
    <Header as='h2' block>
      <Icon name='add' color='orange' />
      Create New Product
    </Header>
    <Form>
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          name='name'
          label='Name'
          placeholder='Name'
        />
        <Form.Field
          control={Input}
          name='price'
          label='Price'
          placeholder='Price'
          min='0.00'
          stop='0.01'
          type='number'
        />
        <Form.Field
          control={Input}
          name='media'
          label='Media'
          content='Select Image'
          type='file'
          accept='image/*'
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        name='description'
        label='Description'
        placeholder='Description'
      />
      <Form.Field
        control={Button}
        color='blue'
        icon='pencil alternate'
        content='Submit'
        type='submit'
      />
    </Form>
    </>
  )
}

export default CreateProduct;
