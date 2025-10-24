import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../stores/userStore";
import { UserSettings } from "../../common/UserSettings/UserSettings";
import "./EditUser.scss";
import { UserForm } from "../../common/UserForm/UserForm";
import { Loader } from "../../ui/Loader/Loader";
import { BackIcon } from "../../ui/icons/BackIcon";
import { BackMobileIcon } from "../../ui/icons/BackMobileIcon";

export const EditUser: React.FC = () => {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const { users, isLoading } = useUserStore();
    const user = users.find((u) => u.id === Number(id));

    if (isLoading) return <Loader />;

    if (!user) {
        return <div className="error">Пользователь не найден</div>;
    }

    return (
        <div className="edit-user">
            <button className="edit-user__back-button" onClick={() => navigate("/")}>
                <BackIcon className="edit-user__back-icon--desktop" />
                <BackMobileIcon className="edit-user__back-icon--mobile" />
                <span>Назад</span>
            </button>

            <div className="edit-user__content">
                <UserSettings user={user} />
                <UserForm user={user} />
            </div>
        </div>
    );
};
