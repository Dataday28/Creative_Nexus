import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import styles from "./styles.module.css"

const Subscribe = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({criteriaMode: "all"});


    const handleSubmitForm = (data) => {
        console.log(data);
        alert("Register Succesful");
    }

    const handleClearClick = () => {
        reset();
    }

    const singleErrorMessage = (name = String) => {

        return (
                <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => <p className={styles.message}>{message}</p>}
                    />
        )
    }

    const multipleErrorMessage = (name = String) => {

        return (
                <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p className={styles.message} key={type}>{message}</p>
                                ))
                                : null;
                        }}
                />
        )
    }

    const labelOneMessage = (name = String) => {

        return (
            <label className = {styles.label}>
                {name}
                <input className={styles.input} {...register(name, { required: "This input is required." })} />
            </label>
        )
    }

    const labelTwoMessage = (name = String, value = RegExp, message = String) => {

        return (
            <label className = {styles.label}>
                {name}
                <input className={styles.input} {...register(name, { 
                        required: "This input is required.", 
                        pattern: {
                            value: value, 
                            message: message
                        } 
                    })}
                />
            </label>
        )
    }

    const renderForm = () => {

        return (
            <form className={styles.form} onSubmit = {handleSubmit(handleSubmitForm)}>

                {labelOneMessage("Name")}
                {singleErrorMessage("Name")}

                {labelTwoMessage("Age", /\d+/, "This input is number only")}
                {multipleErrorMessage("Age")}

                {labelTwoMessage("Country", /^[A-Za-z]+$/, "This input is letter only")}
                {multipleErrorMessage("Country")}

                {labelTwoMessage(
                    "Email",
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    "It must follow the following format: example@example.com"
                )
                }
                {multipleErrorMessage("Email")}

                <div className={styles.buttons}>
                    <button className={styles.btnClear} type="button" onClick = {handleClearClick}>Clear</button>
                    <button className={styles.btnSub} type="submit">Submit</button>
                </div>
            </form>
        )
    }


    return (
        <div>
            <NavBar />

            <h1 className={styles.title}>Subscribe</h1>
            <div className={styles.container}>
                <p className={styles.parrafo}>You can subscribe to our newsletter to receive a weekly email with information about upcoming exhibitions.</p>
            </div>
            {renderForm()}

            <Footer />
        </div>
    )
}

export default Subscribe;