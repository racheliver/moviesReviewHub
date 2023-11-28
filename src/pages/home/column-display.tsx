import { DisplayType } from ".";
export interface DisplayData {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  vote_avarage: number;
  release_date: string;
}
interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}
export const ColumnDisplay = (props: Props) => {
  return (
    <div>
      {props.displayType === DisplayType.Movies
        ? props.data[0].title
        : props.data[0].name }
    </div>
  );
};
