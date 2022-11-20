export interface IValidate {
    hasLow: boolean;
    hasCap: boolean;
    hasNumber: boolean;
    has8digit: boolean;
}

export enum EStrength {
    weak = "Weak",
    medium = "Medium",
    strong = "Strong"
}