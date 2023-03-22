import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h2>That's right.</h2>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  };

  return (
    <>
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          cols="20"
          rows="5"
          disabled={status === "submitting"}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
        <br />
        <button
          type="submit"
          disabled={status === "submitting" || answer.length === 0}
        >
          Submit
        </button>
        {error !== null && <p className="error">{error.message}</p>}
      </form>
    </>
  );
}

const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    //pretend it's hitting the network
    setTimeout(() => {
      if (answer.toLowerCase() !== "lima") {
        reject(new Error("Good guess but wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
};
