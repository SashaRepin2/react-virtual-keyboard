export type Button = {
    displayValue: string;
    defaultValue: string;
};

export class VirtualKeyboard {
    // caretPosition: number;
    activeInputElement: HTMLInputElement | HTMLTextAreaElement | null = null;

    constructor(ref: HTMLInputElement | HTMLTextAreaElement | null, config: any) {
        this.activeInputElement = ref;
    }

    onClick() {}
}
