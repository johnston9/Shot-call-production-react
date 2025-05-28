import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Form } from "react-bootstrap";

export default function BillingDetailsFields({
  formData,
  setFormData,
  handleInputChange,
  //   formError,
  //   stateList,
  isInlineValidation,
}) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);

  // Fetch countries on component mount
  useEffect(() => {
    axiosInstance
      .get("/countries/")
      .then((response) => {
        console.log(response.data?.data);
        setCountries(response?.data?.data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  //   Fetch states when a country is selected
  useEffect(() => {
    if (formData.country) {
      axiosInstance
        .get(`/states/${formData.country}/`)
        .then((response) => setStates(response.data?.data))
        .catch((error) => console.error("Error fetching states:", error));
    } else {
      setStates([]);
      // setCities([]);
    }
  }, [formData.country]);

  // Fetch cities when a state is selected
  // useEffect(() => {
  //   if (formData.state) {
  //     axiosInstance
  //       .get(`/cities/${formData.state}/`)
  //       .then((response) => setCities(response.data?.data))
  //       .catch((error) => console.error("Error fetching cities:", error));
  //   } else {
  //     setCities([]);
  //   }
  // }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const currency = [
    {
      id:"1",
      name:'EURO',
      icon:"€",
      value: 'EUR'
    },
    {
      id:"2",
      name:'US Dollar ',
      icon:"$",
      value: 'USD'
    },
    {
      id:"3",
      name:'British Pound Sterling',
      icon:"£",
      value: 'GBP'
    },
  ]
  return (
    <>

      <Form.Group controlId="formCurrency">
        <Form.Label>Select Currency</Form.Label>
        <Form.Control
          as="select"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          required
          // disabled={!formData.country}
        >
          <option value="">Select Currency</option>
          {currency.map((item) => (
            <option key={item.id} value={[item.value,item.icon]}>
              {item.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>



      <Form.Group controlId="formAddressLine1">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          placeholder="Enter your address"
          required
        />
      </Form.Group>

      <Form.Group controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control
          as="select"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.code2} value={country.code2}>
              {country.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formState">
        <Form.Label>State</Form.Label>
        <Form.Control
          as="select"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          disabled={!formData.country}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.name} value={state.name}>
              {state.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          required
        />
      </Form.Group>

      <Form.Group controlId="formPostalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Enter postal code"
          required
        />
      </Form.Group>
    </>
  );
}
