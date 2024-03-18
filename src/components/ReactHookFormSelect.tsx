import { FormControl, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";

interface ReactHookFormSelectProps {
  name: string;
  label: string;
  control: any;
  defaultValue: string;
  children: React.ReactNode;
}

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}: ReactHookFormSelectProps) => {
  const labelId = `${name}-label`;
  return (
    <FormControl fullWidth {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select fullWidth labelId={labelId} label={label} {...field}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;
