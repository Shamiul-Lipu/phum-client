import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolver?: any;
};

const PHForm = ({ onSubmit, children, resolver }: TFormProps) => {
  let formConfig = {};

  if (resolver) {
    formConfig = { resolver: resolver };
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
