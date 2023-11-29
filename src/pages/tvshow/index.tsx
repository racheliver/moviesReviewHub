
import { Segment, Header, Loader, Grid, Image,List } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTvShowDetails } from "./query";
export const TvShow = () =>{
  const { id } = useParams<string>();

  const { data, isLoading } = useQuery({
    queryKey: ["tvShow"],
    queryFn: () => (id ? fetchTvShowDetails(id) : Promise.resolve(null)),
    enabled: !!id, // Enable the query only when id is truthy
  });

  if (!id) {
    return <div>Invalid Movie ID</div>;
  }
  if (isLoading) {
    return <Loader active />;
  }

  return (
    <div style={{ margin: 50 }}>
      <Segment>
        <Header>{data.name}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100",
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  size="medium"
                  centered
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
                <List>
                    <List.Item>
                        <List.Header>Created By: </List.Header>
                        {data.created_by.map((creator: any)=>creator.name).join(",")}
                    </List.Item>
                    <List.Item>
                        <List.Header>Budget: </List.Header>
                        {data.budget ? 'Yes' : 'no'}
                    </List.Item>
                    <List.Item>
                        <List.Header>Genres: </List.Header>
                        {data.genres.map((genre: any)=><List.Item key={genre.id}>{genre.name}</List.Item>)}
                    </List.Item>
                    <List.Item>
                        <List.Header>IMDB ID: </List.Header>
                        {data.imdb_id}
                    </List.Item>
                    <List.Item>
                        <List.Header>Popularity: </List.Header>
                        {data.popularity}
                    </List.Item>
                    <List.Item>
                        <List.Header>Production Companies: </List.Header>
                        {data.production_companies.map((company: any)=><List.Item key={company.id}>{company.name}</List.Item>)}
                    </List.Item>
                    <List.Item>
                        <List.Header>Release date: </List.Header>
                        {data.release_date}
                    </List.Item>
                    <List.Item>
                        <List.Header>Revenue: </List.Header>
                        {data.revenue}
                    </List.Item>
                    <List.Item>
                        <List.Header>Runtime: </List.Header>
                        {data.runtime}
                    </List.Item>
                    <List.Item>
                        <List.Header>Vote Average: </List.Header>
                        {data.vote_average}
                    </List.Item>
                    <List.Item>
                        <List.Header>Language: </List.Header>
                        {data.original_language}
                    </List.Item>
                </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );


}