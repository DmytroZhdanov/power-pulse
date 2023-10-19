import TitlePage from "components/common/TitlePage/TitlePage";
import DayDashboard from "components/diary/DayDashboard/DayDashboard";
import DayExercises from "components/diary/DayExercises/DayExercises";
import DayProducts from "components/diary/DayProducts/DayProducts";
import DaySwitch from "components/diary/DaySwitch/DaySwitch";

export default function Diary() {
  return (
    <>
      <div>Diary page</div>
      <TitlePage />
      <DaySwitch />
      <DayProducts />
      <DayExercises />
      <DayDashboard />
    </>
  );
}
