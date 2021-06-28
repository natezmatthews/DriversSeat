import { Dictionary } from "lodash";

interface ValueAndValidator<T> {
    value: T,
    validator: (v: T) => boolean
  }
  
export default function unmetRequirements(fieldsToValidate: Dictionary<ValueAndValidator<any>>): string[] {
    /**
     * Accumulate an array of fieldnames whose values did not pass their validator
     */
    
    const message = [];
    for (const field in fieldsToValidate) {
        const { value, validator } = fieldsToValidate[field];
        if (!validator(value)) {
            message.push(field)
        }
    }
    return message
}