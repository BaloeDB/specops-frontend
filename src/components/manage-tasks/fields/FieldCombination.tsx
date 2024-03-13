import DeadlineField from "./DeadlineField";
import IntervalField from "./IntervalField";
import NameField from "./NameField";
import TimeframeField from "./TimeframeField";

const FieldCombination = () => {
  return (
    <div>
      <NameField />
      <br />
      <TimeframeField />
      <br />
      <IntervalField />
      <br />
      <DeadlineField />
      <br />
    </div>
  );
};

export default FieldCombination;
