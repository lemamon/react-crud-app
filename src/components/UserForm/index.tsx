import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Error, Form, FormContainer, Input, Button } from "./styles";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate, useParams } from "react-router-dom";
import { userSchema } from "../../types/validation";
import { UserFormInputs } from "../../types/User";
import { maskPhoneNumber } from "../../utils";

const UserForm: FC = () => {
  const { addUser, updateUser, users } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const userToEdit = users.find((user) => user.id === id);

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: zodResolver(userSchema),
    defaultValues: userToEdit || {},
  });

  const onSubmit = (data: UserFormInputs) => {
    if (userToEdit) {
      updateUser({ ...userToEdit, ...data });
    } else {
      addUser({ id: String(Date.now()), ...data });
    }
    navigate("/");
  };

  return (
    <FormContainer>
      <h1>{id ? "Edit User" : "Add User"}</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input {...register("name")} placeholder="Name" />
          {errors.name && <Error>{errors.name.message}</Error>}

          <Input {...register("email")} placeholder="Email" />
          {errors.email && <Error>{errors.email.message}</Error>}

          <Input
            {...register("birthDate")}
            placeholder="Birth Date"
            type="date"
          />
          {errors.birthDate && <Error>{errors.birthDate.message}</Error>}

          <Input {...register("address")} placeholder="Address" />
          {errors.address && <Error>{errors.address.message}</Error>}

          <Input
            {...register("phoneNumber")}
            placeholder="Phone Number"
            type="text"
            maxLength={15}
            onChange={(e) => {
              const value = e.target.value;
              const masked = maskPhoneNumber(value);
              setValue("phoneNumber", masked);
            }}
          />
          {errors.phoneNumber && <Error>{errors.phoneNumber.message}</Error>}
        </div>
        <Button type="submit">Save</Button>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
