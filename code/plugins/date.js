import vue from "vue";
import day from "dayjs";

vue.filter("date", (value, format = "YYYY-MM-DD HH:mm:ss") => {
  return day(value).format(format);
});
