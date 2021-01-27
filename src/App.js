import Container from "./components/container";
import SubmitButton from "./components/customButton";
import InputLabel from "./components/customTextInput";
import { useForm } from "react-hook-form";
import "./index.css";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log("data", data);
  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container bg-white w-auto h-1/2 flex flex-col items-center justify-center p-10"
        style={{ borderRadius: 32 }}
      >
        {errors.email && <span>Email field is required</span>}
        {errors.password && <span>Password field is required</span>}

        <InputLabel
          name="email"
          label="Email"
          ref={register({ required: true })}
        />
        <InputLabel
          name="password"
          label="Password"
          ref={register({ required: true })}
        />
        <SubmitButton label="Submit" />
      </form>
    </Container>
  );
}

export default App;
