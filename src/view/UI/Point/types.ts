export type PropsPoint = {
  descr: string;
  title: string;
  coords: number[];
  id: number;
};

export type PropsEvent = {
  onPlacemarkClick: (obj: PropsPoint) => void;
  onDelete: (id: number) => void;
};
