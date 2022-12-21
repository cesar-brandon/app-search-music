import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
});

export default function Date() {
  const getDate = () => {
    const today = dayjs().format("MMMM D");
    return today;
  };

  return (
    <div className="Date">
      <p>{getDate()}</p>
    </div>
  );
}
