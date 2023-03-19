import { createMachine } from "xstate";

export interface MachineEvent<T, M = Record<string, unknown>> {
  type: T;
  data?: M;
}

export enum GameMachineState {
  INITIAL_STATE = "INITIAL_STATE",
  GAME_IN_PROGRESS = "GAME_IN_PROGRESS",
  POST_GAME = "POST_GAME",
}

export enum GameMachineEvent {
  BACK = "BACK",
  START_GAME = "START_GAME",
  COMPLETE_GAME = "COMPLETE_GAME",
  RESTART_GAME = "RESTART_GAME",
  RETURN_TO_MENU = "RETURN_TO_MENU",
}

export type BackEvent = MachineEvent<GameMachineEvent.BACK>;
export type StartGameEvent = MachineEvent<GameMachineEvent.START_GAME>;
export type CompleteGameEvent = MachineEvent<GameMachineEvent.COMPLETE_GAME>;
export type RestartGameEvent = MachineEvent<GameMachineEvent.RESTART_GAME>;
export type ReturnToMenuEvent = MachineEvent<GameMachineEvent.RETURN_TO_MENU>;

export type GameEvent =
  | BackEvent
  | StartGameEvent
  | CompleteGameEvent
  | RestartGameEvent
  | ReturnToMenuEvent;

const gameMachine = createMachine({
  id: "game",
  initial: GameMachineState.INITIAL_STATE,
  states: {
    [GameMachineState.INITIAL_STATE]: {
      on: {
        [GameMachineEvent.START_GAME]: GameMachineState.GAME_IN_PROGRESS,
      },
    },
    [GameMachineState.GAME_IN_PROGRESS]: {
      on: {
        [GameMachineEvent.BACK]: GameMachineState.INITIAL_STATE,
        [GameMachineEvent.COMPLETE_GAME]: GameMachineState.POST_GAME,
      },
    },
    [GameMachineState.POST_GAME]: {
      on: {
        [GameMachineEvent.RESTART_GAME]: GameMachineState.GAME_IN_PROGRESS,
        [GameMachineEvent.RETURN_TO_MENU]: GameMachineState.INITIAL_STATE,
      },
    },
  },
});

export { gameMachine };
