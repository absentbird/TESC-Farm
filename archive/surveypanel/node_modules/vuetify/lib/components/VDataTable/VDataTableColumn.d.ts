import type { PropType } from 'vue';
export declare const VDataTableColumn: import("vue").FunctionalComponent<Partial<{
    fixed: boolean;
    nowrap: boolean;
    align: "center" | "end" | "start";
    lastFixed: boolean;
    noPadding: boolean;
}> & Omit<Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<"start" | "center" | "end">;
        default: string;
    };
    fixed: BooleanConstructor;
    fixedOffset: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    lastFixed: BooleanConstructor;
    noPadding: BooleanConstructor;
    tag: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    nowrap: BooleanConstructor;
}>>, "fixed" | "nowrap" | "align" | "lastFixed" | "noPadding">, {}, any, {}>;
