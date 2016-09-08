import { SimpleRule } from './Index';
import { Primitive } from './Index';
export declare class Max extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
