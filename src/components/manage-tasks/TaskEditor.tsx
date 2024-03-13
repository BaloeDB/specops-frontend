import { useContext, useEffect } from "react";
import TaskBody from "../../models/task/TaskBody";
import Modal from "../common/modal/Modal";
import {
  TaskModalContext,
  TaskModalProvider,
} from "../../contexts/TaskModalContext";
import FieldCombination from "./fields/FieldCombination";

const Content = (props: {
  name: string;
  timeframe: string;
  interval: string;
  deadline: string;
  close: () => void;
  submit: (task: TaskBody) => void;
}) => {
  const {
    taskName,
    timeframe,
    interval,
    deadline,
    setTaskName,
    setTimeframe,
    setInterval,
    setDeadline,
  } = useContext(TaskModalContext);

  useEffect(() => {
    if (taskName === "") setTaskName(props.name);
    if (timeframe === 0) setTimeframe(parseInt(props.timeframe));
    if (interval === 0) setInterval(parseInt(props.interval));
    if (deadline === "") setDeadline(props.deadline);
  });

  return (
    <Modal
      name="edit task"
      close={props.close}
      submit={() => {
        props.submit({
          name: taskName,
          timeframe: timeframe,
          interval: interval,
          deadline: deadline,
        });
      }}
      form={<FieldCombination />}
    />
  );
};

const TaskEditor = (props: {
  name: string;
  timeframe: string;
  interval: string;
  deadline: string;
  close: () => void;
  submit: (task: TaskBody) => void;
}) => {
  return (
    <TaskModalProvider>
      <Content
        name={props.name}
        timeframe={props.timeframe}
        interval={props.interval}
        deadline={props.deadline}
        close={props.close}
        submit={props.submit}
      />
    </TaskModalProvider>
  );
};

export default TaskEditor;
