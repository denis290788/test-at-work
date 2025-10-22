import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./UserForm.scss";
import { FormInput } from "../Input/FormInput";
import { Button } from "../Button/Button";

const userSchema = z.object({
    name: z
        .string()
        .min(2, "Имя должно содержать минимум 2 символа")
        .max(64, "Имя должно содержать максимум 64 символа"),
    username: z
        .string()
        .min(2, "Никнейм должен содержать минимум 2 символа")
        .max(64, "Никнейм должен содержать максимум 64 символа"),
    email: z.string().email("Некорректный email"),
    city: z
        .string()
        .min(2, "Город должен содержать минимум 2 символа")
        .max(64, "Город должен содержать максимум 64 символа"),
    phone: z.string().regex(/^\d+$/, "Телефон должен содержать только цифры"),
    companyName: z
        .string()
        .min(2, "Название компании должно содержать минимум 2 символа")
        .max(64, "Название компании должно содержать максимум 64 символа"),
});

type UserFormData = z.infer<typeof userSchema>;

interface UserFormProps {
    user: {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            city: string;
        };
        phone: string;
        company: {
            name: string;
        };
        avatar: string;
    };
    onSubmit: (data: UserFormData) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ user, onSubmit }) => {
    const {
        handleSubmit,
        formState: { errors, isDirty },
        watch,
        setValue,
    } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: user.name,
            username: user.username,
            email: user.email,
            city: user.address.city,
            phone: user.phone,
            companyName: user.company.name,
        },
        mode: "onChange",
    });

    const formValues = watch();
    const isFormChanged = isDirty;

    const onFormSubmit = (data: UserFormData) => {
        onSubmit(data);
    };

    const handleInputChange = (field: keyof UserFormData) => (value: string) => {
        setValue(field, value, { shouldDirty: true });
    };

    return (
        <div className="user-form">
            <h1>Данные профиля</h1>

            <form onSubmit={handleSubmit(onFormSubmit)} className="user-form__form" noValidate>
                <FormInput
                    id="name"
                    label="Имя"
                    placeholder="Введите имя"
                    value={formValues.name || ""}
                    onChange={handleInputChange("name")}
                    error={errors.name?.message}
                />

                <FormInput
                    id="username"
                    label="Никнейм"
                    placeholder="Введите никнейм"
                    value={formValues.username || ""}
                    onChange={handleInputChange("username")}
                    error={errors.username?.message}
                />

                <FormInput
                    id="email"
                    type="email"
                    label="Почта"
                    placeholder="Введите email"
                    value={formValues.email || ""}
                    onChange={handleInputChange("email")}
                    error={errors.email?.message}
                />

                <FormInput
                    id="city"
                    label="Город"
                    placeholder="Введите город"
                    value={formValues.city || ""}
                    onChange={handleInputChange("city")}
                    error={errors.city?.message}
                />

                <FormInput
                    id="phone"
                    type="tel"
                    label="Телефон"
                    placeholder="Введите телефон"
                    value={formValues.phone || ""}
                    onChange={handleInputChange("phone")}
                    error={errors.phone?.message}
                />

                <FormInput
                    id="companyName"
                    label="Название компании"
                    placeholder="Введите название компании"
                    value={formValues.companyName || ""}
                    onChange={handleInputChange("companyName")}
                    error={errors.companyName?.message}
                />

                <div className="form-actions">
                    <Button type="submit" disabled={!isFormChanged}>
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
};
