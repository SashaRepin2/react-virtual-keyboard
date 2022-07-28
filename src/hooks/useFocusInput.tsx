import React from "react";

function useFocusInput() {
    const [inputRef, setInputRef] = React.useState<HTMLInputElement | null>(null);

    React.useEffect(() => {
        const onFocusInput = (event: Event) => {
            if ((event.target as HTMLElement).nodeName === "INPUT") {
                setInputRef(event.target as HTMLInputElement);
            }
        };

        document.addEventListener("focus", onFocusInput, true);

        () => {
            document.removeEventListener("focus", onFocusInput, true);
        };
    }, []);

    return { inputRef, setInputRef };
}

export default useFocusInput;
