 type Option = {
    label: string;
    value: string;
  };
  
 export  type SelectProps = {
    name: string;
    value: string;
    options: Option[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
  };
  