import { DisplayType } from ".";
import { Grid,Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";

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
    const { data, displayType } = props;

    return (
    <Grid
        columns={4}
        stackable
        centered
        verticalAlign="top"
        padded
    >
        {data.map((displayData: DisplayData) =>(
            <Grid.Column key={displayData.id}>
                <Card.Group>
                    <Link to={`/${displayType===DisplayType.Movies? "movie":"tvshow"}/${displayData.id}`}>
                        <Card 
                            fluid
                            image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                            header={displayType === DisplayType.Movies
                                ? data[0].title
                                : data[0].name}
                            meta={`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_avarage}`}
                            description={data[0].overview.slice(0, 100)+ "..."}
                        />
                    </Link>
                </Card.Group>
            </Grid.Column>
        ))}
    </Grid>       

  );
};
