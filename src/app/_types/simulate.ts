interface simulate_option {
  turns: number;
  doorAmount: string;
  user: string;
  onlyResult: boolean;
  isPause: boolean;
}

interface selectionState {
  initialDoor: number | null;
  hasChanged: boolean;
}

interface winOrLose{
  win:number;
  lose:number
}
