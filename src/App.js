
import ActivityCooking from "./components/activityCooking";
import ActivityRecreational from "./components/activityRecreational";
import ActivityMusic from "./components/activityMusic";
import ActivityRandom from "./components/activityRandom";
import ActivityDiy from "./components/activityDiy";
import ActivityBusywork from "./components/activityBusywork";
import ActivityEducational from "./components/activityEducational";
import ActivityCharity from "./components/activityCharity";
import ActivityRelaxation from "./components/activityRelaxation";
import Header from "./components/header";



function App() {
  return (
    <div className="App">
      <Header />
      <ActivityRecreational />
      <ActivityCooking />
      <ActivityMusic />
      <ActivityRandom />
      <ActivityDiy />
      <ActivityBusywork />
      <ActivityEducational />
      <ActivityCharity />
      <ActivityRelaxation />
    </div>
  );
}

export default App;
