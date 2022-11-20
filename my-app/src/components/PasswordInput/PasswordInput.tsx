import {ChangeEvent, useState} from 'react';
import './PasswordInput.styles.scss';
import {EStrength, IValidate} from "./password.config";

function PasswordInput() {
    const [password, setPassword] = useState<string>("");
    const [validate, setValidate] = useState({
        hasLow: false,
        hasCap: false,
        hasNumber: false,
        has8digit: false
    } as IValidate);

    const strength: number = Object.values(validate).reduce((a, item) => a + item, 0);
    const feedback = {
        1: EStrength.weak,
        2: EStrength.medium,
        3: EStrength.strong
    }[strength];

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };

    const validatePassword = (password: string): void => {
        const hasNumber: boolean = (/\d+/g).test(password);
        const hasCap: boolean = (/[A-Z]+/g).test(password);
        const hasLow: boolean = (/[a-z]+/g).test(password);
        const has8digit: boolean = password.length > 7;

        setValidate({
            hasLow: hasLow,
            hasCap: hasCap,
            hasNumber: hasNumber,
            has8digit: has8digit
        });
    };

    return (
        <section className="section">
            <div className="section__title">Enter password </div>
            <input
                type ="password"
                className="section__input-password"
                value={password}
                onChange={handleChangePassword}
            />
            <br />
            {strength > 0 ? (
                <progress
                    hidden={password.length === 0}
                    className={`progress strength-${strength}`}
                    value={strength}
                    max="3"
                />
            ) : null}
            <br />
            <div className={`feedback strength strength-${strength}`} hidden={password.length === 0}>
                {feedback}
            </div>
        </section>
    );
}

export default PasswordInput;