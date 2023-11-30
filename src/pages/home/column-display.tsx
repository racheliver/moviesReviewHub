import { DisplayType } from ".";
import { Grid, Card, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {useMutation} from "@tanstack/react-query"
import { useState } from "react";
import { rateMovie, rateTvShow } from "./mutation";

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
  const [rating, setRating] = useState<number>(0);
  const {mutate: rateMovieMutation} = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id: number)=> rateMovie(id,rating),
  })
  const {mutate: rateTvShowMutation} = useMutation({
    mutationKey: ["rateTvShow"],
    mutationFn: (id: number)=> rateTvShow(id,rating),
  })
  const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation
  return (
    <Grid columns={4} stackable centered verticalAlign="top" padded>
      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Link
              to={`/${
                displayType === DisplayType.Movies ? "movie" : "tvshow"
              }/${displayData.id}`}
            >
              <Card
                fluid
                image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                header={
                  displayType === DisplayType.Movies
                    ? data[0].title
                    : data[0].name
                }
                meta={`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_avarage}`}
                description={data[0].overview.slice(0, 100) + "..."}
              />
            </Link>
            <Form style={{ marginTop: 10 }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    min="0"
                    max="10"
                    onChange={(e)=>setRating(e.target.valueAsNumber)}
                    action={{
                        color: "violet",
                        labelPosition: "right",
                        icon: "star",
                        content: "Rate",
                        onClick: ()=>{
                            rate(displayData.id);
                        }
                    }}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
};
