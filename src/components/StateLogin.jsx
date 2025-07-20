import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  // değer girildi mi state'i


  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  // editlendi mi state'i

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  // yukarıdaki state'de email true oldu mu ve email'de @ var mı?


  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }
  // prevent default ile formun broswer tarafından gönderilmesini engelliyoruz.


  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    // varsa önceki değerleri koru, yoksa yeni değerleri ata, indetifier ile hangi değeri güncelleyeceğimizi belirliyoruz.
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }
  //

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  //burada identifier ile hangi değerin editlendiğini
  //belirliyoruz ve didEdit state'ini önceki değeri fark etmeksizin
  //true olarak güncelliyoruz.

 

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
