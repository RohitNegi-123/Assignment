import React from "react";
import { useState } from "react";
const Form = () => {
    const [form, setForm] = useState({
        name: "",
        age: "",
        batch: "",
    });
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    async function onSubmit(e) {
        e.preventDefault();
        console.log(form, form.name, form.age, form.batch);
        let ag = form.age;

        if (form.name == "" || form.age == "" || form.batch == "" || form.batch == undefined || form.age == undefined) {
            alert("Fill all the details!!")
        }
        else if (ag < 18 || ag > 65) {
            alert("Your are out of the age limit, (18 to 65)")
        }
        else {


            // When a post request is sent to the create url, we'll add a new record to the database.
            // const newPerson = { ...form };

            // await fetch("http://localhost:5000/record/add", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(newPerson),
            // })
            //     .catch(error => {
            //         window.alert(error);
            //         return;
            //     });
            alert("Registration successful!!");
            setForm({ name: "", age: "", batch: "" });
            // navigate("/");
        }
    }
    return (
        <div>
            <h3>Form to fill</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label >Age &nbsp;&nbsp;&nbsp;:&nbsp;</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        value={form.age}
                        onChange={(e) => updateForm({ age: e.target.value })}
                    />
                </div>
                <div>Batch</div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionIntern"
                            value="6am - 7am"
                            // checked={form.level === "67"}
                            onChange={(e) => updateForm({ batch: e.target.value })}
                        />
                        <label htmlFor="positionIntern" className="form-check-label">6am -7am</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionJunior"
                            value="7am - 8am"
                            // checked={form.level === "78"}
                            onChange={(e) => updateForm({ batch: e.target.value })}
                        />
                        <label htmlFor="positionJunior" className="form-check-label">7am - 8am</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionSenior"
                            value="8am - 9am"
                            // checked={form.level === "89"}
                            onChange={(e) => updateForm({ batch: e.target.value })}
                        />
                        <label htmlFor="positionSenior" className="form-check-label">8am - 9am </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="positionOptions"
                            id="positionSenior"
                            value="5pm - 6pm"
                            // checked={form.level === "56"}
                            onChange={(e) => updateForm({ batch: e.target.value })}
                        />
                        <label htmlFor="positionSenior" className="form-check-label">5pm - 6pm </label>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>

    )
}

export default Form;