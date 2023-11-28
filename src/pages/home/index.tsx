import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "./column-display";
import { fetchMovies, fetchTvShows } from "./query";
import { QueryFunction, useQuery } from "@tanstack/react-query";
export enum DisplayType {
  Movies,
  TvShows,
}
export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );
  const { data: dataMovies, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["Movies"],
    queryFn: fetchMovies,
  });
  const { data: dataTvShows, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["TvShows"],
    queryFn: fetchTvShows,
  });
  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      <Button.Group>
        <Button
          color={displayType === DisplayType.Movies ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TvShows
        </Button>
      </Button.Group>
 
      {isLoadingMovies || isLoadingTvShows ? (
  <div>Loading...</div>
    ) : (
    <div style={{ marginTop: 20 }}>
        {displayType === DisplayType.Movies ? (
        <ColumnDisplay data={dataMovies?.results} displayType={DisplayType.Movies} />
        ) : (
        <ColumnDisplay data={dataTvShows?.results} displayType={DisplayType.TvShows} />
        )}
    </div>
    )}
    </div>
  );
};
