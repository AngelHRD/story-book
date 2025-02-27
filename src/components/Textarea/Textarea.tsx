import { ChangeEvent, ComponentProps, useState } from "react";
import clsx from "clsx";

type TextareaProps = ComponentProps<"textarea"> & {
    label: string;
    maxLength: number;
};

export const Textarea = ({ label, maxLength, className, ...props }: TextareaProps) => {
    const [value, setValue] = useState("");
    const [hasError, setHasError] = useState(false);

    const textareaClassName = clsx(
        "w-full rounded-md focus:outline-none border p-2",
        hasError ? "border-red-500" : "border-gray-300",
        className
    );

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        setHasError(newValue.length >= maxLength);
    };

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <textarea
                {...props}
                className={textareaClassName}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
            />
            <p className={clsx("text-xs", hasError ? "text-red-500" : "text-gray-500")}>
                {value.length} / {maxLength} caractères
            </p>
        </div>
    );
};
