import css from "./dashboard.module.css";
import { Customers } from "../customers/customers";

export const Dashboard = () => {
    return(
        <div className={css.dashboardArea}>
            <h1 className={css.title}>Hello Evano 👋🏼,</h1>
            <Customers />
        </div>
    )
}