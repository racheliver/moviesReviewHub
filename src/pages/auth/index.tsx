import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Auth = () => {

  const { data, mutate } = useMutation({
    mutationKey: ["Login"],
    mutationFn: mutationLogin,
  });
  
  useEffect(() => {
    const checkLocalStorage = async () => {
      try {
        if (localStorage.getItem("guest_session_id")) {
          console.log(localStorage.getItem("guest_session_id"));
        } else {
          await mutate();

          if (data && data.guest_session_id) {
            const guestSessionId = data.guest_session_id;

            console.log('index', guestSessionId);

            localStorage.setItem("guest_session_id", guestSessionId);
          }
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle any errors that occurred during mutation or local storage update
      }
    };

    checkLocalStorage();
  }, [data, mutate]);
  const navigate = useNavigate();
  const handlerLogin =  () => {

    navigate("/");
  
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome! Login by registering as a guest below
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" fluid onClick={handlerLogin}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );

};