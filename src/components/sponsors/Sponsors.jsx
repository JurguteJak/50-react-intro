import { Button } from '../button/Button';
import style from './Sponsors.module.css';
export function Sponsors() {
    return (
        <section className={style.sponsors}>
            <Button url="#" text="Sponsor Vite" />
            <Button url="#" text="Sponser Jurgita" />
        </section>
    );
}