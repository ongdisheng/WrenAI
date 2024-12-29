import { useState } from 'react';
import { Form, Input, Switch } from 'antd';
import { ERROR_TEXTS } from '@/utils/error';
import { FORM_MODE } from '@/utils/enum';
import { hostValidator } from '@/utils/validator';

interface Props {
  mode?: FORM_MODE;
}

export default function MySQLProperties(props: Props) {
  const { mode } = props;
  const isEditMode = mode === FORM_MODE.EDIT;
  const [sslActive, setSslActive] = useState<boolean>(false);
  return (
    <>
      <Form.Item
        label="Display name"
        name="displayName"
        required
        rules={[
          {
            required: true,
            message: ERROR_TEXTS.CONNECTION.DISPLAY_NAME.REQUIRED,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Host"
        name="host"
        required
        rules={[
          {
            required: true,
            validator: hostValidator,
          },
        ]}
      >
        <Input placeholder="10.1.1.1" disabled={isEditMode} />
      </Form.Item>
      <Form.Item
        label="Port"
        name="port"
        required
        rules={[
          {
            required: true,
            message: ERROR_TEXTS.CONNECTION.PORT.REQUIRED,
          },
        ]}
      >
        <Input placeholder="3306" disabled={isEditMode} />
      </Form.Item>
      <Form.Item
        label="Username"
        name="user"
        rules={[
          {
            required: true,
            message: ERROR_TEXTS.CONNECTION.USERNAME.REQUIRED,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        required
        rules={[
          {
            required: true,
            message: ERROR_TEXTS.CONNECTION.PASSWORD.REQUIRED,
          },
        ]}
      >
        <Input.Password placeholder="input password" />
      </Form.Item>
      <Form.Item
        label="Database name"
        name="database"
        required
        rules={[
          {
            required: true,
            message: ERROR_TEXTS.CONNECTION.DATABASE.REQUIRED,
          },
        ]}
      >
        <Input placeholder="MySQL database name" disabled={isEditMode} />
      </Form.Item>
      <Form.Item label="Use SSL" name="ssl" valuePropName="checked">
        <Switch checked={sslActive} onChange={setSslActive} />
      </Form.Item>
      <Form.Item
        label="SSL CA File"
        name="certAuthority"
      >
        <Input placeholder="Path to Certificate Authority file for SSL" disabled={isEditMode || !sslActive} />
      </Form.Item>
      <Form.Item
        label="SSL Key File"
        name="clientKey"
      >
        <Input placeholder="Path to Client Key file for SSL" disabled={isEditMode || !sslActive} />
      </Form.Item>
      <Form.Item
        label="SSL CERT File"
        name="clientCert"
      >
        <Input placeholder="Path to Client Certificate file for SSL" disabled={isEditMode || !sslActive} />
      </Form.Item>
    </>
  );
}
