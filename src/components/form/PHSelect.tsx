import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProp = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

const PHSelect = ({ label, name, options, disabled }: TSelectProp) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            size="large"
            options={options}
            disabled={disabled}
          ></Select>
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
