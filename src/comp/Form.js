import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Select a pizza!"),
  size: yup.string().required("Select a size"),
  sauce: yup.string().required("Select a sauce"),
  toppings: yup.string().required("Select some toppings"),
  gluten: yup.string().required("Gluten free Crust?"),
  amount: yup.number().min(1).required("Choose an amount"),
  textarea: yup.string().required("Additional textarea?"),
  terms: yup.boolean().oneOf([true], "Please agree to Terms and Conditions"),
});

const Form = () => {
  const initialSchema = {
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    gluten: "",
    amount: "",
    textarea: "",
    terms: "",
  };

  const [post, setPost] = useState([]);

  const [error, setError] = useState("");

  const [form, setForm] = useState(initialSchema);

  const [btn, setDsiabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    gluten: "",
    amount: "",
    textarea: "",
    terms: "",
  });

  const validate = (e) => {
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((v) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    schema.isValid(form).then((v) => {
      setDsiabled(!v);
    });
  }, [form]);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://reqres.in/api/users", form)

      .then((res) => {
        setPost([...post, res.data]);

        setForm({
          name: "",
          size: "",
          sauce: "",
          toppings: "",
          amount: "",
          textarea: "",
          terms: "",
        });

        setError(null);
      })

      .catch((err) => {
        setError("Error! " + err);
      });
  };

  const onInput = (e) => {
    e.persist();
    const newForm = {
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validate(e);
    setForm(newForm);
  };

  return (
    <div>
      <form className="form" autoComplete="on" onSubmit={onSubmit}>
        {error ? <p className="error">{error}</p> : null}

        <h1>Pizza Builder</h1>
        <label htmlFor="name">
          <span className="form-head">Name</span>
          <input
            id="name"
            type="text"
            name="name"
            onChange={onInput}
            value={form.name}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </label>
        <label onChange={onInput} value={form.size}>
          <span className="form-head">Sizes</span>
          <select htmlFor="size" id="size" name="size" onChange={onInput}>
            <option value="">Select a size</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
          {errors.size.length > 0 ? (
            <p className="error">{errors.size}</p>
          ) : null}
          {console.log(errors.size)}
        </label>
        <label htmlFor="sauce">
          <span className="form-head">Select a Suace</span> <br />
          <input
            checked={form.sauce}
            onChange={onInput}
            name="sauce"
            type="radio"
            value="marinara"
          />{" "}
          Marinara <br />
          <input
            checked={form.sauce}
            onChange={onInput}
            name="sauce"
            type="radio"
            value="whitesauce"
          />{" "}
          White sauce <br />
        </label>
        <br />
        <label id="toppings" htmlFor="toppings">
          <span className="form-head">Toppings</span>
          <div className="toppings">
            <ul className="toppings-row-1">
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Pepperoni"
                />{" "}
                Pepperoni
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Sausage"
                />{" "}
                Sausage
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Sausage"
                />{" "}
                Beef Bacon
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Spicy italian sausage"
                />{" "}
                Spicy italian sausage
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Grilled Chicken"
                />{" "}
                Grilled Chicken
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Diced Tomatoes"
                />{" "}
                Diced Tomatoes
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Yellow Pepper"
                />{" "}
                Yellow Pepper
              </li>
            </ul>
            <ul className="toppings-row-2">
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Black Olives"
                />{" "}
                Black Olives
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Three Cheese"
                />{" "}
                Three Cheese
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Green Pepper"
                />{" "}
                Green Pepper
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Pineapple"
                />{" "}
                Pineapple
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Roasted Garlic"
                />{" "}
                Roasted Garlic
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Grilled Onions"
                />{" "}
                Grilled Onions
              </li>
              <li>
                <input
                  name="toppings"
                  onChange={onInput}
                  type="checkbox"
                  value="Mo' cheese"
                />{" "}
                Extra Cheese
              </li>
            </ul>
          </div>
          {errors.toppings.length > 0 ? (
            <p className="error">{errors.toppings}</p>
          ) : null}
        </label>
        <div className="gluten">
          <span className="crust-text">Gluten Free Crust?</span>
          <label onChange={onInput}>
            <input id="gluten" type="checkbox" name="gluten" value="gluten" />
            <span className="slider"></span>
            {errors.gluten.length > 0 ? (
              <p className="error">{errors.gluten}</p>
            ) : null}
          </label>
        </div>

        <label htmlFor="textarea">
          <textarea
            placeholder="Special instructions?"
            name="textarea"
            onChange={onInput}
            value={form.textarea}
          />
          {errors.textarea.length > 0 ? (
            <p className="error">{errors.textarea}</p>
          ) : null}
        </label>
        <div className="submit-btn">
          <label htmlFor="amount" onChange={onInput}>
            Amount
            <input
              type="number"
              name="amount"
              id="amount"
              name="amount"
              step="1"
              onChange={onInput}
              value={form.amount}
            />
            {errors.amount === 0 ? (
              <p className="error">{errors.amount}</p>
            ) : null}
          </label>
          <button disabled={btn} type="submit">
            Submit
          </button>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={onInput}
          />
          <label htmlFor="tos">Agree to TOS</label>
        </div>
        <br></br>
        {JSON.stringify(post, null, 2)}
      </form>
    </div>
  );
};

export default Form;
