import css from './customers.module.css';

export default function Status({ toggle }) {
    return (
        <div className={toggle === 'Active' ? css.active : `${css.active} ${css.inactive}`}>
            <p className={css.toggle}>{toggle}</p>
        </div>
    )
}