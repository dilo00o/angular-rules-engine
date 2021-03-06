var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { CompositeRule } from './CompositeRule';
import { IsNotNullOrUndefined } from './IsNotNullOrUndefined';
import { Range } from './Range';
/**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maxiumum length.
 */
var /**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maxiumum length.
 */
StringIsNotNullEmptyRange = (function (_super) {
    __extends(StringIsNotNullEmptyRange, _super);
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rule(s) will be evaluated against.
     * @param minLength: The minimum allowed length of the target value.
     * @param maxLength: The maximum allowed length of the target value.
     */
    function StringIsNotNullEmptyRange(name, message, target, minLength, maxLength, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.minLength = minLength;
        _this.maxLength = maxLength;
        _this.configureRules();
        return _this;
    }
    /**
     * A helper method to configure/add rules to the validation context.
     */
    /**
         * A helper method to configure/add rules to the validation context.
         */
    StringIsNotNullEmptyRange.prototype.configureRules = /**
         * A helper method to configure/add rules to the validation context.
         */
    function () {
        this.rules.push(new IsNotNullOrUndefined('StringIsNotNull', 'The string target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new Range('TargetLengthIsWithinRange', 'The string value is not within the specified range.', this.target.toString().length, this.minLength, this.maxLength));
        }
    };
    return StringIsNotNullEmptyRange;
}(CompositeRule));
/**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maxiumum length.
 */
export { StringIsNotNullEmptyRange };
//# sourceMappingURL=StringIsNotNullEmptyRange.js.map