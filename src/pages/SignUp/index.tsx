import React, { FormEvent, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name,
        });

        sendEmailVerification(user);

        console.log({ user });
        // ...
      })
      .catch((error) => {
        console.log({ error });

        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // console.log("username", username);
    // console.log("password", password);
  };

  return (
    <div className="App">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default SignUp;
