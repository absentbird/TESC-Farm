export declare function useHold({ toggleUpDown }: {
    toggleUpDown: (increment: boolean) => void;
}): {
    holdStart: (value: "up" | "down") => void;
    holdStop: () => void;
};
