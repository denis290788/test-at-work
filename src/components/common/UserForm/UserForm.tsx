import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./UserForm.scss";
import { FormInput } from "../../ui/FormInput/FormInput";
import { userSchema, type UserFormData } from "./schema/userSchema";
import { useUserStore } from "../../../stores/userStore";
import type { User } from "../../../types/user";
import { Modal } from "../../ui/Modal/Modal";

interface UserFormProps {
    user: User;
}

export const UserForm: React.FC<UserFormProps> = ({ user }) => {
    const { updateUser } = useUserStore();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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

    const onFormSubmit = (data: UserFormData) => {
        updateUser(user.id, {
            name: data.name,
            username: data.username,
            email: data.email,
            address: { ...user.address, city: data.city },
            phone: data.phone,
            company: { ...user.company, name: data.companyName },
        });
        setShowSuccessModal(true);
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
                    <button
                        type="submit"
                        disabled={!isDirty}
                        className={`form-button ${!isDirty ? "disabled" : ""}`}
                    >
                        Сохранить
                    </button>
                </div>
            </form>

            <Modal isOpen={showSuccessModal} />
        </div>
    );
};
