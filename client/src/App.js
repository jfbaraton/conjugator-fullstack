import logo from './logo.svg';
import api from './services/api';
import './App.css';
import {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"

const Input = ({ label, register, required, pattern }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} pattern={ pattern } required={ required }/>
  </>
)

export default function App() {
    const [textFromApi, setTextFromApi] = useState("NOT CALLED YET")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

  const onSubmit = (data) => {
    alert("WELL PLAYED! "+JSON.stringify(data))
  }
    console.log(watch("example")) // watch input value by passing the name of it

    const onbuttonClick = () => {
        api.get('/about')
            .then(response => {
                console.log('Health check response:', response.data);
                setTextFromApi(response.data);
            })
            .catch(error => {
                console.error('Error during health check:', error);
            });
    }
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              read from API: {textFromApi}
            </p>
              <button onClick={onbuttonClick} >Click ME</button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Guess what API said" pattern={textFromApi} register={register} required/>
          <input type="submit" />
        </form>
          </header>
        </div>
    );
}

