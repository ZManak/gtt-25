import React from "react";
import { TextInput,Label } from "flowbite-react";

const Input = () => {
  return (<div>
  <div className="mb-2 block">
    <Label
      htmlFor="email3"
      value="Your email"
    />
  </div>
  <TextInput
    id="email3"
    type="email"
    placeholder="name@flowbite.com"
    required={true}
    helperText={<React.Fragment>We'll never share your details. Read our<a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</React.Fragment>}
  />
</div>)
};

export default Input;
