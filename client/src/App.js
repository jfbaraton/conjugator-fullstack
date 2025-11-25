import logo from './logo.svg';
import api from './services/api';
import './App.css';
import "./index.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
    let correctAnswer = "j'aime";
    const [textFromApi, setTextFromApi] = useState(correctAnswer);
    const [submittedAnswer, setSubmittedAnswer] = useState(""); // last submitted value

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const currentInput = watch("answer");

    // Clear messages only if user starts typing a new answer
    if (submittedAnswer && currentInput !== submittedAnswer) {
        setSubmittedAnswer("");
    }

    // Called on valid submission
    const onValid = (data) => {
        console.log("User submitted (correct):", data.answer);
        setSubmittedAnswer(data.answer);
    };

    // Called on invalid submission
    const onInvalid = () => {
        console.log("User submitted (invalid):", currentInput);
        setSubmittedAnswer(currentInput);
    };

    // API call
    const onbuttonClick = () => {
        api.get('/about')
            .then(response => {
                console.log('Health check response:', response.data);
                setTextFromApi(response.data);
            })
            .catch(error => {
                console.error('Error during health check:', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <form onSubmit={handleSubmit(onValid, onInvalid)}>
                    <label>Aimer 1st singular</label>
                    <input
                        {...register("answer", {
                            required: "This field is required",
                            validate: value =>
                                value === textFromApi
                        })}
                    />

                    {/* Show error AFTER submit */}
                    {submittedAnswer && errors.answer && (
                        <p style={{ color: "red" }}>Wrong answer</p>
                    )}

                    {/* Show "Correct!" only AFTER submit */}
                    {submittedAnswer && submittedAnswer === textFromApi && (
                        <p style={{ color: "lime" }}>Correct!</p>
                    )}

                    <button type="submit">Submit for correction</button>
                </form>
            </header>
        </div>
    );
}

export default App;