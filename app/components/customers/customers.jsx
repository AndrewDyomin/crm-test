import Status from "./status";
import css from "./customers.module.css";

export default function Customers() {
  const customers = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      tel: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      tel: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      tel: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      tel: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
    },
    {
      name: "Jerome Bell",
      company: "Google",
      tel: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active",
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      tel: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Curaçao",
      status: "Active",
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      tel: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      tel: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive",
    },
  ];

  return (
    <div className={css.area}>
      <div className={css.titleArea}>
        <div>
          <h2 className={css.title}>All Customers</h2>
          <p className={css.description}>Active Members</p>
        </div>
        <div className={css.searchArea}>
          <svg className={css.searchIcon}>
            <use href="/sprite.svg#icon-search" width={24} height={24} />
          </svg>
          <input className={css.searchInput} placeholder="Search" />
        </div>
      </div>
      <ul className={css.headersList}>
        <li>Customer Name</li>
        <li>Company</li>
        <li>Phone Number</li>
        <li>Email</li>
        <li>Country</li>
        <li>Status</li>
      </ul>
      <ul>
        {customers.map((customer) => (
          <li key={customer.name}>
            <ul className={`${css.headersList} ${css.customersList}`}>
              <li>{customer.name}</li>
              <li>{customer.company}</li>
              <li>{customer.tel}</li>
              <li>{customer.email}</li>
              <li>{customer.country}</li>
              <li>
                <Status toggle={customer.status} />
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <div className={css.paginationArea}>
        <p className={css.showData}>Showing data 1 to 8 of 256K entries</p>
        <ul className={css.buttonList}>
          <li>
            <button className={css.paginationBtn}>
              <svg className={css.sideIcon}>
                <use href="./sprite.svg#icon-left" width={10} height={10} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.currentPagination}>
              1
            </button>
          </li>
          <li>
            <button className={css.paginationBtn}>
              2
            </button>
          </li>
          <li>
            <button className={css.paginationBtn}>
              3
            </button>
          </li>
          <li>
            <button className={css.paginationBtn}>
              4
            </button>
          </li>
          <li>
            
              ...
            
          </li>
          <li>
            <button className={css.paginationBtn}>
              40
            </button>
          </li>
          <li>
            <button className={css.paginationBtn}>
              <svg className={css.sideIcon}>
                <use href="./sprite.svg#icon-right" width={10} height={10} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
