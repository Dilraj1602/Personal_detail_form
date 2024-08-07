import { Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "India",
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
    comments: false,
    candidate: false,
    offer: false,
    notification: "Everything",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <div className="max-w-[50%] mx-auto border-2 m-2 p-[3.5rem]">
      <form className="space-y-2" onSubmit={submitHandler}>
        <div className="flex flex-col space-y-1 mb-4">
          <label htmlFor="first_name" className="font-normal">
            First name
          </label>
          <input
            onChange={changeHandler}
            type="text"
            id="first_name"
            name="first_name"
            value={data.first_name}
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-black focus:outline-none"
            placeholder="First name"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="last_name" className="font-normal">
            Last name
          </label>
          <input
            onChange={changeHandler}
            type="text"
            id="last_name"
            name="last_name"
            value={data.last_name}
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-black focus:outline-none"
            placeholder="Last name"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="font-normal">
            Email Address
          </label>
          <input
            onChange={changeHandler}
            type="email"
            id="email"
            name="email"
            value={data.email}
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-none"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="country" className="font-normal">
            Country
          </label>
          <select
            name="country"
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-black focus:outline-none"
            onChange={changeHandler}
            value={data.country}
          >
            <option>India</option>
            <option>Pakistan</option>
            <option>Japan</option>
            <option>Korea</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="street_address" className="font-normal">
            Street Address
          </label>
          <input
            onChange={changeHandler}
            type="text"
            id="street_address"
            name="street_address"
            value={data.street_address}
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-black focus:outline-none"
            placeholder="1234 Main St"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="city" className="font-normal">
            City
          </label>
          <input
            onChange={changeHandler}
            type="text"
            id="city"
            name="city"
            value={data.city}
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-black focus:outline-none"
            placeholder="Patna"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="state" className="font-normal">
            State / Province
          </label>
          <input
            onChange={changeHandler}
            type="text"
            id="state"
            name="state"
            value={data.state}
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-black focus:outline-none"
            placeholder="Bihar"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="postal_code" className="font-normal">
            ZIP / Postal Code
          </label>
          <input
            onChange={changeHandler}
            type="text"
            id="postal_code"
            name="postal_code"
            value={data.postal_code}
            className="border-2 border-blue-300 p-2 rounded-md w-full focus:border-black focus:outline-none"
            placeholder="811311"
          />
        </div>

        <div>
          <p className="font-normal mb-4">By Email</p>

          <div>
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={data.comments}
              onChange={changeHandler}
              className="h-[1rem] w-[1rem]"
            />
            <label htmlFor="comments" className="ml-2 font-normal">
              Comments
            </label>
            <p className="ml-6 opacity-60 mt-1">
              Get notified when someone posts a comment on a posting.
            </p>
          </div>

          <div>
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              checked={data.candidate}
              onChange={changeHandler}
              className="h-[1rem] w-[1rem]"
            />
            <label htmlFor="candidate" className="ml-2 font-normal">
              Candidate
            </label>
            <p className="ml-6 opacity-60 mt-1">
              Get notified when a candidate applies for a job.
            </p>
          </div>

          <div>
            <input
              type="checkbox"
              id="offer"
              name="offer"
              checked={data.offer}
              onChange={changeHandler}
              className="h-[1rem] w-[1rem]"
            />
            <label htmlFor="offer" className="ml-2 font-normal">
              Offer
            </label>
            <p className="ml-6 opacity-60 mt-1">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </div>

        <div>
          <div>Push Notification</div>
          <p className="opacity-60">These are delivered via SMS to your mobile phone.</p>

          <div className="flex flex-col space-y-2 mt-4">
            <div>
              <input
                type="radio"
                id="opt1"
                name="notification"
                value="Everything"
                checked={data.notification === "Everything"}
                onChange={changeHandler}
                className="h-[1rem] w-[1rem]"
              />
              <label htmlFor="opt1" className="ml-2 font-normal">
                Everything
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="opt2"
                name="notification"
                value="Same as email"
                checked={data.notification === "Same as email"}
                onChange={changeHandler}
                className="h-[1rem] w-[1rem]"
              />
              <label htmlFor="opt2" className="ml-2 font-normal">
                Same as email
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="opt3"
                name="notification"
                value="No push notification"
                checked={data.notification === "No push notification"}
                onChange={changeHandler}
                className="h-[1rem] w-[1rem]"
              />
              <label htmlFor="opt3" className="ml-2 font-normal">
                No push notification
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="font-bold text-white bg-blue-500 px-4 py-2 rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
