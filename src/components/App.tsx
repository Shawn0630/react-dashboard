import * as React from "react";
import * as styles from "../styles/app.scss";

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <div className={styles.appLogo} />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export {App};
