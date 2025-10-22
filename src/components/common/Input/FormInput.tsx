import React, { useState, useRef } from "react";
import "./FormInput.scss";

interface FormInputProps {
    id: string;
    type?: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
    id,
    type = "text",
    label,
    placeholder,
    value,
    onChange,
    error,
    className = "",
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        onChange("");
        inputRef.current?.focus();
    };

    const showClearButton = value && (isFocused || inputRef.current === document.activeElement);

    return (
        <div className={`form-group ${className}`}>
            <label htmlFor={id}>{label}</label>
            <div className="input-wrapper">
                <input
                    ref={inputRef}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={error ? "error" : ""}
                />
                {showClearButton && (
                    <button
                        type="button"
                        className="input-clear"
                        onClick={handleClear}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        ×
                    </button>
                )}
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};
