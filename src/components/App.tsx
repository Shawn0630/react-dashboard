import * as React from "react";
import * as styles from "../styles/app.scss";

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1 className={styles.appHeader}>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export {App};
