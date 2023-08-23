import { useState } from 'react';

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const isValidValue = () => {
    const newErrors = validate(values);
    setErrors(newErrors);

    return Object.keys(newErrors).length;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!isValidValue()) {
      setIsLoading(false);
      return;
    }

    try {
      await onSubmit(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
