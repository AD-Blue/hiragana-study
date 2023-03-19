import { useMachine } from "@xstate/react";
import {
  gameMachine,
  GameMachineState,
} from "../components/state-machine/game-machine";

const GamePage = () => {
  const [state, send] = useMachine(gameMachine);

  return (
    <div>{state.matches(GameMachineState.INITIAL_STATE) && <p>Test</p>}</div>
  );
};

export default GamePage;
