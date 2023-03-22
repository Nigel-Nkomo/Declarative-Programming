# Declarative programming in React

> declare what you want to show and react will figure out how to update the UI

1. Identify your component's visual states
2. Determine what triggers those states
3. Represent state in memory using useState
4. Remove any non-essential state variables
5. Connect event handlers to set the state

## Identify your component's visual states

- visualise all the diffent visual states of the UI the _user_ might _see_ and create a mock.

* **Empty**: Form has a **disabled "Submit" button**.
* **Typing**: Form has an **enabled "Submit button**.
* **Submitting**: Form is **completely disabled**. Spinner is shown.
* **Success**: "Thank you" message is shown instead of form.
* **Error**: Same as typing state with an extra error message

## Determine what triggers those state changes

- **human inputs** like clicking buttons, typing in a field or navigating a link
- **computer inputs** like a network response arriving, a timeout completing or an image loading

In both cases, set state variables to update the UI

- changing the text input (human) from "empty" to "typing" or back depending on whether or not the textbox is empty
- clicking the submit button (human) should switch from "typing" to "submitting"
- successful network response (computer) should switch from "submitting" to "success"
- failed network response (computer) should switch from "submitting" to "error".

## Represent state in memory using useState

- start with state that must be there
- experiment

## Remove any non-essential state variables

const [answer, setAnswer] = useState('')
const [error, setError] = useState(null)
const [isEmpty, setIsEmpty] = useState(true)
const [isTyping, setIsTyping] = useState(false)
const [isSubmitting, setIsSubmitting] = useState(false)
const [isSuccess, setIsSuccess] = useState(false)
const [isError, setIsError] = useState(false)

- does it cause a paradox?
- Is the same information available in another state variable already?
- Can you get the same information from the inverse of another state variable?

const [answer, setAnswer] = useState('')  
const [error, setError] = useState(null)
const [status, setStatus] = useState('typing') // 'typing', 'submitting', or 'success'

## Connect event handlers to set state
